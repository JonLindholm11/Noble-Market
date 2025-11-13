import { createProducts } from "#db/queries/products";

export async function seedProducts() {
  const products = [
    {
      product_name: "Camera",
      product_category: "electronics",
      product_description:
        "Capture life's moments in sharp detail with this professional-grade DSLR camera featuring multi-focal lenses and rapid burst mode — because the perfect shot waits for no one. With a 24-megapixel sensor, advanced autofocus system, and 4K video recording capabilities, this camera delivers stunning image quality in any lighting condition. The intuitive touchscreen interface makes it easy for beginners while offering the manual controls professionals demand. Whether you're shooting fast-action sports, breathtaking landscapes, or precious family moments, this camera ensures you'll never miss the shot.",
      basic_price: 899.99,
      product_img:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    },
    {
      product_name: "Headphones",
      product_category: "electronics",
      product_description:
        "Noise-canceling over-ear headphones with crisp highs and deep bass — perfect for tuning out the world or pretending you can't hear people calling your name. Featuring adaptive noise cancellation technology that automatically adjusts to your environment, these premium headphones deliver an immersive listening experience whether you're on a noisy commute or relaxing at home. The plush memory foam ear cushions provide all-day comfort, while the 30-hour battery life ensures your music never stops. With Bluetooth 5.0 connectivity, multipoint pairing, and a foldable design for easy portability, these headphones are your perfect audio companion.",
      basic_price: 149.99,
      product_img:
        "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg",
    },
    {
      product_name: "Drone",
      product_category: "electronics",
      product_description:
        "High-performance drone with HD camera and GPS stabilization. Great for photography, exploration, or mildly concerning your neighbors. This advanced quadcopter features intelligent flight modes including follow-me, orbit, and waypoint navigation, making it easy to capture professional-quality aerial footage. The 3-axis gimbal ensures silky-smooth video even in windy conditions, while the 20-minute flight time gives you plenty of opportunity to explore. Real-time HD video transmission lets you see exactly what you're capturing, and the one-touch return-to-home function means you'll never lose your drone. Whether you're a content creator, hobbyist, or aspiring aerial photographer, this drone opens up a whole new perspective.",
      basic_price: 699.99,
      product_img:
        "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg",
    },
    {
      product_name: "Retro Landline Rotary Phone",
      product_category: "electronics",
      product_description:
        "Vintage rotary phone with that satisfying click-click dial — perfect for those who like their conversations slow and dramatic. This fully functional retro landline brings authentic 1960s charm to your home or office. The heavy-duty metal construction and classic bell ringer deliver that nostalgic ring tone that smartphones just can't replicate. Each rotation of the dial produces that iconic mechanical clicking sound, turning every call into a tactile experience. Compatible with modern phone lines, this conversation piece works as both a functional telephone and a statement of your refined taste. Bonus: it's impossible to accidentally butt-dial someone, and telemarketers might just hang up in confusion.",
      basic_price: 89.99,
      product_img:
        "https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg",
    },
    {
      product_name: "Nintendude Swit",
      product_category: "electronics",
      product_description:
        "Play the latest and greatest hits like *Legend of Lunk* and *Mayrio Racing*. Portable, powerful, and slightly familiar. This versatile gaming console seamlessly transitions from handheld to TV mode, letting you game anywhere, anytime. The vibrant 6.2-inch touchscreen display brings games to life with crisp graphics and responsive controls. Detachable controllers offer multiple play styles—use them attached for handheld mode, share them for multiplayer fun, or dock the console for the full living room experience. With a massive library of exclusive titles, family-friendly games, and indie gems, plus online multiplayer capabilities, this console delivers endless entertainment. Battery life lasts up to 9 hours for on-the-go adventures.",
      basic_price: 349.99,
      product_img:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
    },
    {
      product_name: "Fruit Desktop and Tablet Bundle",
      product_category: "electronics",
      product_description:
        "A sleek desktop and tablet set from your favorite fruit-branded company — because taking a bite out of an apple never hurt anyone. This premium bundle includes a stunning 24-inch all-in-one desktop with Retina display that brings your work to vibrant life, paired with a lightweight tablet perfect for creativity on the go. The desktop features a powerful processor, ample storage, and seamless integration with all your favorite apps and services. The included tablet boasts all-day battery life, supports stylus input for digital artists, and syncs effortlessly with your desktop for the ultimate ecosystem experience. Both devices feature the iconic minimalist design that looks as good as it performs. Perfect for creative professionals, students, or anyone who appreciates premium technology.",
      basic_price: 2499.99,
      product_img:
        "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    },
    {
      product_name: "Retro Bulb TV",
      product_category: "electronics",
      product_description:
        "Bring the golden age of television into the modern day — now with 5% less radiation and 100% more nostalgia. This beautifully restored vintage bulb television combines classic 1950s aesthetics with modern technology. The authentic wood cabinet finish and original-style control knobs transport you back in time, while updated internals let you connect modern devices via HDMI. Watch your favorite streaming services on a screen that remembers when TV was an event, not background noise. The warm glow of the picture tube creates a viewing experience that modern flat screens simply can't match. Perfect for retro enthusiasts, collectors, or anyone who wants their entertainment with a side of mid-century charm. Makes an incredible conversation piece.",
      basic_price: 299.99,
      product_img:
        "https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg",
    },
    {
      product_name: "Podcast Microphone",
      product_category: "electronics",
      product_description:
        "Professional condenser microphone with warm tones and crisp clarity — Nixon approved, but we promise, no tapes included. This broadcast-quality microphone captures every nuance of your voice with studio-grade fidelity, making it perfect for podcasters, streamers, voiceover artists, and musicians. The large-diaphragm condenser design delivers rich, warm tones with exceptional detail, while the cardioid polar pattern minimizes background noise and focuses on your voice. Built-in shock mount reduces vibrations and handling noise, and the sturdy metal construction ensures years of reliable performance. Compatible with all standard mic stands and audio interfaces. Whether you're recording your next hit podcast or laying down vocal tracks, this microphone ensures you'll always sound your best.",
      basic_price: 129.99,
      product_img:
        "https://images.pexels.com/photos/2041381/pexels-photo-2041381.jpeg",
    },
    {
      product_name: "Wireless Keyboard",
      product_category: "electronics",
      product_description:
        "Sleek mechanical wireless keyboard with satisfying tactile feedback that makes every keystroke feel like a tiny celebration. This premium keyboard features low-profile mechanical switches that deliver that classic clicky feel without the bulk, while Bluetooth 5.0 connectivity lets you seamlessly switch between up to three devices. The rechargeable battery lasts weeks on a single charge, and the aluminum chassis adds both durability and desk appeal. RGB backlighting with customizable colors ensures you can type in style even in the dark. Perfect for programmers, writers, or anyone who appreciates the difference between typing and truly typing.",
      basic_price: 119.99,
      product_img:
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    },
    {
      product_name: "Smart Watch",
      product_category: "electronics",
      product_description:
        "Feature-packed smartwatch that tracks everything from your steps to your sleep, essentially turning your wrist into mission control for your health. This sleek wearable monitors heart rate, blood oxygen, and activity levels while delivering notifications so you never miss important messages. Built-in GPS tracks your runs without needing your phone, and the water-resistant design survives workouts and accidental sink encounters. The vibrant AMOLED display is easy to read in any light, and the week-long battery life means you spend more time wearing it than charging it. Interchangeable bands let you go from gym to office seamlessly.",
      basic_price: 249.99,
      product_img:
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
    },
    {
      product_name: "Bluetooth Speaker",
      product_category: "electronics",
      product_description:
        "Portable waterproof Bluetooth speaker that pumps out surprisingly big sound from a compact package perfect for adventures. This rugged little powerhouse features 360-degree sound dispersion, deep bass response, and crystal-clear highs that fill any space with your favorite tunes. The IP67 waterproof rating means it survives pool parties, beach trips, and shower concerts with ease. Pair two speakers for true stereo sound, and enjoy up to 12 hours of playback on a single charge. Built-in speakerphone functionality handles calls clearly, and the durable exterior bounces back from drops and bumps.",
      basic_price: 79.99,
      product_img:
        "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg",
    },
    {
      product_name: "External Hard Drive 2TB",
      product_category: "electronics",
      product_description:
        "Ultra-portable 2TB external hard drive that gives you massive storage space that fits in your pocket, because cloud storage is great until the WiFi goes out. This reliable backup solution features USB 3.0 for lightning-fast file transfers, automatic backup software that runs in the background, and plug-and-play compatibility with both Mac and PC. The shock-resistant design protects your precious data from accidental drops, while the compact form factor makes it perfect for travel. Store thousands of photos, hours of 4K video, or your entire music library with room to spare. Password protection and hardware encryption keep your files secure.",
      basic_price: 69.99,
      product_img:
        "https://images.pexels.com/photos/3361486/pexels-photo-3361486.jpeg",
    },
    {
      product_name: "Webcam 1080p",
      product_category: "electronics",
      product_description:
        "Crystal-clear 1080p webcam with autofocus and built-in stereo microphones that makes you look professionally lit for every video call. This plug-and-play camera delivers sharp, vibrant video with automatic light correction that flatters even in dim rooms. The wide-angle lens fits more people in frame for family calls or team meetings, while the privacy shutter gives you peace of mind when the camera's not in use. Universal clip design mounts securely on any monitor or laptop, and USB connectivity works with all major video platforms right out of the box. No more pixelated potato-quality video calls.",
      basic_price: 59.99,
      product_img:
        "https://images.pexels.com/photos/27574914/pexels-photo-27574914.jpeg",
    },
    {
      product_name: "Graphics Tablet",
      product_category: "electronics",
      product_description:
        "Professional drawing tablet with 8192 levels of pressure sensitivity that turns digital art creation into a natural, intuitive experience. This medium-sized tablet features a battery-free pen with tilt recognition, customizable express keys for workflow shortcuts, and a generous active area for comfortable drawing. Compatible with all major creative software including Photoshop, Illustrator, and Clip Studio Paint. The textured surface provides just enough friction to feel like real paper, while the precision and control enable everything from detailed illustrations to photo retouching. Perfect for digital artists, photographers, and designers who demand professional-grade tools.",
      basic_price: 189.99,
      product_img:
        "https://images.pexels.com/photos/9414330/pexels-photo-9414330.jpeg",
    },
    {
      product_name: "USB-C Hub",
      product_category: "electronics",
      product_description:
        "7-in-1 USB-C hub that transforms your laptop's single port into a connectivity powerhouse with every port you actually need. This sleek aluminum adapter features USB-A ports, HDMI 4K output, SD/microSD card readers, and USB-C power delivery that charges your laptop while you work. The compact design travels easily and the plug-and-play functionality requires no drivers or software. Support for dual 4K monitors makes it perfect for productivity setups, while the blazing-fast data transfer speeds handle large file moves effortlessly. Essential for anyone with a modern laptop who still lives in a world of USB-A peripherals.",
      basic_price: 49.99,
      product_img:
        "https://images.pexels.com/photos/4195407/pexels-photo-4195407.jpeg",
    },
    {
      product_name: "Ring Light",
      product_category: "electronics",
      product_description:
        "Adjustable LED ring light with tripod stand that provides perfect, flattering illumination for videos, photos, and video calls. This 10-inch ring features three color temperature modes and dimmable brightness levels to create the ideal lighting for any situation. The included phone holder positions your device right in the center for perfectly aligned shots, while the adjustable tripod extends up to 50 inches. The circular light design eliminates harsh shadows and creates that coveted catch light in your eyes. Essential for content creators, makeup artists, or anyone tired of looking like they're calling from a cave.",
      basic_price: 39.99,
      product_img:
        "https://images.pexels.com/photos/7480538/pexels-photo-7480538.jpeg",
    },
    {
      product_name: "Wireless Charging Pad",
      product_category: "electronics",
      product_description:
        "Qi-certified wireless charging pad that eliminates cable clutter and lets you just drop your phone and go. This sleek charging pad delivers fast wireless charging up to 15W for compatible devices, with intelligent temperature control preventing overheating. The slim, low-profile design fits perfectly on any desk or nightstand, and the non-slip surface keeps your phone securely in place. LED indicator shows charging status at a glance, and the pad works through most phone cases up to 5mm thick. Compatible with all Qi-enabled devices including iPhones, Samsung Galaxy, and more. Welcome to the future of effortless charging.",
      basic_price: 24.99,
      product_img:
        "https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg",
    },
    {
      product_name: "Mechanical Gaming Mouse",
      product_category: "electronics",
      product_description:
        "Precision gaming mouse with customizable RGB lighting and programmable buttons that gives you the competitive edge in every click. This ergonomic powerhouse features an optical sensor with adjustable DPI up to 16,000 for pixel-perfect accuracy, mechanical switches rated for 50 million clicks, and customizable weight system for perfect balance. The braided cable resists tangling, while onboard memory stores your profiles for consistent performance on any computer. Six programmable buttons and intuitive software let you create macros and shortcuts for any game. Whether you're sniping in FPS games or managing complex strategy battles, this mouse delivers speed and precision.",
      basic_price: 69.99,
      product_img:
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    },
    {
      product_name: "E-Reader",
      product_category: "electronics",
      product_description:
        "Paperwhite e-reader with glare-free display that holds thousands of books and reads like actual paper, even in bright sunlight. This 6-inch device features adjustable warm lighting for comfortable reading day or night, weeks of battery life on a single charge, and lightweight design perfect for one-handed reading. The high-resolution display delivers crisp, print-quality text, while the waterproof design means you can read by the pool or in the bath without worry. Built-in adjustable font sizes and styles accommodate any reading preference, and seamless store integration lets you download new books in seconds.",
      basic_price: 139.99,
      product_img:
        "https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg",
    },
    {
      product_name: "Video Doorbell",
      product_category: "electronics",
      product_description:
        "Smart video doorbell with HD camera and two-way audio that lets you see and speak with visitors from anywhere in the world via your smartphone. This weather-resistant doorbell features motion detection that sends instant alerts, night vision for 24/7 visibility, and cloud recording to review missed visitors. The wide-angle lens captures your entire porch, while customizable motion zones reduce false alerts from passing cars. Easy installation works with existing doorbell wiring or battery power, and integration with smart home systems enables automation. Never miss a delivery or unexpected visitor again, and deter package thieves with visible security.",
      basic_price: 179.99,
      product_img:
        "https://images.pexels.com/photos/22710744/pexels-photo-22710744.jpeg",
    },

    {
      product_name: "Gwagen 63",
      product_category: "vehicles",
      product_description:
        "Geländewagen is a luxury SUV made by Mercedes-Benz, and this is the ultimate expression of power and prestige. The G63 combines iconic boxy styling with brutal performance, featuring a handcrafted twin-turbo V8 engine that delivers exhilarating acceleration and a commanding presence on any road. The legendary off-road capability means you can conquer any terrain, from city streets to mountain trails, while enjoying a meticulously crafted interior wrapped in premium leather and cutting-edge technology. Advanced suspension, all-wheel drive, and multiple driving modes ensure you're always in control. This isn't just transportation—it's a statement of success that turns heads wherever you go.",
      basic_price: 199999.0,
      product_img:
        "https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg",
    },
    {
      product_name: "Toyota Land Cruiser",
      product_category: "vehicles",
      product_description:
        "Durable, and highly capable four-wheel-drive SUV built for adventures that last a lifetime. Legendary for its bulletproof reliability and go-anywhere capability, the Land Cruiser has been trusted by explorers, aid workers, and adventurers in the world's harshest environments for decades. This full-size SUV combines serious off-road prowess with surprising on-road refinement, featuring a powerful V8 engine, advanced four-wheel-drive system, and a rugged body-on-frame construction. The spacious three-row interior seats up to eight passengers in comfort, with premium materials and modern technology throughout. Whether you're crossing deserts, climbing mountain passes, or just handling the school run, the Land Cruiser delivers unmatched peace of mind.",
      basic_price: 87745.0,
      product_img:
        "https://images.pexels.com/photos/3879065/pexels-photo-3879065.jpeg",
    },
    {
      product_name: "lamborghini murcielago",
      product_category: "vehicles",
      product_description:
        "Aggressive-looking, two-seater V12 supercar that defines the word 'exotic.' The Murciélago's dramatic scissor doors and razor-sharp Italian design make an entrance impossible to ignore, while the naturally aspirated V12 engine roars to life with a soundtrack that sends shivers down your spine. This mid-engine masterpiece rockets from 0-60 mph in just over 3 seconds, delivering raw, unfiltered performance that demands respect. The fighter-jet inspired cockpit puts you at the center of the action, with every control designed for maximum engagement. All-wheel drive provides surprising stability and control, even when unleashing all 650+ horsepower. This isn't just a car—it's a work of automotive art that happens to be street legal.",
      basic_price: 300000.0,
      product_img:
        "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg",
    },
    {
      product_name: "Porsche 911",
      product_category: "vehicles",
      product_description:
        "Iconic sports car known for its performance and design, perfected over six decades of continuous evolution. The 911 represents the pinnacle of what a sports car should be: thrilling yet usable, powerful yet refined, distinctive yet timeless. The rear-mounted flat-six engine delivers that unmistakable Porsche sound and razor-sharp throttle response, while the perfectly balanced chassis makes every corner an opportunity for driving joy. Modern iterations blend cutting-edge technology with classic 911 character—think adaptive suspension, launch control, and precision all-wheel drive. The interior wraps driver and passenger in luxury with sport seats, premium materials, and intuitive controls. Whether carving canyon roads or cruising the highway, the 911 delivers an unmatched driving experience that justifies its legendary status.",
      basic_price: 251000.0,
      product_img:
        "https://images.pexels.com/photos/1972736/pexels-photo-1972736.jpeg",
    },
    {
      product_name: "Jeep Wrangler",
      product_category: "vehicles",
      product_description:
        "Iconic off-road vehicle with rugged design and a spirit of adventure that dates back to WWII. The Wrangler is the ultimate go-anywhere SUV, featuring removable doors and roof panels that let you experience the outdoors like no other vehicle can. Solid axles front and rear, impressive ground clearance, and aggressive approach/departure angles mean no trail is too challenging. Modern Wranglers combine traditional off-road capability with contemporary comfort, offering touchscreen infotainment, heated seats, and advanced safety features. The powerful engine options and available manual transmission keep the driving experience pure and engaging. Whether you're rock crawling, beach cruising, or just want a vehicle with personality for days, the Wrangler delivers freedom in its purest form.",
      basic_price: 102000.0,
      product_img:
        "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg",
    },
    {
      product_name: "Audi R8",
      product_category: "vehicles",
      product_description:
        "High-performance sports car with a powerful V10 engine borrowed directly from Lamborghini, wrapped in German engineering precision. The R8 is the everyday supercar, delivering exotic performance without the exotic temperament. That naturally aspirated 5.2-liter V10 screams to an 8,700 RPM redline, producing a symphony that would make opera singers jealous. The mid-engine layout and Quattro all-wheel-drive system deliver incredible grip and balance, making the R8 surprisingly accessible even for drivers new to supercars. The virtual cockpit and premium interior rival luxury sedans, while the optional carbon fiber accents and side blades ensure you look the part. Launch control makes for blistering acceleration, yet the R8 remains docile enough for daily driving. This is the supercar you can actually live with.",
      basic_price: 161395.0,
      product_img:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
    },
    {
      product_name: "Ford Mustang",
      product_category: "vehicles",
      product_description:
        "Classic American muscle car with a powerful engine that's been an icon of performance and style since 1964. The Mustang represents accessible horsepower and head-turning looks at a price that won't require selling a kidney. Choose from turbocharged four-cylinder efficiency, the legendary V8's tire-smoking power, or anything in between. The long hood and aggressive stance announce your arrival before the exhaust note does. Modern Mustangs pack sophisticated independent rear suspension, selectable drive modes, and performance tech that would shame supercars from a decade ago. The driver-focused cockpit features retro-inspired styling cues mixed with cutting-edge digital displays. Whether you're at Cars and Coffee or carving back roads, the Mustang delivers that pure American muscle experience that never goes out of style.",
      basic_price: 43000.0,
      product_img:
        "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg",
    },
    {
      product_name: "Tesla Model S",
      product_category: "vehicles",
      product_description:
        "Revolutionary all-electric luxury sedan that redefined what a car can be, delivering supercar acceleration with zero emissions. The Model S features dual-motor all-wheel drive, insane acceleration that pins you to your seat, and a range of over 400 miles on a single charge. The minimalist interior centers around a massive touchscreen that controls everything, while Autopilot assists with highway driving and parking. Over-the-air updates continuously improve the car, adding new features while you sleep. The panoramic glass roof, premium sound system, and spacious interior make every journey comfortable. Ludicrous mode delivers 0-60 mph in under 2 seconds, proving electric doesn't mean boring.",
      basic_price: 94990.0,
      product_img:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    },
    {
      product_name: "Honda Civic",
      product_category: "vehicles",
      product_description:
        "Reliable compact car that's been America's sensible choice for decades, delivering exceptional fuel economy and legendary Honda durability. The Civic offers a surprisingly spacious interior, intuitive technology, and a smooth, comfortable ride perfect for daily commuting. The efficient engine sips fuel while still providing peppy performance, and the excellent resale value means your investment holds strong. Modern safety features include adaptive cruise control, lane-keeping assist, and automatic emergency braking. The trunk swallows groceries and luggage with ease, while the sporty handling makes even mundane errands enjoyable. Whether you're a first-time buyer or a practical veteran, the Civic delivers everything you need without the drama.",
      basic_price: 28550.0,
      product_img:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
    },
    {
      product_name: "Chevrolet Corvette",
      product_category: "vehicles",
      product_description:
        "Mid-engine American supercar that delivers exotic performance at a fraction of the European price tag. The latest Corvette features a 495-horsepower V8 mounted behind the driver for perfect weight distribution and blistering acceleration. The aerodynamic design isn't just for show—it generates serious downforce at speed while turning heads at every stoplight. The driver-focused cockpit wraps around you with supportive seats and perfectly placed controls, while the removable roof panel lets you enjoy open-air motoring. Advanced suspension and magnetic ride control deliver supercar handling with surprising daily-driver comfort. This is America's answer to Ferrari, proving you don't need a six-figure price tag for world-class performance.",
      basic_price: 68400.0,
      product_img:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
    },
    {
      product_name: "Subaru Outback",
      product_category: "vehicles",
      product_description:
        "Adventure-ready wagon with standard all-wheel drive that's equally at home on mountain trails and suburban driveways. The Outback combines SUV capability with car-like handling and fuel economy, featuring impressive ground clearance and a rugged suspension that handles rough roads with ease. The spacious interior seats five adults comfortably, while the massive cargo area swallows camping gear, kayaks, or whatever adventure requires. Symmetrical all-wheel drive and X-Mode provide confidence in snow, mud, and rain. The boxer engine delivers smooth, reliable power, and legendary Subaru durability means these cars run forever. Perfect for outdoor enthusiasts who refuse to choose between practicality and capability.",
      basic_price: 34695.0,
      product_img:
        "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg",
    },
    {
      product_name: "BMW M3",
      product_category: "vehicles",
      product_description:
        "Ultimate sports sedan that delivers track-ready performance wrapped in sophisticated German engineering and luxury. The M3 features a twin-turbo inline-six engine producing over 500 horsepower, launching you from 0-60 in just over 3 seconds while still handling school runs. The precision steering, adaptive suspension, and massive brakes deliver scalpel-sharp handling that makes every corner an event. The luxurious interior features premium leather, carbon fiber accents, and advanced technology. Selectable drive modes transform the character from comfortable cruiser to track weapon at the push of a button. This is the sedan that proves you don't have to sacrifice practicality for performance—you can have both.",
      basic_price: 77595.0,
      product_img:
        "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg",
    },
    {
      product_name: "Ram 1500",
      product_category: "vehicles",
      product_description:
        "Full-size pickup truck that combines serious towing and hauling capability with surprising luxury and refinement. The Ram 1500 features a choice of powerful engines including a smooth V8 or efficient diesel, paired with a class-leading 12-inch touchscreen and available air suspension that delivers a magic carpet ride. The spacious crew cab seats six adults comfortably, while the massive bed handles everything from lumber to motorcycles. Advanced trailer backup assist makes hitching and maneuvering trailers effortless, and the available panoramic sunroof brings unexpected elegance. Whether you're hauling a boat, moving furniture, or just enjoying the commanding view, this truck delivers capability without compromise.",
      basic_price: 59865.0,
      product_img:
        "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg",
    },
    {
      product_name: "Mazda MX-5 Miata",
      product_category: "vehicles",
      product_description:
        "Pure roadster that proves driving joy doesn't require horsepower wars, just perfect balance and an open top. The Miata features lightweight construction, rear-wheel drive, and a perfectly balanced chassis that makes every road feel like a racetrack. The manual transmission and responsive steering connect you to the driving experience in ways modern cars have forgotten. Drop the top in seconds and enjoy wind-in-your-hair motoring at any speed. The modest power means you can explore the engine's full potential on public roads without felony charges. Reliability is legendary, running costs are minimal, and the smile-per-mile ratio is off the charts. The affordable sports car that reminds you why we fell in love with driving.",
      basic_price: 30295.0,
      product_img:
        "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg",
    },
    {
      product_name: "Ford F-150",
      product_category: "vehicles",
      product_description:
        "America's best-selling truck for over four decades, delivering unmatched versatility whether you're working or playing. The F-150 features aluminum construction for strength without excess weight, powerful engine options from efficient turbos to mighty V8s, and towing capacity up to 14,000 pounds. The high-strength steel frame handles the toughest jobs, while the comfortable interior with available massage seats pampers on long trips. Pro Trailer Backup Assist makes reversing with trailers foolproof, and the available generator turns your truck into a mobile power station. Multiple bed lengths and cab configurations ensure there's an F-150 for every need. Built Ford Tough isn't just a slogan—it's a promise.",
      basic_price: 56720.0,
      product_img:
        "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg",
    },
    {
      product_name: "Mercedes-Benz S-Class",
      product_category: "vehicles",
      product_description:
        "Flagship luxury sedan that defines automotive excellence with cutting-edge technology and craftsmanship fit for royalty. The S-Class features hand-stitched leather interiors, advanced air suspension that glides over imperfections, and powerful yet refined engines. The rear seats rival first-class airline seats with massage, heating, cooling, and multiple adjustment positions. Ambient lighting with 64 color options sets the perfect mood, while the massive OLED screens and augmented reality navigation showcase the future of motoring. Advanced driver assistance systems handle highways with minimal input, and the crystal-clear Burmester sound system delivers concert-hall acoustics. This is the car world leaders, celebrities, and anyone who appreciates the finest things choose.",
      basic_price: 116950.0,
      product_img:
        "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg",
    },
    {
      product_name: "Toyota Tacoma",
      product_category: "vehicles",
      product_description:
        "Mid-size pickup truck with legendary reliability and off-road prowess that makes it the adventure seeker's favorite. The Tacoma features rugged body-on-frame construction, available crawl control for technical terrain, and the TRD Pro package that adds serious off-road hardware. The durable interior laughs at mud, dirt, and whatever your adventures throw at it, while still offering modern convenience features. The powerful V6 engine delivers ample power for towing boats and trailers, and the manual transmission option keeps enthusiasts happy. Tacomas hold their value better than nearly any vehicle, often selling used for almost what they cost new. Perfect for weekend warriors who need a truck that's as ready for adventure as they are.",
      basic_price: 34250.0,
      product_img:
        "https://images.pexels.com/photos/29571941/pexels-photo-29571941.jpeg",
    },
    {
      product_name: "Volkswagen Golf GTI",
      product_category: "vehicles",
      product_description:
        "Hot hatch that invented the sport compact segment and continues to define practical performance with German precision. The GTI features a turbocharged engine that delivers thrilling acceleration, a sport-tuned suspension that balances fun and comfort, and the iconic plaid seats that announce your good taste. The hatchback design provides surprising cargo space when you fold the seats, making this as practical as it is fun. The limited-slip differential puts power down efficiently, while adaptive dampers let you dial in your preferred ride. Refined enough for daily commuting yet capable enough for track days, the GTI is the Swiss Army knife of performance cars. The thinking person's sports car that doesn't compromise.",
      basic_price: 32850.0,
      product_img:
        "https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg",
    },
    {
      product_name: "Nissan GT-R",
      product_category: "vehicles",
      product_description:
        "Japanese supercar nicknamed 'Godzilla' that delivers astounding performance through advanced all-wheel-drive technology and twin-turbo power. The GT-R features a hand-built 565-horsepower V6 engine, launch control that enables consistent sub-3-second 0-60 runs, and an advanced all-wheel-drive system that defies physics. The dual-clutch transmission shifts faster than you can blink, while the sophisticated electronics make supercar performance accessible to mere mortals. The aggressive styling with functional aerodynamics turns heads everywhere, and the surprising practicality with rear seats and a usable trunk makes it almost livable daily. This is the car that humbles Porsches and Ferraris at half the price.",
      basic_price: 116040.0,
      product_img:
        "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg",
    },
    {
      product_name: "Range Rover",
      product_category: "vehicles",
      product_description:
        "Luxury SUV that combines British elegance with genuine off-road capability that most owners will never fully explore. The Range Rover features sumptuous leather interiors, real wood trim, and a commanding driving position that surveys the road like royalty. The air suspension delivers limousine-smooth ride quality on pavement and serious articulation on trails. Terrain Response systems optimize performance for any surface from mud to rock to sand, while the luxurious cabin cocoons occupants in climate-controlled comfort. The powerful supercharged engines provide effortless acceleration despite the substantial weight. This is the vehicle that's equally at home at the country club, the opera, or crossing the Sahara—though it spends most of its life at neither.",
      basic_price: 106345.0,
      product_img:
        "https://images.pexels.com/photos/2753877/pexels-photo-2753877.jpeg",
    },
    {
      product_name: "button",
      product_category: "sewing notions",
      product_description:
        "Classic 4-hole plastic sewing button with smooth finish that's been holding garments together since before zippers tried to make them obsolete. These versatile 1.5cm buttons are the unsung heroes of your wardrobe, equally at home on a crisp dress shirt or a cozy cardigan. The durable plastic construction resists cracking and fading, while the traditional 4-hole design ensures secure attachment that won't pop off at the worst possible moment. Available in neutral colors that complement any fabric, these buttons are perfect for repairs, replacements, or adding that finishing touch to your handmade creations. Keep a stash in your sewing kit—you'll be the hero when someone loses a button before an important meeting.",
      basic_price: 0.49,
      product_img:
        "https://images.pexels.com/photos/39548/sewing-needle-thread-mend-eye-of-needle-39548.jpeg",
    },
    {
      product_name: "cotton thread",
      product_category: "sewing notions",
      product_description:
        "Premium 100% cotton all-purpose sewing thread that's stronger than your commitment to finishing that quilt you started three years ago. This 200-yard spool delivers consistent stitch quality with minimal lint buildup, making it perfect for both hand sewing and machine work. The natural cotton fibers create seams that breathe and move with fabric, ideal for quilting, garment construction, and general repairs. Unlike synthetic threads that can melt under high heat, cotton thread is iron-safe and won't damage delicate fabrics. The smooth, even texture feeds cleanly through your machine without breaking or tangling, while the colorfast dye won't bleed onto your precious projects. Whether you're piecing together a masterpiece or just hemming pants, this thread has you covered.",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg",
    },
    {
      product_name: "measuring tape",
      product_category: "sewing notions",
      product_description:
        "Flexible 60-inch measuring tape that's far more honest than your bathroom scale and way more useful. This essential sewing tool features dual-sided markings in both inches and centimeters, because international pattern sizing shouldn't require a math degree. The soft, flexible design conforms perfectly to body curves and fabric edges for accurate measurements every time, while the durable construction resists stretching and tearing even after years of use. Large, easy-to-read numbers mean no squinting required, and the contrasting colors help you quickly find the right measurement. The convenient retractable design keeps it tidy in your sewing basket, and the metal end tab ensures the tape stays put while you measure. Perfect for tailoring, alterations, crafting, or proving that one size definitely doesn't fit all.",
      basic_price: 3.49,
      product_img:
        "https://images.pexels.com/photos/3143085/pexels-photo-3143085.jpeg",
    },
    {
      product_name: "pin (100 ct)",
      product_category: "sewing notions",
      product_description:
        "Premium nickel-plated dressmaker pins that hold fabric together better than your New Year's resolutions. This 100-count box of 1.5-inch pins features ultra-smooth shanks that glide through delicate fabrics without snagging, pulling, or leaving permanent holes. The sharp, precision-ground points pierce cleanly through multiple layers, while the rust-resistant nickel plating ensures they won't stain your pristine white wedding dress fabric. Sturdy enough for heavy-duty projects yet gentle on silks and satins, these pins are the workhorses of any sewing room. The standard 1.5-inch length makes them easy to spot and grab, reducing the risk of accidentally sewing over them—though we all know it happens anyway. Keep them corralled in a pin cushion and resist the magnetic pull of your carpet.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/805920/pexels-photo-805920.jpeg",
    },
    {
      product_name: "rotary cutter",
      product_category: "sewing notions",
      product_description:
        "Professional 45mm rotary cutter with a razor-sharp blade that slices through fabric like butter—just keep your fingers out of the way. This quilter's best friend features an ergonomic soft-grip handle that reduces hand fatigue during marathon cutting sessions, while the precision-ground circular blade delivers clean, straight cuts through multiple layers of fabric in one smooth motion. The essential safety lock mechanism protects both you and the blade when not in use, because emergency room visits really slow down project completion. The 45mm blade size hits the sweet spot between maneuverability and cutting power, perfect for everything from intricate curves to long straight edges. Compatible with standard cutting mats and quilting rulers, this tool transforms fabric cutting from a chore into a satisfying experience. Warning: using scissors after this feels like going back to a flip phone.",
      basic_price: 13.99,
      product_img:
        "https://images.pexels.com/photos/1409217/pexels-photo-1409217.jpeg",
    },
    {
      product_name: "sewing machine",
      product_category: "sewing notions",
      product_description:
        "Versatile portable electric sewing machine that turns fabric and thread into finished projects faster than you can say 'I could just buy this at the store.' This beginner-friendly machine features a selection of essential stitches including straight, zigzag, and decorative options, giving you creative flexibility without overwhelming complexity. The convenient drop-in bobbin system eliminates threading frustration, while the free arm design makes sewing cuffs, sleeves, and pant hems a breeze. Variable speed control lets you start slow and build confidence, and the built-in light illuminates your work area for precision stitching. Lightweight and compact enough to store in a closet or carry to classes, yet sturdy enough for everything from basic repairs to garment construction. Includes essential accessories like presser feet, bobbins, and needles to get you started immediately.",
      basic_price: 99.99,
      product_img:
        "https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg",
    },
    {
      product_name: "scissors",
      product_category: "sewing notions",
      product_description:
        "Professional 8-inch dressmaker shears with stainless steel blades so sharp they could cut through awkward silence—but please stick to fabric. These precision-crafted shears feature the classic offset handle design that keeps your knuckles safely above the cutting surface, allowing for smooth, comfortable cuts through multiple layers of fabric. The premium stainless steel blades maintain their razor edge through countless projects and resist rust even in humid sewing rooms. The longer blade length provides excellent cutting leverage for everything from delicate silks to heavy denim, while the comfortable grip reduces hand fatigue during extended cutting sessions. Unlike those regular scissors your family keeps stealing, these are FABRIC ONLY—using them on paper will dull the blades and earn you the eternal wrath of quilters everywhere. A true investment piece that will last decades.",
      basic_price: 8.49,
      product_img:
        "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg",
    },
    {
      product_name: "sewing kit",
      product_category: "sewing notions",
      product_description:
        "Comprehensive compact sewing kit that packs more utility per square inch than a Swiss Army knife, minus the risk of confiscation at airport security. This all-in-one emergency kit includes an assortment of hand-sewing needles, mini scissors sharp enough for quick fixes, color-coordinated thread cards, straight pins, a protective thimble, and a mini tape measure—basically everything you need to handle wardrobe malfunctions before they become wardrobe catastrophes. The sturdy portable case keeps everything organized and prevents needles from escaping into your luggage or desk drawer. Perfect for travel, dorm rooms, office drawers, or anyone who believes in being prepared. Whether you're reattaching a button before a presentation, hemming pants in a hotel room, or performing emergency repairs on your kid's costume five minutes before the school play, this kit has saved more moments than anyone wants to admit.",
      basic_price: 11.49,
      product_img:
        "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
    },
    {
      product_name: "seam ripper",
      product_category: "sewing notions",
      product_description:
        "Precision seam ripper with a sharp, curved blade that undoes mistakes faster than you can say 'I should have measured twice.' This essential tool features a pointed tip that slides under stitches with surgical precision, while the curved blade slices through threads cleanly without damaging fabric. The protective ball on one prong prevents accidental fabric punctures, and the ergonomic handle provides comfortable grip during extended ripping sessions. Whether you're fixing a sewing mistake, removing old stitches for alterations, or deconstructing garments for reconstruction, this tool makes the job quick and painless. The red handle ensures you can always find it in your sewing basket. Every sewist's best friend when perfection requires a do-over.",
      basic_price: 2.49,
      product_img:
        "https://images.pexels.com/photos/32641558/pexels-photo-32641558.jpeg",
    },
    {
      product_name: "fabric glue",
      product_category: "sewing notions",
      product_description:
        "Permanent fabric adhesive that bonds fabric, trim, and embellishments without heat or needles—because sometimes sewing is optional. This washable, dry-cleanable glue creates flexible bonds that move with fabric, perfect for hemming, appliqués, patches, and quick repairs. The precision tip applicator gives you control for detailed work or broader coverage, and the formula dries clear so mistakes vanish. No more pins slipping during sewing, no more basting stitches to remove later. Great for no-sew projects, costume creation, or reinforcing seams. The acid-free formula won't yellow or damage delicate fabrics over time. Sets in minutes, fully cures in 24 hours, and holds strong through countless wash cycles.",
      basic_price: 4.99,
      product_img:
        "https://images.pexels.com/photos/7014520/pexels-photo-7014520.jpeg",
    },
    {
      product_name: "quilting ruler",
      product_category: "sewing notions",
      product_description:
        "Clear acrylic quilting ruler with laser-precise grid lines that takes the guesswork out of cutting straight, accurate pieces every time. This 6x24 inch ruler features high-contrast yellow and black markings for visibility on any fabric, angle lines for perfect miters, and a non-slip backing that grips fabric without shifting. The thick acrylic construction provides a firm edge for rotary cutters, while the comprehensive grid system includes measurements in multiple increments. Essential for strip piecing, squaring up blocks, and cutting borders with confidence. The transparency lets you see exactly what you're cutting, ensuring pattern placement is always perfect. Whether you're a quilter, sewer, or crafter, this ruler brings professional precision to your projects.",
      basic_price: 12.99,
      product_img:
        "https://images.pexels.com/photos/4614246/pexels-photo-4614246.jpeg",
    },
    {
      product_name: "embroidery floss set",
      product_category: "sewing notions",
      product_description:
        "Rainbow collection of 50 vibrant embroidery floss skeins that brings every color imaginable to your needlework projects. This premium 6-strand cotton floss features rich, colorfast dyes that won't fade or bleed, perfect for cross-stitch, embroidery, friendship bracelets, and decorative stitching. Each 8-meter skein provides ample length for projects, and the divisible strands let you customize thickness for different effects. The organized storage case keeps colors sorted and prevents tangling chaos. From bold primaries to subtle pastels, this collection covers the spectrum. Whether you're stitching intricate patterns, adding decorative details to sewing projects, or teaching kids to embroider, these threads deliver quality and variety that inspires creativity.",
      basic_price: 19.99,
      product_img:
        "https://images.pexels.com/photos/1122844/pexels-photo-1122844.jpeg",
    },
    {
      product_name: "pinking shears",
      product_category: "sewing notions",
      product_description:
        "Professional pinking shears with razor-sharp serrated blades that cut fabric edges in a decorative zigzag pattern while preventing fraying. These specialized scissors feature hardened stainless steel blades that stay sharp through countless projects, comfortable soft-grip handles that reduce hand fatigue, and precisely aligned cutting edges that never miss a tooth. The zigzag cut creates natural fray resistance on woven fabrics, eliminating the need for serging or hem finishing on many projects. Perfect for seam allowances, craft projects, and decorative edges. The 9-inch blade length provides excellent cutting leverage, while the ergonomic design allows for extended use. Essential for garment construction, quilting, and any project where clean, fray-resistant edges matter. Makes ordinary scissors jealous.",
      basic_price: 16.99,
      product_img:
        "https://images.pexels.com/photos/33830661/pexels-photo-33830661.jpeg",
    },
    {
      product_name: "thimble",
      product_category: "sewing notions",
      product_description:
        "Metal thimble with textured dimples that protects your finger while hand-sewing and makes pushing needles through thick fabric effortless. This timeless tool fits snugly on your middle finger, distributing needle pressure across the protected surface instead of creating painful finger dents. The raised dimple pattern grips needle ends securely, preventing slips that lead to stabbed fingers and colorful language. Adjustable sizing ensures a comfortable fit that won't fall off mid-stitch. Essential for quilting through multiple layers, sewing heavy fabrics like denim or canvas, or any hand-sewing session lasting more than five minutes. The durable metal construction lasts generations—seriously, you might inherit one. Transforms hand-sewing from finger torture to pleasant meditation.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/7227396/pexels-photo-7227396.jpeg",
    },
    {
      product_name: "bias tape maker",
      product_category: "sewing notions",
      product_description:
        "Ingenious bias tape maker that transforms fabric strips into perfectly folded bias tape with minimal effort and maximum precision. This metal tool automatically folds fabric edges to the center as you pull strips through, creating professional-quality bias tape at a fraction of store-bought prices. The smooth channel guides fabric evenly, while the shaped tip creates consistent, crisp folds ready for immediate sewing or pressing. Available in multiple widths for different applications from delicate piping to bold bindings. Save money and get exact color matches by making your own tape from coordinating fabrics. Perfect for finishing quilt edges, creating piping, binding armholes, or adding decorative trim. Once you start making your own bias tape, you'll never go back to pre-packaged.",
      basic_price: 7.99,
      product_img:
        "https://loomandstars.com/cdn/shop/products/bias-tape-makers-colorful.jpg?v=1630607647",
    },
    {
      product_name: "fabric marking pen (4-pack)",
      product_category: "sewing notions",
      product_description:
        "Set of four fabric marking pens with disappearing ink that lets you mark cutting lines, dart placements, and quilting designs without permanent consequences. This versatile pack includes water-soluble markers that vanish with a damp cloth, air-erasable pens that fade within 24-48 hours, and white markers for dark fabrics. The fine tips allow for precise marking, while the acid-free ink won't damage or discolor fabric. Essential for transferring pattern markings, marking buttonholes, drawing quilting lines, or noting alterations. No more guessing where that dart should go or eyeballing quilt designs. The marks stay visible while you work but disappear completely when finished, leaving no trace of your planning process. Say goodbye to tailor's chalk dust and hello to precision.",
      basic_price: 8.99,
      product_img:
        "https://images.pexels.com/photos/7147953/pexels-photo-7147953.jpeg",
    },
    {
      product_name: "elastic (10-yard roll)",
      product_category: "sewing notions",
      product_description:
        "High-quality braided elastic that stretches and recovers reliably through countless wearing and washing cycles without losing its grip. This 1-inch wide, 10-yard roll provides versatile elastic for waistbands, cuffs, straps, and any project requiring comfortable stretch. The durable braided construction resists twisting and rolling, maintaining its width during sewing and wear. Soft against skin yet strong enough for heavy-duty applications, this elastic works equally well in athletic wear, pajamas, skirts, or face masks. The neutral color adapts to any fabric, and the consistent width ensures professional-looking results. Can be sewn directly to fabric or threaded through casings. Essential for garment construction, alterations, and craft projects. Holds up through machine washing and drying without becoming saggy or stretched out.",
      basic_price: 6.99,
      product_img:
        "https://images.pexels.com/photos/6094072/pexels-photo-6094072.jpeg",
    },
    {
      product_name: "bobbin (10-pack)",
      product_category: "sewing notions",
      product_description:
        "Pack of 10 universal sewing machine bobbins that ensures you'll never run out mid-project—or at least reduces those occasions significantly. These precision-manufactured bobbins feature smooth edges that won't snag thread and consistent sizing for reliable tension. Compatible with most standard sewing machines, they wind evenly and feed smoothly for skip-free stitching. Clear plastic construction lets you see thread color and remaining amount at a glance. Pre-winding bobbins with frequently used thread colors streamlines your sewing workflow and eliminates that annoying pause to wind a new one. The durable construction withstands repeated use without cracking or warping. Keep a stash of wound bobbins ready and you'll wonder how you ever sewed with just two or three. Essential for any sewing room.",
      basic_price: 4.99,
      product_img:
        "https://images.pexels.com/photos/4614123/pexels-photo-4614123.jpeg",
    },
    {
      product_name: "needle threader",
      product_category: "sewing notions",
      product_description:
        "Ingenious needle threader that makes threading needles foolproof even with aging eyes or shaky hands—a tiny miracle worker. This simple tool features a thin wire loop that passes easily through needle eyes, then opens to accept thread before pulling it back through. What used to take frustrating minutes of squinting and cursing now takes seconds. The ergonomic handle provides easy grip, while the durable wire loop withstands hundreds of uses. Works with hand-sewing needles, embroidery needles, and even some machine needles. Saves time, reduces eye strain, and preserves sanity. Perfect for sewists of all ages but especially appreciated by anyone who's ever considered giving up on a project because they couldn't thread the needle. Small investment, massive quality-of-life improvement.",
      basic_price: 1.99,
      product_img:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL527RRDYaS4nKnOKw_Yg99SjBNd7aBozPD4q1qaGBEHdAwY2MBUXTRVdZBDQIsy_6PxfrhVLoBZsOh3zJy1ylsqMGrfe0eJFImbg9aEfh06GrxNnP4H82xBNKjBoO9TaQTDjQhctaIeEV/s640/needle+threaders+Athena+headed.jpg",
    },
    {
      product_name: "pattern weights (8-pack)",
      product_category: "sewing notions",
      product_description:
        "Heavy-duty pattern weights that hold patterns and fabric securely in place without the pin holes, shifting, or stabbed fingers. These smooth, disc-shaped weights feature rubberized bottoms that grip without sliding and stackable design for compact storage. Simply place weights around pattern edges and cut with confidence—no more patterns shifting mid-cut or pins to remove before cutting. The rounded shape won't tear delicate tissue patterns, and the smooth surface glides over fabric without snagging. Perfect for cutting multiple layers, working with delicate fabrics that show pin marks, or anyone who's tired of stabbing themselves while positioning patterns. Stack them for extra hold on slippery fabrics. Once you switch to pattern weights, you'll wonder why you ever bothered with pins. Essential for serious sewists and pattern cutters.",
      basic_price: 14.99,
      product_img:
        "https://images.pexels.com/photos/34544822/pexels-photo-34544822.jpeg",
    },
    {
      product_name: "Cordless Circular Saw",
      product_category: "construction tools",
      product_description:
        "Professional-grade cordless circular saw that cuts through lumber like a hot knife through butter, powered by battery technology that finally freed us from the tyranny of extension cords. This powerhouse tool features a brushless motor that delivers consistent cutting performance and extended runtime, while the high-capacity lithium-ion battery keeps you working longer between charges. The 7.25-inch carbide-tipped blade handles everything from framing lumber to sheet goods with clean, precise cuts. Electronic brake stops the blade quickly for safety, while the LED work light illuminates your cut line in dim conditions. Ergonomic design with rubberized grip reduces fatigue during all-day jobs, and the tool-free depth and bevel adjustments let you make quick changes on the fly. Compatible with a full system of batteries and chargers that work across multiple tools. Whether you're framing a house or building a deck, this saw delivers pro-level performance without the cord hassle.",
      basic_price: 385.27,
      product_img:
        "https://images.pexels.com/photos/30237884/pexels-photo-30237884.jpeg/",
    },
    {
      product_name: "concrete magnesium float",
      product_category: "construction tools",
      product_description:
        "Professional 16-foot magnesium concrete float that transforms rough concrete into smooth, finished surfaces with the finesse of a master craftsman. This lightweight yet incredibly durable tool is the secret weapon of concrete finishers everywhere, designed to level and smooth freshly poured concrete slabs, walkways, and driveways. The magnesium construction offers the perfect balance—light enough to maneuver all day without your arms falling off, yet rigid enough to bridge low spots and knock down high spots for a perfectly flat surface. The long 16-foot reach lets you finish large areas from the edge without walking on wet concrete, while the straight edge produces that professional-grade flatness that separates the pros from the amateurs. Rounded edges prevent gouging, and the corrosion-resistant material cleans up easily and lasts for years of heavy use. Essential for any concrete work from residential driveways to commercial floors.",
      basic_price: 54.98,
      product_img:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      product_name: "shovel",
      product_category: "construction tools",
      product_description:
        "Heavy-duty round-point shovel that's been humanity's best friend since before we invented the wheel—and honestly, sometimes more useful. This workhorse tool features a forged steel blade that can bite into hard-packed soil, clay, and gravel without bending or breaking, perfect for digging holes, trenching, moving materials, or any task that requires moving earth from point A to point B. The sharp point penetrates tough ground easily, while the dished blade design holds more material per scoop than flat alternatives. Premium hardwood handle with reinforced connection absorbs shock and provides comfortable grip even during extended use. The D-grip handle gives you excellent leverage and control for maximum digging efficiency. Whether you're planting trees, installing fence posts, digging foundations, or just proving that manual labor builds character, this shovel won't let you down. Simple, reliable, and built to outlast trends in power tools.",
      basic_price: 32.98,
      product_img:
        "https://images.pexels.com/photos/7276957/pexels-photo-7276957.jpeg",
    },
    {
      product_name: "skid steer ",
      product_category: "construction tools",
      product_description:
        "Compact yet mighty skid steer loader that's basically a Swiss Army knife on tracks, ready to tackle any job site challenge you throw at it. This versatile powerhouse combines impressive lifting capacity with a tight turning radius, making it perfect for working in confined spaces where larger equipment fears to tread. The front-loading bucket moves earth, gravel, snow, and materials with ease, while the quick-attach system lets you swap between dozens of attachments—augers, trenchers, pallet forks, grapples, and more—in minutes. Enclosed cab with climate control keeps operators comfortable in any weather, while intuitive joystick controls make operation smooth even for less experienced operators. Powerful engine delivers serious torque for pushing, lifting, and digging, yet the compact footprint means less site damage and easier transport. Whether you're grading, excavating, demolishing, or landscaping, this machine multiplies your productivity and eliminates the need for multiple specialized tools. The ultimate job site multitasker.",
      basic_price: 44995.0,
      product_img:
        "https://images.pexels.com/photos/25559744/pexels-photo-25559744.jpeg",
    },
    {
      product_name: "mini excavator",
      product_category: "construction tools",
      product_description:
        "Compact mini excavator that's essentially a much better shovel, if that shovel was powered by hydraulics and could dig a basement in a day. This nimble machine delivers serious digging power in a package small enough to fit through standard gates and navigate tight residential job sites. The 360-degree rotating cab gives you full visibility and reach without repositioning the machine, while precision hydraulic controls allow for delicate work around utilities or aggressive digging in tough soil. Rubber tracks minimize lawn damage and provide excellent traction on slopes and unstable ground. The enclosed cab protects operators from the elements, and the auxiliary hydraulics let you run attachments like augers, breakers, and grapples. Despite its compact size, this excavator digs deep—perfect for foundation work, trenching for utilities, landscaping projects, or any job where you need excavator power without the footprint of full-size equipment. Makes short work of projects that would take days with hand tools.",
      basic_price: 25000.0,
      product_img:
        "https://images.pexels.com/photos/31461653/pexels-photo-31461653.jpeg",
    },
    {
      product_name: "nail gun ",
      product_category: "construction tools",
      product_description:
        "Professional pneumatic framing nailer that drives nails with the satisfying thunk of productivity, turning hours of hammer work into minutes of trigger pulls. This air-powered beast fires 16-penny nails through lumber, plywood, and engineered wood with precision and authority, making framing, decking, and sheathing projects fly by at lightning speed. The tool-free depth adjustment lets you set nails flush or countersunk perfectly every time, while the anti-jam mechanism keeps you working instead of clearing misfires. Lightweight magnesium housing reduces fatigue during all-day use, and the no-mar tip protects finished surfaces from dings and scratches. Sequential and bump-fire modes give you flexibility between precision placement and rapid-fire production work. Connect it to any standard air compressor and experience the joy of never having to swing a hammer again—your arm will thank you. Whether you're building a house, constructing a deck, or tackling a major renovation, this nail gun is the difference between a weekend project and a month-long ordeal.",
      basic_price: 299.11,
      product_img:
        "https://images.pexels.com/photos/6473980/pexels-photo-6473980.jpeg",
    },
    {
      product_name: "hammer",
      product_category: "construction tools",
      product_description:
        "Classic 20-ounce framing hammer with forged steel head that's been the go-to problem solver since the Bronze Age—some technologies just can't be improved upon. This perfectly balanced tool features a smooth face for driving nails flush and a milled face for aggressive gripping when you need extra bite. The precision-weighted head delivers maximum striking force with minimal effort, while the straight claw provides excellent leverage for pulling nails and prying boards. Premium fiberglass handle with anti-vibration technology absorbs shock to reduce arm fatigue and prevent repetitive stress injuries. Textured rubber grip ensures secure hold even when your hands are sweaty or wearing gloves. Unlike fancy power tools that need batteries, compressors, or electrical outlets, this hammer works anywhere, anytime, forever. Essential for framing, demolition, concrete forming, or just having a reliable tool that will never let you down. The ultimate backup tool when technology fails—and it always fails eventually.",
      basic_price: 29.94,
      product_img:
        "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
    },
    {
      product_name: "cordless drill driver",
      product_category: "construction tools",
      product_description:
        "Versatile 20V cordless drill driver that handles everything from delicate assembly to heavy-duty construction with effortless power. This workhorse features a brushless motor for longer runtime and extended tool life, two-speed transmission for precise control or maximum torque, and a keyless chuck that accepts all standard bits. The LED work light illuminates dark work areas, while the ergonomic grip reduces fatigue during extended use. Variable speed trigger gives you complete control from slow starts to full power, and the battery gauge shows remaining charge at a glance. Includes two lithium-ion batteries for continuous work—one charging while one powers your project. Compatible with an entire system of interchangeable batteries across multiple tools. Whether you're building decks, hanging drywall, or assembling furniture, this drill delivers the power and precision you need.",
      basic_price: 149.99,
      product_img:
        "https://images.pexels.com/photos/5974354/pexels-photo-5974354.jpeg",
    },
    {
      product_name: "laser level",
      product_category: "construction tools",
      product_description:
        "Self-leveling rotary laser level that projects perfectly straight lines across walls, floors, and ceilings with pinpoint accuracy. This professional-grade tool automatically levels itself within seconds, eliminating guesswork and ensuring your work is always perfectly aligned. Projects bright red laser lines visible up to 100 feet, with horizontal and vertical modes for any application. The magnetic base and included tripod mount provide versatile positioning options, while the durable construction survives job site abuse. Essential for hanging cabinets, installing tile, framing walls, or any task requiring precise level reference lines. The rotating head creates a 360-degree level plane around the room. Battery-powered for portability, with long runtime that covers full-day projects. Transforms layout work from tedious to effortless.",
      basic_price: 89.99,
      product_img:
        "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg",
    },
    {
      product_name: "miter saw",
      product_category: "construction tools",
      product_description:
        "10-inch compound sliding miter saw that makes precision angled cuts through lumber, trim, and molding with professional accuracy. This powerful saw features a 15-amp motor that slices through hardwoods without bogging down, dual bevel capability for complex angle cuts without flipping workpieces, and sliding rails that extend cutting capacity for wider boards. The laser guide shows exactly where the blade will cut, while adjustable miter and bevel stops lock into common angles with positive detents. The large table provides stable support for long workpieces, and the dust collection port connects to shop vacuums for cleaner operation. Essential for finish carpentry, crown molding, picture frames, or any project requiring perfectly angled cuts. Transforms complicated trim work into straightforward precision cutting.",
      basic_price: 329.0,
      product_img:
        "https://images.pexels.com/photos/8817827/pexels-photo-8817827.jpeg",
    },
    {
      product_name: "tape measure (25-foot)",
      product_category: "construction tools",
      product_description:
        "Heavy-duty 25-foot tape measure with extra-wide blade that extends farther and stands out longer without folding. This essential measuring tool features large, easy-to-read markings in both imperial and metric units, a magnetic hook that grips metal surfaces for one-person measuring, and a tough nylon-coated blade that resists wear and improves visibility. The blade lock holds measurements in place, while the belt clip keeps the tape within easy reach. The reinforced frame survives repeated drops on concrete and job site abuse. Dual-sided printing ensures you can read measurements from any angle, and the cushioned rubber case provides comfortable grip and impact protection. Whether you're framing houses, installing cabinets, or measuring for materials, this tape delivers accuracy and durability that professionals demand.",
      basic_price: 19.99,
      product_img:
        "https://images.pexels.com/photos/5973889/pexels-photo-5973889.jpeg",
    },
    {
      product_name: "angle grinder",
      product_category: "construction tools",
      product_description:
        "Powerful 4.5-inch angle grinder that cuts, grinds, and polishes metal, concrete, and tile with aggressive efficiency. This versatile tool features a high-torque motor that maintains speed under load, tool-free guard adjustment for quick repositioning, and a side handle that installs in multiple positions for comfortable control. The paddle switch with lock-off prevents accidental starts, while the spindle lock makes wheel changes quick and easy. Compatible with grinding wheels, cutting discs, wire brushes, and polishing pads for diverse applications. Excellent for cutting rebar, removing rust, smoothing welds, cutting tile, or grinding down concrete. The compact size fits into tight spaces while still delivering serious power. Essential for metalworking, masonry, and demolition tasks that require aggressive material removal.",
      basic_price: 69.99,
      product_img:
        "https://images.pexels.com/photos/266125/pexels-photo-266125.jpeg",
    },
    {
      product_name: "tool belt",
      product_category: "construction tools",
      product_description:
        "Professional leather tool belt with multiple pockets and loops that keeps essential tools within arm's reach while leaving both hands free to work. This heavy-duty belt features reinforced stitching at stress points, a padded back for all-day comfort, and strategically placed pockets sized for specific tools and hardware. The premium leather construction withstands years of hard use while developing character with age. Multiple hammer loops, tape measure clip, and dedicated pockets for pencils, utility knives, and fasteners ensure everything has its place. The adjustable web belt accommodates different waist sizes and layers of clothing. Suspenders attachment points distribute weight evenly for extended wear. Eliminates countless trips up and down ladders or back to the truck. Essential for carpenters, electricians, and any tradesperson who values efficiency and organization.",
      basic_price: 79.99,
      product_img:
        "https://images.pexels.com/photos/8447885/pexels-photo-8447885.jpeg",
    },
    {
      product_name: "reciprocating saw",
      product_category: "construction tools",
      product_description:
        "Powerful cordless reciprocating saw that demolishes, cuts, and prunes with aggressive back-and-forth blade action perfect for demo work. This beast features variable speed control from precise cutting to maximum demolition power, tool-free blade changes that accept standard reciprocating saw blades, and a pivoting shoe that extends blade life and controls cutting depth. The anti-vibration handle reduces user fatigue during extended cutting sessions, while the LED light illuminates cut lines in dark spaces. Cuts through wood, metal, plastic, and even nail-embedded lumber without hesitation. Essential for remodeling, demolition, cutting pipes, trimming tree branches, or any job that requires aggressive cutting power. The cordless design eliminates extension cord hassles. Often called a sawzall, this tool earns its place as the demolition king.",
      basic_price: 179.99,
      product_img:
        "https://cougarsalesrental.com/cdn/shop/products/ScreenShot2020-05-28at9.13.41AM_701x700.png?v=1590671948",
    },
    {
      product_name: "framing square",
      product_category: "construction tools",
      product_description:
        "Heavy-gauge steel framing square with laser-etched markings that provides precision layout and measurement for carpentry projects. This essential L-shaped tool features a 24-inch body and 16-inch tongue with clearly marked measurements, rafter tables, and conversion charts permanently etched into the metal. The thick steel construction maintains perfect right angles through years of use and abuse. Use it to check square, lay out stair stringers, mark rafters, or as a straight edge for cutting guides. The comprehensive reference tables eliminate calculation errors for common framing tasks. Orange powder-coated finish improves visibility and resists rust. Whether you're framing houses, building decks, or any carpentry requiring square layouts, this tool delivers the accuracy that defines quality workmanship. A carpenter's constant companion since before calculators existed.",
      basic_price: 24.99,
      product_img:
        "https://images.pexels.com/photos/2714073/pexels-photo-2714073.jpeg",
    },
    {
      product_name: "air compressor",
      product_category: "construction tools",
      product_description:
        "Portable 6-gallon pancake air compressor that powers pneumatic nailers, staplers, and air tools with consistent pressure and minimal downtime. This compact powerhouse features an oil-free pump that requires zero maintenance, high-flow regulators and couplers for quick tool changes, and a low-profile pancake tank design that maximizes stability. The 150 PSI maximum pressure handles demanding applications, while the quick recovery time keeps you working instead of waiting. Dual quick-connect couplers let you run two tools simultaneously, and the shrouded regulators protect gauges from damage. The built-in carry handle and compact footprint make transport easy despite the power. Relatively quiet operation won't chase you off the job site. Essential for framing, roofing, trim work, or any pneumatic tool operation. Converts electric power into compressed air power that drives dozens of different tools.",
      basic_price: 199.99,
      product_img:
        "https://images.pexels.com/photos/32588560/pexels-photo-32588560.jpeg",
    },
    {
      product_name: "chalk line",
      product_category: "construction tools",
      product_description:
        "Professional chalk line reel that snaps perfectly straight layout lines across any surface for accurate cuts and installations. This essential marking tool features a high-capacity reservoir that holds extra chalk for extended use, a durable braided line that resists breakage, and a hook that grips edges securely. The gear-driven rewind mechanism reels line in quickly without tangling, while the sliding door lets you refill chalk without mess. The ergonomic case provides comfortable grip and survives drops on concrete. Perfect for laying out walls, marking cut lines on plywood, establishing reference lines for tile or flooring, or any task requiring long straight lines. Fill with blue chalk for temporary lines or red for semi-permanent marks. Fast, accurate, and beats measuring and marking every few feet. Essential for carpenters, masons, and flooring installers.",
      basic_price: 14.99,
      product_img:
        "https://blog.acmetools.com/wp-content/uploads/2020/08/crescent-lufkin-chalk-reel-line.jpg",
    },
    {
      product_name: "utility knife",
      product_category: "construction tools",
      product_description:
        "Heavy-duty retractable utility knife with quick-change blade mechanism and comfortable rubberized grip for precision cutting on any job site. This workhorse features a strong metal body that survives job site abuse, tool-free blade changes that take seconds, and onboard blade storage holding up to five replacement blades. The retractable blade extends to multiple positions for different cutting depths and retracts completely for safe storage. The ergonomic grip reduces hand fatigue during extended use, while the integrated wire stripper and lanyard hole add versatility. Perfect for opening boxes, cutting drywall, trimming materials, scoring tile, or the thousand other cutting tasks that arise daily. Accepts standard utility knife blades available everywhere. Small enough to carry in your pocket but tough enough to handle serious work. Every toolbox needs at least three of these.",
      basic_price: 12.99,
      product_img:
        "https://images.pexels.com/photos/6621024/pexels-photo-6621024.jpeg",
    },
    {
      product_name: "socket set (42-piece)",
      product_category: "construction tools",
      product_description:
        "Comprehensive 42-piece socket set with both metric and SAE sizes that handles virtually any bolt, nut, or fastener you'll encounter. This professional-grade set includes 1/4-inch and 3/8-inch drive sockets, ratchets with smooth 72-tooth mechanisms for working in tight spaces, extension bars for reaching recessed fasteners, and a durable blow-molded case that keeps everything organized. The chrome vanadium steel construction resists wear and corrosion, while the high-polish finish wipes clean easily. Deep and shallow sockets handle different applications, and the size markings laser-etched into each socket never wear off. Essential for automotive work, equipment maintenance, furniture assembly, or any task involving threaded fasteners. The ratcheting mechanism lets you tighten or loosen without repositioning. Beats adjustable wrenches for speed and prevents rounded fasteners.",
      basic_price: 49.99,
      product_img:
        "https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg",
    },
    {
      product_name: "stud finder",
      product_category: "construction tools",
      product_description:
        "Electronic stud finder with multi-sense technology that locates studs, joists, and metal behind walls with pinpoint accuracy. This essential tool uses advanced sensors to detect wood and metal framing members up to 1.5 inches deep, marking edges clearly so you know exactly where to drive screws or nails. The bright LCD screen shows stud location and depth, while audio and visual alerts confirm detection. Automatic calibration adjusts for different wall densities, and the AC wire detection mode warns of live electrical wires. The ergonomic grip and thumb-activated trigger make one-handed operation easy. Essential for hanging heavy objects, mounting TVs, installing shelving, or any project requiring secure attachment to wall framing. Eliminates guesswork and prevents the frustration of missed studs and swiss-cheese walls. Makes hanging things properly the first time actually possible.",
      basic_price: 34.99,
      product_img:
        "https://cdn.shopify.com/s/files/1/0640/1409/0461/files/d67babb9c858c250f34a8cfd2389dc62016189d2.jpg",
    },
    {
      product_name: "pizza",
      product_category: "food",
      product_description:
        "Artisan wood-fired pizza with a perfectly charred crust that's crispy on the outside, pillowy on the inside—basically a circle cut into triangles, but make it gourmet. This hand-tossed masterpiece features premium mozzarella that stretches for days, tangy tomato sauce made from San Marzano tomatoes, and fresh basil that was probably still growing an hour ago. The 12-inch pie is generously topped and baked in a blazing hot oven that creates those coveted leopard spots on the crust. Whether you're feeding a family, fueling a study session, or just embracing your carb-loading destiny, this pizza delivers that perfect balance of cheese, sauce, and dough that makes every slice a celebration. Pairs excellently with procrastination and binge-watching. Warning: may cause heated debates about pineapple as a topping.",
      basic_price: 12.29,
      product_img:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
    },
    {
      product_name: "pasta",
      product_category: "food",
      product_description:
        "Premium Italian-style pasta made from durum wheat semolina that transforms simple noodles into a foundation for culinary masterpieces. This 16-ounce package of perfectly extruded pasta holds sauce like it's getting paid for it, with a textured surface that grabs every drop of your favorite marinara, alfredo, or pesto. Cooks to al dente perfection in just 8-10 minutes, delivering that ideal bite with just enough chew to remind you it's authentic. Versatile enough for everything from quick weeknight dinners to elaborate Italian feasts, this pasta is the blank canvas your sauce has been waiting for. Each serving provides sustained energy and that comforting carb satisfaction humans have been craving since ancient Rome. Pairs perfectly with literally anything you can imagine, from simple butter and garlic to elaborate Bolognese. The ultimate pantry staple that's saved more last-minute dinner emergencies than we can count.",
      basic_price: 1.99,
      product_img:
        "https://images.pexels.com/photos/5907896/pexels-photo-5907896.jpeg",
    },
    {
      product_name: "tacos",
      product_category: "food",
      product_description:
        "Street-style tacos featuring perfectly seasoned meat cradled in warm, soft corn tortillas—because sometimes the best things in life really are just meat in a tortilla. This trio of handheld heaven comes loaded with your choice of carne asada, al pastor, or carnitas, each slow-cooked to tender perfection with authentic spices and techniques passed down through generations. Topped with fresh cilantro, diced onions, and a squeeze of lime that brightens every bite, these tacos deliver explosive flavor in a compact, no-utensils-required package. The double-layered tortillas prevent structural failure mid-bite, while the perfectly balanced toppings ensure every element shines. Served with vibrant salsa verde or smoky salsa roja on the side for customizable heat levels. Whether you're grabbing lunch on the go, feeding a crowd, or just living your best life, these tacos prove that simplicity done right beats complexity every time. Warning: one order is never enough.",
      basic_price: 12.0,
      product_img:
        "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
    },
    {
      product_name: "White Bread",
      product_category: "food",
      product_description:
        "Classic soft white sandwich bread that's been the backbone of lunches since sliced bread became the standard by which all innovations are measured. This freshly baked loaf features a tender, pillowy crumb that's perfect for everything from PB&J sandwiches to French toast to emergency midnight toast cravings. The thin, delicate crust provides just enough structure without interfering with your sandwich-eating experience, while the consistent slice thickness ensures uniform toasting and perfect bread-to-filling ratios. Enriched with vitamins and minerals, each slice offers sustenance beyond just carbs. The subtle sweetness and neutral flavor make it the ultimate versatile bread—it won't compete with your fillings but provides that essential bread foundation we all need. Stays fresh for days when properly stored, though let's be honest, the loaf rarely lasts that long. The tried-and-true choice for those who appreciate bread that knows its place: everywhere.",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/2942327/pexels-photo-2942327.jpeg",
    },
    {
      product_name: "Chicken breast",
      product_category: "food",
      product_description:
        "Premium boneless, skinless chicken breast that's the ultimate blank canvas for healthy eating and meal prep mastery, sold per pound for maximum flexibility. This lean protein powerhouse delivers all the muscle-building nutrition fitness enthusiasts crave with minimal fat, making it the go-to choice for everyone from bodybuilders to families watching their health. The tender, juicy meat grills, bakes, sautés, or stir-fries beautifully, absorbing marinades and seasonings like a flavor sponge while maintaining that satisfying meaty texture. Each pound yields generous portions perfect for salads, sandwiches, pasta dishes, or solo protein servings. Fresh, never frozen, and trimmed to perfection with no waste—just pure, versatile chicken ready to become tonight's dinner hero. Whether you're meal-prepping for the week, feeding picky eaters who 'only eat chicken nuggets,' or crafting restaurant-quality dishes at home, this chicken breast delivers consistent quality and endless possibilities.",
      basic_price: 7.99,
      product_img:
        "https://images.pexels.com/photos/5769384/pexels-photo-5769384.jpeg",
    },
    {
      product_name: "Banana",
      product_category: "food",
      product_description:
        "Nature's perfect portable snack that comes in its own biodegradable wrapper, priced per pound so you can grab as many as you need. These naturally sweet tropical fruits deliver instant energy with a perfect blend of natural sugars, potassium, and fiber that keeps you fueled without the crash. The creamy texture and mild, universally beloved flavor make bananas equally at home in breakfast smoothies, on top of cereal, baked into bread, or just eaten straight while running out the door. They arrive perfectly yellow and ripen at your preferred pace—green if you like them firm and slightly tangy, spotted if you prefer maximum sweetness. The natural potassium helps prevent muscle cramps, making these the athlete's best friend and the reason you see runners eating them before races. Versatile enough for babies learning to eat solid foods and adults who never outgrew banana appreciation. The fruit that's been fueling humanity's adventures since ancient times, now conveniently available without climbing trees.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
    },
    {
      product_name: "Strawberry",
      product_category: "food",
      product_description:
        "Fresh, ruby-red strawberries bursting with sweet-tart flavor that tastes like summer distilled into berry form, priced per pound for flexible portions. These plump, juicy berries are hand-selected at peak ripeness, delivering that perfect balance of sweetness and acidity that makes your taste buds do a happy dance. Each berry features vibrant red flesh dotted with tiny seeds and topped with a jaunty green cap—nature's way of making fruit Instagram-worthy. Rich in vitamin C and antioxidants, strawberries offer guilt-free indulgence whether eaten fresh by the handful, sliced over yogurt and cereal, blended into smoothies, or dipped in chocolate for maximum decadence. The natural sugars provide quick energy without processed sugar's downsides. Versatile enough for everything from elegant desserts to casual snacking, these berries elevate any dish they touch. Perfect for making jam, topping shortcake, or proving that healthy food can absolutely taste amazing. Warning: one pound disappears faster than you'd think.",
      basic_price: 4.99,
      product_img:
        "https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg",
    },
    {
      product_name: "Avocado",
      product_category: "food",
      product_description:
        "Creamy Hass avocado with buttery texture and mild, nutty flavor that's become the unofficial mascot of healthy eating. This nutrient-dense fruit features vibrant green flesh packed with heart-healthy monounsaturated fats, fiber, and potassium. Perfect for guacamole, toast topping, smoothie thickening, or eating with a spoon straight from the shell when no one's watching. The bumpy dark skin protects the precious cargo inside until you're ready. Arrives firm and ripens on your counter in a few days—put in a paper bag with a banana to speed things up. Slice it, dice it, mash it, or spread it. Pairs perfectly with everything from eggs to sushi to salads. The ultimate millennial food that actually lives up to the hype with legitimate nutritional benefits and incredible versatility.",
      basic_price: 2.49,
      product_img:
        "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg",
    },
    {
      product_name: "Ground Beef (80/20)",
      product_category: "food",
      product_description:
        "Premium ground beef with 80% lean meat and 20% fat for the perfect balance of flavor and juiciness, sold per pound. This versatile staple delivers rich beefy flavor and stays moist during cooking thanks to the ideal fat ratio. Perfect for burgers that don't turn into hockey pucks, tacos with actual flavor, meatballs that hold together, meat sauce that tastes like Grandma's, or classic meatloaf. The fat content ensures your dishes stay tender and flavorful rather than dry and disappointing. Fresh ground daily from quality cuts, never frozen and never treated with pink slime or other nonsense. Forms patties easily, browns beautifully, and absorbs seasonings like a champ. Whether you're meal-prepping for the week or firing up the grill for game day, this ground beef delivers consistent quality and taste.",
      basic_price: 6.99,
      product_img:
        "https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg",
    },
    {
      product_name: "Salmon Fillet",
      product_category: "food",
      product_description:
        "Fresh Atlantic salmon fillet with rich, buttery flavor and beautiful coral-pink color that's as nutritious as it is delicious, priced per pound. This premium fish delivers omega-3 fatty acids, high-quality protein, and essential vitamins in every tender, flaky bite. The natural oils keep the fish moist during cooking, whether you grill, bake, pan-sear, or broil it. Mild enough for seafood newcomers yet flavorful enough to satisfy fish enthusiasts. Skin-on for crispy perfection or skinless for easy preparation. Pairs beautifully with lemon, dill, garlic, honey glaze, or teriyaki. Cooks quickly for easy weeknight dinners yet elegant enough for special occasions. Wild-caught or responsibly farmed options available. The fish that makes eating healthy feel like a treat rather than a chore.",
      basic_price: 14.99,
      product_img:
        "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg",
    },
    {
      product_name: "Eggs (Dozen)",
      product_category: "food",
      product_description:
        "Farm-fresh large eggs that are basically nature's perfect food—protein, healthy fats, vitamins, and incredible versatility in one convenient shell. This dozen provides endless meal possibilities from breakfast scrambles to baked goods, hard-boiled snacks to carbonara sauce. The golden yolks and firm whites indicate freshness and quality. Scramble them, fry them, poach them, boil them, bake them, or whip them into meringue. Bind meatloaf, coat chicken, thicken custard, or create mayonnaise. Each egg delivers 6 grams of protein and nutrients like choline and vitamin D. The ultimate meal-prep ingredient that stores for weeks and costs pennies per serving. Whether you're a bodybuilder, a baker, or just someone who appreciates breakfast, eggs deliver unmatched value and nutrition.",
      basic_price: 4.29,
      product_img:
        "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
    },
    {
      product_name: "Greek Yogurt (32 oz)",
      product_category: "food",
      product_description:
        "Thick, creamy Greek yogurt with tangy flavor and protein content that makes regular yogurt jealous. This strained yogurt delivers double the protein of traditional varieties with a luxuriously thick texture that stands a spoon upright. Plain and versatile—sweeten it with honey and fruit, use it as sour cream substitute, blend into smoothies, or eat it straight for a protein-packed snack. The live active cultures support gut health while the calcium builds strong bones. Low in sugar compared to flavored varieties, giving you control over sweetness. Makes an excellent base for parfaits, dips, salad dressings, or marinades that tenderize meat. The 32-ounce tub provides plenty for meal prep or family servings. Satisfying enough to curb cravings while nutritious enough to feel good about eating.",
      basic_price: 5.99,
      product_img:
        "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg",
    },
    {
      product_name: "Coffee Beans (12 oz)",
      product_category: "food",
      product_description:
        "Whole bean medium roast coffee with balanced flavor, smooth body, and the aroma that makes morning worth getting up for. These premium Arabica beans deliver rich coffee flavor with notes of chocolate and nuts, without the bitterness or acidity that requires cream and sugar to mask. Roasted to perfection for optimal flavor extraction whether you use a drip machine, French press, pour-over, or espresso maker. Whole beans stay fresh longer and allow you to grind just before brewing for maximum flavor and aroma. The 12-ounce bag provides roughly 24 cups of liquid motivation. Ethically sourced from sustainable farms and roasted in small batches for consistent quality. Whether you're a coffee snob or just someone who needs caffeine to function, these beans deliver the goods.",
      basic_price: 12.99,
      product_img:
        "https://images.pexels.com/photos/164622/pexels-photo-164622.jpeg",
    },
    {
      product_name: "Cheddar Cheese (8 oz block)",
      product_category: "food",
      product_description:
        "Sharp aged cheddar cheese with bold, tangy flavor and perfect melting properties that elevate everything it touches. This classic cheese features a firm yet creamy texture that shreds easily, melts smoothly, and adds serious flavor to sandwiches, burgers, mac and cheese, omelets, or just eaten in chunks while standing at the fridge. The natural aging process develops complex flavor that goes beyond boring mild cheese. No artificial colors—just real cheese made from milk, cultures, salt, and enzymes. The 8-ounce block provides portion control and stays fresher than pre-shredded varieties that include anti-caking agents. Slice it for sandwiches, shred it for tacos, cube it for snacking, or melt it for the ultimate grilled cheese. Essential for any cheese lover's refrigerator.",
      basic_price: 6.49,
      product_img:
        "https://images.pexels.com/photos/6004715/pexels-photo-6004715.jpeg",
    },
    {
      product_name: "Honey (16 oz jar)",
      product_category: "food",
      product_description:
        "Pure raw honey with natural sweetness and subtle floral notes that's been keeping things sweet since ancient times. This golden nectar contains no added sugars or preservatives—just pure honey from happy bees visiting local wildflowers. The thick, amber liquid sweetens tea, glazes meats, drizzles over yogurt, spreads on toast, or soothes sore throats better than cough syrup. Contains natural antioxidants, enzymes, and minerals that refined sugar lacks. Never expires—archaeologists have found edible honey in ancient tombs. The squeeze bottle makes precise portioning easy without sticky messes. Use it in baking, marinades, salad dressings, or straight from the spoon when no one's looking. Local honey may even help with seasonal allergies. Nature's sweetener that actually offers benefits beyond just tasting good.",
      basic_price: 8.99,
      product_img:
        "https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg",
    },
    {
      product_name: "Peanut Butter (16 oz jar)",
      product_category: "food",
      product_description:
        "Creamy natural peanut butter made from just peanuts and salt—no hydrogenated oils, no added sugars, just pure nutty goodness. This protein-packed spread delivers healthy fats, fiber, and that nostalgic PB&J flavor we all crave. The oil separation on top proves its authenticity—just stir and enjoy. Spread it on toast, blend into smoothies, dollop on oatmeal, use in Thai peanut sauce, bake into cookies, or eat it straight from the jar with a spoon at midnight. Each serving provides plant-based protein and sustained energy that keeps you full. Pairs perfectly with jelly, honey, bananas, apples, celery, or chocolate. The versatile pantry staple that works for breakfast, lunch, snacks, or dessert. Kid-approved, adult-loved, universally craved.",
      basic_price: 5.49,
      product_img:
        "https://images.pexels.com/photos/6659898/pexels-photo-6659898.jpeg",
    },
    {
      product_name: "Rice (5 lb bag)",
      product_category: "food",
      product_description:
        "Long-grain white rice that's fluffy, versatile, and has been feeding civilizations for thousands of years. This staple grain cooks up light and separate, perfect for stir-fries, curries, burrito bowls, fried rice, or as a simple side dish. The neutral flavor absorbs seasonings and sauces beautifully while providing filling carbohydrates and energy. Quick-cooking for weeknight convenience yet elegant enough for special meals. The 5-pound bag provides dozens of servings at pennies per portion. Gluten-free, fat-free, and shelf-stable for months. Works in rice cookers, instant pots, or traditional stovetop methods. Whether you're cooking Asian cuisine, Latin dishes, or just need something to soak up curry sauce, rice delivers reliable results every time. The ultimate budget-friendly ingredient that stretches meals and satisfies hunger.",
      basic_price: 6.99,
      product_img:
        "https://images.pexels.com/photos/6086556/pexels-photo-6086556.jpeg",
    },
    {
      product_name: "Dark Chocolate Bar (70% cacao)",
      product_category: "food",
      product_description:
        "Premium dark chocolate bar with 70% cacao content that delivers rich, complex flavor and antioxidants with every indulgent square. This sophisticated chocolate balances natural sweetness with deep cocoa intensity, minus the sugar overload of milk chocolate. The smooth texture melts on your tongue, releasing notes of fruit, nuts, and pure chocolate bliss. Contains flavonoids and antioxidants that make you feel slightly less guilty about dessert. Perfect for afternoon pick-me-ups, after-dinner treats, baking into brownies, melting for fondue, or portioning out squares for measured indulgence. The individually scored squares make portion control actually possible. Made from ethically sourced cacao beans and real ingredients you can pronounce. Dark chocolate that tastes indulgent while offering actual health benefits beyond just happiness.",
      basic_price: 4.99,
      product_img:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
    },
    {
      product_name: "Olive Oil (16.9 oz bottle)",
      product_category: "food",
      product_description:
        "Extra virgin olive oil with fruity flavor, peppery finish, and the heart-healthy fats that make the Mediterranean diet work. This premium oil is cold-pressed from the first pressing of olives, preserving maximum flavor and nutritional benefits. Drizzle it over salads, dip bread in it, sauté vegetables, roast potatoes, or use as a finishing oil for pasta and grilled meats. The high-quality fats support heart health and provide anti-inflammatory benefits. Rich golden-green color indicates freshness and quality. Versatile enough for cooking yet flavorful enough to use raw. The dark bottle protects delicate oils from light damage. Whether you're making vinaigrettes, marinades, or just want to eat healthier fats, this olive oil delivers flavor and nutrition. The cornerstone of healthy cooking that actually tastes good.",
      basic_price: 11.99,
      product_img:
        "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
    },
    {
      product_name: "Whole Wheat Pasta (16 oz box)",
      product_category: "food",
      product_description:
        "Hearty whole wheat pasta with nutty flavor and nutritional benefits that make regular pasta look lazy. This fiber-rich pasta delivers complex carbohydrates, protein, and essential nutrients while maintaining the satisfying texture and versatility you expect. The golden-brown noodles hold sauce beautifully whether you're making marinara, pesto, alfredo, or simple olive oil and garlic. Cooks in minutes for quick weeknight dinners yet substantial enough for meal prep. Higher fiber content keeps you fuller longer and provides better sustained energy than refined pasta. Works in classic Italian dishes, cold pasta salads, baked casseroles, or Asian stir-fries. The 16-ounce box feeds a family or provides multiple single servings. Al dente texture that doesn't turn mushy even when reheated. For those who want comfort food that actually offers nutrition beyond just calories.",
      basic_price: 3.49,
      product_img:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
  ];
  for (const product of products) {
    await createProducts(product);
  }
  console.log("completed seeding products");
}
