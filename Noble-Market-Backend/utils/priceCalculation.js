export function calculateDiscountedPrice(basic_price, discount_percentage) {
    if (discount_percentage === null || discount_percentage === undefined || discount_percentage === 0) {
        return basic_price;
    }
    return basic_price * (1 - discount_percentage / 100);
}

export function calculateLineTotal(price, quantity) {
    return price * quantity;
}

export function calculateSubtotal(items) {
    return items.reduce((sum, item) => {
        const price = item.customer_price || item.basic_price;
        return sum + calculateLineTotal(price, item.quantity);
    }, 0);
}

export async function getProductsByIds(product_ids, db) {
    if (!product_ids || product_ids.length === 0) {
        return [];
    }
    
    const SQL = `
        SELECT 
            id as product_id,
            product_name,
            basic_price,
            product_category
        FROM products
        WHERE id = ANY($1)
    `;
    
    try {
        const { rows } = await db.query(SQL, [product_ids]);
        return rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getCustomerDiscountMap(customer_id, db) {
    const SQL = `
        SELECT 
            ccp.product_category,
            pc.discount_percentage
        FROM customer_category_pricing ccp
        JOIN price_categories pc ON ccp.price_tier_id = pc.id
        WHERE ccp.customer_id = $1
    `;
    
    try {
        const { rows } = await db.query(SQL, [customer_id]);
        
        const discountMap = new Map();
        rows.forEach(row => {
            discountMap.set(row.product_category, parseFloat(row.discount_percentage));
        });
        
        return discountMap;
    } catch (error) {
        console.error('Error fetching customer discounts:', error);
        return new Map();
    }
}

export async function getCustomerIdByUserId(user_id, db) {
    try {
        const { rows } = await db.query(
            'SELECT id FROM customers WHERE user_id = $1',
            [user_id]
        );
        
        return rows.length > 0 ? rows[0].id : null;
    } catch (error) {
        console.error('Error fetching customer ID:', error);
        return null;
    }
}

export async function hydrateCartItems(cart_data, db) {
    const product_ids = cart_data.map(item => item.product_id);
    
    const products = await getProductsByIds(product_ids, db);
    
    const productMap = new Map(products.map(p => [p.product_id, p]));
    
    return cart_data
        .map(item => {
            const product = productMap.get(item.product_id);
            if (!product) {
                console.log(`Product ${item.product_id} not found`);
                return null;
            }
            return {
                ...product,
                quantity: item.quantity
            };
        })
        .filter(item => item !== null);
}

export async function addCustomerPricing(cart_items, customer_id, db) {
    if (!customer_id) {
        return cart_items;
    }
    
    try {
        const discountMap = await getCustomerDiscountMap(customer_id, db);
        
        return cart_items.map(item => ({
            ...item,
            customer_price: calculateDiscountedPrice(
                item.basic_price,
                discountMap.get(item.product_category) || null
            )
        }));
    } catch (error) {
        console.error('Error adding customer pricing:', error);
        return cart_items;
    }
}

export async function addLineTotals(cart_items) {
    return cart_items.map(item => ({
        ...item,
        line_total: calculateLineTotal(
            item.customer_price || item.basic_price,
            item.quantity
        )
    }));
}

export async function addCartSummary(cart_items) {
    const total = calculateSubtotal(cart_items);
    
    return {
        items: cart_items,
        summary: {
            total: parseFloat(total.toFixed(2))
        }
    };
}

export async function processCart(cart_data, customer_id, db) {
    try {
        let items = await hydrateCartItems(cart_data, db);
        
        if (items.length === 0) {
            return {
                items: [],
                summary: {
                    total: 0
                }
            };
        }
        
        items = await addCustomerPricing(items, customer_id, db);

        items = await addLineTotals(items);

        const result = await addCartSummary(items);
        
        return result;
    } catch (error) {
        console.error('Error processing cart:', error);
        return {
            items: [],
            summary: {
                total: 0
            }
        };
    }
}

export async function addCustomerPricingByUserId(products, user_id, db) {
    if (!user_id) {
        return products;
    }
    
    try {
        const customer_id = await getCustomerIdByUserId(user_id, db);
        
        if (!customer_id) {
            return products;
        }
        
        return await addCustomerPricing(products, customer_id, db);
    } catch (error) {
        console.error('Error adding customer pricing:', error);
        return products;
    }
}