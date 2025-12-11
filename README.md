# Noble Market

A full-stack B2B e-commerce platform featuring role-based access control, customer-specific pricing tiers, and containerized deployment with Docker and Kubernetes.

# Useful Links

https://noble-market-83.netlify.app (live link for the project)

## Features

- **Multi-Role Authentication System**
  - Admin dashboard for platform management
  - Employee interface for sales operations and customer service
  - Customer portal with personalized pricing
  - JWT-based authentication with secure token management

- **Dynamic Pricing Engine**
  - Customer-specific category-based pricing discounts
  - Volume-based pricing strategies
  - Product-level special promotions
  - Real-time price calculations

- **Product Catalog & Orders**
  - Product catalog with category-based filtering
  - Detailed product pages with dynamic pricing
  - Order placement and history tracking

## Tech Stack

**Frontend:**
- React 18
- React Router for client-side routing
- Vite for fast development and optimized builds
- CSS3 for responsive design

**Backend:**
- Node.js with Express
- RESTful API architecture
- JWT for authentication
- Bcrypt for password hashing

**Database:**
- PostgreSQL 16
- Complex relational schema with foreign keys
- Indexes for query optimization

**DevOps:**
- Docker for containerization
- Docker Compose for local development
- Kubernetes for production orchestration
- Nginx for serving static assets

## Prerequisites

- Node.js 18+ and npm
- Docker Desktop
- Git

## Quick Start with Docker

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/noble-market.git
cd noble-market
```

### 2. Start All Services
```bash
docker-compose up --build
```

This will start:
- PostgreSQL database (port 5432)
- Backend API (port 3000)
- Frontend application (port 80)

### 3. Seed the Database
In a new terminal:
```bash
docker-compose exec backend node db/seed.js
```

### 4. Access the Application
- **Frontend:** http://localhost
- **Backend API:** http://localhost:3000

### 5. Test Login Credentials
```
Admin:
Email: admin@projectname.com
Password: admin123

Sales:
Email: salesman1@projectname.com
Password: sales123

Customer Service:
Email: customerservice1@projectname.com
Password: service123

Customer:
Email: user1@projectname.com
Password: user123
```

## Kubernetes Deployment

Complete Kubernetes manifests are available in the `/k8s` directory.

### Deploy to Kubernetes Cluster:
```bash
# Apply all configurations
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/postgres-pvc.yaml
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/postgres-service.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

# Verify deployment
kubectl get all -n noble-market
```

See [k8s/README.md](k8s/README.md) for detailed Kubernetes deployment instructions.

##  Project Structure
```
noble-market/
├── docker-compose.yml           # Docker orchestration
├── Noble-Market-Backend/        # Express API
│   ├── Dockerfile
│   ├── server.js
│   ├── db/                      # Database schemas and seeds
│   ├── api/                     # Route handlers
│   └── middleware/              # Auth and validation
├── Noble-Market-Frontend/       # React application
│   ├── Dockerfile
│   ├── nginx.conf              # Nginx configuration
│   └── src/                    # React components
└── k8s/                        # Kubernetes manifests
    ├── namespace.yaml
    ├── configmap.yaml
    ├── *-deployment.yaml
    └── *-service.yaml
```

##  Architecture

### Containerized Microservices
```
┌─────────────────┐
│  Frontend       │  React + Nginx (Port 80)
│  Container      │  
└────────┬────────┘
         │ API Calls
┌────────▼────────┐
│  Backend        │  Express API (Port 3000)
│  Container      │
└────────┬────────┘
         │ SQL Queries
┌────────▼────────┐
│  PostgreSQL     │  Database (Port 5432)
│  Container      │
└─────────────────┘
```

### Multi-Stage Docker Build
- **Frontend:** Two-stage build for optimized production bundle
- **Backend:** Single-stage build with production dependencies only
- **Total image size reduction:** ~95% vs development builds

##  Security Features

- Bcrypt password hashing with salt rounds
- JWT token-based authentication
- Role-based access control (RBAC)
- Environment variable management
- SQL injection prevention with parameterized queries

##  Key Technical Achievements

- **Containerization:** Full Docker and Kubernetes deployment pipeline
- **Scalability:** Kubernetes replicas for high availability
- **Performance:** Nginx caching and optimized builds
- **Database Design:** Complex relational schema with proper indexing
- **API Design:** RESTful endpoints with proper error handling

##  API Endpoints

### Authentication
- `POST /users/register` - Create new user account
- `POST /users/login` - Authenticate and receive JWT token

### Products
- `GET /products` - List all products
- `GET /products/:id` - Get product details

### Orders
- `GET /orders` - List user orders
- `POST /orders` - Create new order
- `GET /orders/:id` - Get order details


##  Development

### Local Development (Without Docker)

**Backend:**
```bash
cd Noble-Market-Backend
npm install
npm run dev
```

**Frontend:**
```bash
cd Noble-Market-Frontend
npm install
npm run dev
```

##  Stopping Services

### Docker Compose:
```bash
docker-compose down
```

### Kubernetes:
```bash
kubectl delete namespace noble-market
```

##  What I Learned

This project demonstrates:
- Full-stack application development with modern frameworks
- Containerization and orchestration with Docker and Kubernetes
- Complex database design and relationships
- RESTful API architecture
- Authentication and authorization patterns
- Multi-stage Docker builds for optimization
- Production-ready deployment configurations

##  Future Enhancements

## Future Enhancements

- [ ] **Warehouse Management Role**
  - Dedicated portal for warehouse staff to view and process customer orders
  - Dedicated portal for warehouse management to assign staff with orders
  - Notification system to alert other staff with issues / completion of orders
  - Dedicated role for these employee tiers (Warehouse staff, Warehouse managers)

- [ ] **Real-Time Inventory System**
  - Live stock level tracking
  - Low inventory alerts for admins
  - Automatic reorder notifications
  - Inventory adjustment logs

- [ ] **Performance Optimization**
  - Image compression and lazy loading for faster load times
  - Database query optimization and caching
  - Remove unnecessary code and dependencies to reduce application size

##  License

This project was created as a capstone project for educational purposes with fullstack academy.

##  Author

**[Jon Lindholm]**
- GitHub: [@JonLindholm11](https://github.com/JonLindholm11)
- LinkedIn: [Jon Lindholm](https://www.linkedin.com/in/jon-lindholm-3507b338a)

##  Acknowledgments

Built as part of a full-stack web development bootcamp, enhanced with containerization and orchestration technologies.

