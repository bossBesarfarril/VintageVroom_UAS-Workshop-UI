/**
 * VintageVroom - Global Mock Database
 * Loaded globally via script tag (supports double-click file:// access).
 */

const VintageVroomDB = {
    categories: [
        { id: 'engine', name: 'Engine' },
        { id: 'electrical', name: 'Electrical' },
        { id: 'exhaust', name: 'Exhaust' },
        { id: 'carburetor', name: 'Carburetor' },
        { id: 'body', name: 'Body & Frame' },
        { id: 'suspension', name: 'Suspension' },
        { id: 'brakes', name: 'Braking System' }
    ],

    compatibility: [
        'Yamaha RX-King',
        'Honda CB100',
        'Honda GL Pro',
        'Vespa Excel',
        'Kawasaki Binter Merzy',
        'Yamaha DT100',
        'Honda Astrea Grand'
    ],

    products: [
        {
            id: 1,
            name: 'Keihin PE28 Carburetor Japan',
            slug: 'keihin-pe28-carburetor-japan',
            category: 'carburetor',
            price: 185000,
            stock: 12,
            compatibility: ['Yamaha RX-King', 'Honda CB100', 'Honda GL Pro'],
            image: 'assets/images/products/karburator.jpg',
            sku: 'KB-PE28-KHN',
            description: 'Original Keihin PE28 carburetor Japan re-issue. Extremely easy to tune for both 2-stroke and 4-stroke engines. Increases performance and provides longer gear pulls.',
            specifications: '28mm venturi diameter, premium aluminum alloy material, includes air hose and fuel hose.',
            guide: 'Install on the PE28 rubber intake manifold, adjust the pilot jet and main jet sizes to get the best air/fuel mixture according to your engine character.'
        },
        {
            id: 2,
            name: 'CB100 Standard Chrome Exhaust',
            slug: 'cb100-standard-chrome-exhaust',
            category: 'exhaust',
            price: 320000,
            stock: 5,
            compatibility: ['Honda CB100', 'Honda GL Pro'],
            image: 'assets/images/products/knalpot.jpg',
            sku: 'KN-STND-CB100',
            description: 'Standard replica exhaust for Honda CB100 with a glossy 3-layer thick chrome finish. Produces a calm, deep bass sound typical of classic 70s motorcycles.',
            specifications: '1.2mm thick iron plate material, nickel chrome plating finish, precision plug-and-play for standard CB100 exhaust pipes.',
            guide: 'Ensure the exhaust gasket is installed correctly to avoid sound leaks. Tighten the exhaust pipe bolts gradually.'
        },
        {
            id: 3,
            name: 'Oversize 0.50 GL Pro Piston Kit',
            slug: 'oversize-gl-pro-piston-kit',
            category: 'engine',
            price: 275000,
            stock: 8,
            compatibility: ['Honda GL Pro'],
            image: 'assets/images/products/piston.jpg',
            sku: 'MS-PSTN-GLP50',
            description: 'Complete piston kit manufactured by FIM specifically for Honda GL Pro Neotech engine restorations. High precision and extreme heat resistance.',
            specifications: 'Package includes: 1x FIM Piston (OS 50), 1 set of Piston Rings, 1x Piston Pin, 2x Piston Pin Clips.',
            guide: 'It is highly recommended that installation is done by a trusted lathe/boring workshop to ensure ideal cylinder clearance.'
        },
        {
            id: 4,
            name: 'Vespa Excel Danmotor 12V Ignition Coil',
            slug: 'vespa-excel-danmotor-ignition-coil',
            category: 'electrical',
            price: 145000,
            stock: 15,
            compatibility: ['Vespa Excel'],
            image: 'assets/images/products/spul.jpg',
            sku: 'EL-SPUL-VEXC',
            description: 'Original Danmotor 12V ignition coil for Vespa PX/Excel series. Guarantees stable spark plug ignition and bright electrical lighting.',
            specifications: 'Pure copper export quality, thick iron plate mounting disk, heat-resistant wrapping cable.',
            guide: 'Install on the stator magnet plate. Position the ignition timing degree according to the Vespa service manual.'
        },
        {
            id: 5,
            name: 'RX-S Front Drum Brake Shoe',
            slug: 'rx-s-front-drum-brake-shoe',
            category: 'brakes',
            price: 55000,
            stock: 25,
            compatibility: ['Yamaha RX-King', 'Yamaha DT100'],
            image: 'assets/images/products/rem.jpg',
            sku: 'RM-KMP-RXS',
            description: 'OEM quality front drum brake shoe for Yamaha RX-S, RX-Special, and DT100. Strong grip and durable without damaging the drum housing.',
            specifications: 'Asbestos-free, anti-rust aluminum plate, includes 2x brake shoe retaining springs.',
            guide: 'Clean the inside of the drum from old brake dust using fine sandpaper before installing the new brake shoes.'
        },
        {
            id: 6,
            name: 'CB125 Classic Chrome 320mm Rear Shock Absorber',
            slug: 'cb125-classic-chrome-320mm-rear-shock-absorber',
            category: 'suspension',
            price: 430000,
            stock: 3,
            compatibility: ['Honda CB100', 'Honda GL Pro'],
            image: 'assets/images/products/sokbreker.jpg',
            sku: 'SP-SOK-CB320',
            description: 'Classic style dual rear shock absorbers with chrome finish. Equipped with threaded preload adjusters to customize suspension softness.',
            specifications: '320mm eye-to-eye length, high-quality chrome plating finish, 12mm center shaft diameter.',
            guide: 'Use appropriate shock absorber bushing rings at the top and bottom for a snug fit without wobbling.'
        },
        {
            id: 7,
            name: 'Autopal 5 Inch Retro Round Headlight',
            slug: 'autopal-5-inch-retro-round-headlight',
            category: 'body',
            price: 120000,
            stock: 9,
            compatibility: ['Honda CB100', 'Kawasaki Binter Merzy', 'Yamaha DT100'],
            image: 'assets/images/products/lampu.jpg',
            sku: 'BD-LMP-AUT5',
            description: '5-inch Autopal glass round headlight reflector with a black iron bowl. Gives the front of the motorcycle a true vintage look.',
            specifications: 'Thick anti-blur glass material, H4 bulb fitting, iron plate headlight bowl with black powder coating finish.',
            guide: 'Connect the H4 socket to the headlight electrical system. Adjust the headlight beam angle by tuning the bolts on the headlight brackets.'
        },
        {
            id: 8,
            name: 'Original Yamaha DT100 Air Filter',
            slug: 'original-yamaha-dt100-air-filter',
            category: 'engine',
            price: 75000,
            stock: 14,
            compatibility: ['Yamaha DT100'],
            image: 'assets/images/products/filter.jpg',
            sku: 'MS-FLTR-DT100',
            description: 'Original NOS (New Old Stock) air filter sponge for vintage Yamaha DT100 trail bikes. Excellent at filtering coarse dust.',
            specifications: 'Special porous polyurethane foam material, precise fit for standard Yamaha DT100 filter box.',
            guide: 'Rinse lightly with a little clean engine oil after washing so fine dust adheres perfectly to the foam pores.'
        },
        {
            id: 9,
            name: 'Cafe Racer 33mm Chrome Clip-on Handlebars',
            slug: 'cafe-racer-33mm-chrome-clip-on-handlebars',
            category: 'body',
            price: 210000,
            stock: 6,
            compatibility: ['Honda CB100', 'Yamaha RX-King'],
            image: 'assets/images/products/stang.jpg',
            sku: 'BD-STG-JP33',
            description: 'Vintage Cafe Racer racing style modification clip-on handlebars for 33mm shock shafts. Provides a sporty tucked riding position.',
            specifications: '2mm thick seamless iron pipe material, shiny chrome finish, 28cm steering pipe length.',
            guide: 'Install exactly below or above the top triple clamp according to preference. Tighten the handlebar clamp bolts evenly using an Allen wrench.'
        },
        {
            id: 10,
            name: 'Binter Merzy KH350 Throttle Cable',
            slug: 'binter-merzy-kh350-throttle-cable',
            category: 'electrical',
            price: 48000,
            stock: 18,
            compatibility: ['Kawasaki Binter Merzy'],
            image: 'assets/images/products/kabelgas.jpg',
            sku: 'EL-KBG-KH350',
            description: 'Restoration throttle cable for Kawasaki Binter Merzy platinum and CDI types. The inner steel wire is very smooth so the throttle feels light.',
            specifications: 'Anti-rust stainless steel wire sling, outer casing coated with flexible friction-resistant PVC.',
            guide: 'Lubricate the steel wire sling with light oil before installation to prevent sticking and rusting in the future.'
        }
    ],

    articles: [
        {
            id: 1,
            title: '5 Effective Ways to Maintain Vintage Motorcycle Carburetors for Stable Idling',
            slug: 'ways-to-maintain-vintage-motorcycle-carburetors',
            category: 'Maintenance Tips',
            date: 'June 10, 2026',
            author: 'Rahmat Hidayat',
            thumbnail: 'assets/images/articles/rawat-karbu.jpg',
            excerpt: 'Carburetors often clogged and hard to idle on classic motorcycles? Check out these simple maintenance tips you can do yourself at home.',
            content: `Classic motorcycles with carburetor combustion systems require extra attention to keep performance optimal and easy to start in the morning. One of the most common problems experienced by vintage motorcycle owners is unstable engine revs, also known as hard to idle.

            Here are 5 easy steps to maintain your beloved vintage motorcycle's carburetor:
            
            1. **Clean the Air Filter Regularly**
            Dust and dirt clogging the air filter will restrict oxygen supply to the carburetor, causing the fuel mixture to be too rich. Clean the filter at least once every 2 weeks.
            
            2. **Drain the Gas Tank Periodically**
            Vintage motorcycle tanks often accumulate rust or water from condensation. Rust deposits dropping into the carburetor bowl will clog the tiny pilot jet and main jet holes.
            
            3. **Use Quality Fuel & Install an Additional Fuel Filter**
            To prevent fine dirt from entering the carburetor jets, install a transparent external fuel filter between the tank hose leading to the carburetor.
            
            4. **Tune Air and Fuel Precisely**
            Turn the air screw clockwise until it stops, then turn it back about 1.5 to 2.5 turns according to engine needs. Make adjustments when the engine is at optimal operating temperature.
            
            5. **Check Gasket and Intake Manifold Condition**
            Subtle air leaks (spurious air) from cracked intake manifold joints or torn paper gaskets can make the motorcycle hard to idle. Replace the gasket if it has hardened.`
        },
        {
            id: 2,
            title: 'Honda CB100 Vintage Original Factory Style Restoration Guide',
            slug: 'honda-cb100-vintage-original-restoration',
            category: 'Modification',
            date: 'May 28, 2026',
            author: 'Andy Vintage',
            thumbnail: 'assets/images/articles/restorasi-cb.jpg',
            excerpt: 'Want to rebuild a Honda CB100 to look sleek, exactly like it just rolled out of the dealership in the 1970s? Check out this guide for hunting original parts.',
            content: `Rebuilding (restoring) a Honda CB100 to its original form brings a unique satisfaction for classic motorcycle enthusiasts. The trend of returning motorcycles to factory original condition is increasingly popular and holds a very high resale value.
            
            However, the biggest challenge in original restoration is the difficulty of finding factory-default spare parts in new condition (New Old Stock/NOS) or usable used condition (Original Second).
            
            Important steps for restoring a Honda CB100:
            
            1. **Research Your Motorcycle Series**
            The Honda CB100 has several generations such as the K0, K1, K2, and K3 series. Each has different tank details, emblems, striping color schemes, and even turn signals. Make sure you don't mix parts from different generations.
            
            2. **Prioritize the Frame and Undercarriage**
            Sandblast the motorcycle frame to remove old rust before repainting with epoxy primer and solid gloss black paint.
            
            3. **Hunt for Neat Chrome**
            A key characteristic of retro 70s motorcycles is the abundance of chrome parts. Components like front-rear fenders, shock absorbers, exhaust, and handlebars must look shiny without rust.
            
            4. **Engine Needs Refreshing, Keep the Block Standard**
            Clean the engine block using the vapor blasting method to restore its original aluminum color without damaging the surface. For the piston and camshaft parts, use precision components to keep the engine sound smooth.`
        },
        {
            id: 3,
            title: 'Knowing the Glorious History of the Yamaha RX-King, Indonesia\'s King of the Streets',
            slug: 'history-of-yamaha-rx-king-street-king',
            category: 'Motorcycle Review',
            date: 'May 15, 2026',
            author: 'Budi RX',
            thumbnail: 'assets/images/articles/sejarah-rx.jpg',
            excerpt: 'Why is this 2-stroke engine motorcycle so legendary in Indonesia and its price still crazy high today? Let\'s dive into its historical journey.',
            content: `Speaking of legendary motorcycles in the country, the name Yamaha RX-King definitely sits at the top. First hitting the asphalt in 1983 as the successor to the RX-K 135, this motorcycle successfully captured the hearts of the Indonesian public with its fierce and agile performance.
            
            The key to the RX-King's success lies in the YEIS (Yamaha Energy Induction System) technology, which makes it economical at low RPMs yet powerful at high RPMs. The nickname "King of the Streets" stuck tightly due to its dominance on various street racing circuits as well as for daily use.
            
            Although its production was officially halted by Yamaha Indonesia in 2009 due to exhaust emission regulations, the RX-King's prestige has never faded. In fact, its collector's value has skyrocketed with market prices reaching tens to hundreds of millions of rupiah for units in full factory original condition.`
        },
        {
            id: 4,
            title: 'Tips for Starting a Classic Motorcycle That\'s Been Sitting in the Garage',
            slug: 'tips-starting-classic-motorcycle-sitting',
            category: 'Maintenance Tips',
            date: 'May 02, 2026',
            author: 'Gatot Garage',
            thumbnail: 'assets/images/articles/motor-mangkrak.jpg',
            excerpt: 'Have a vintage motorcycle inherited from your grandfather that has been sleeping for over a decade? Don\'t kickstart it right away! Follow this procedure first so the engine doesn\'t break.',
            content: `Finding a dusty classic motorcycle in a garage is like finding hidden treasure. However, you must first resist the urge to immediately start the engine by kickstarting it.
            
            If started immediately without preparation, a piston locked by thin rust can fatally scratch the cylinder wall, or hard dirt in the oil pan can clog the oil pump.
            
            Follow this safe procedure for starting an abandoned motorcycle:
            1. **Drain the Old Oil**: Discard the old engine oil which has thickened and lost its lubricating power.
            2. **Add Lubricant to the Spark Plug Hole**: Remove the spark plug, then pour about 1 tablespoon of new engine oil into the cylinder hole. Let it sit for 1-2 days so the oil penetrates and lubricates the piston rings.
            3. **Turn the Engine Manually**: Put the transmission gear into 2nd position, then turn the rear wheel slowly to ensure the piston moves smoothly without resistance.
            4. **Drain the Tank and Carburetor**: Stale gasoline that has been sitting for years will turn into a sticky varnish that clogs the entire carburetor system.`
        },
        {
            id: 5,
            title: 'The Advantages of Using Scented 2-Stroke Oil in Vintage 2-Stroke Motorcycles',
            slug: 'advantages-scented-2stroke-oil-vintage',
            category: 'Motorcycle Review',
            date: 'April 20, 2026',
            author: 'Rian Kinger',
            thumbnail: 'assets/images/articles/oli-samping.jpg',
            excerpt: 'Exhaust smoke smelling like bubble gum or strawberry is popular again. What are the advantages of this scented 2-stroke oil?',
            content: `For riders of 2-stroke motorcycles like the Yamaha RX-King, Vespa, or old Kawasaki Ninja, the scent of 2-stroke oil is a core identity. Billowing exhaust smoke often creates an unpleasant odor for riders behind them.
            
            To overcome this, 2-stroke oil manufacturers created a special formula with added perfume additives smelling sweet like strawberry, bubble gum, or orange bubble gum.
            
            Advantages of using scented 2-stroke oil:
            - **More Friendly Smoke to the Nose**: Reduces complaints about the pungent smell of exhaust smoke when touring or riding in the city.
            - **High Synthetic Content**: The majority of good branded scented 2-stroke oils use semi-synthetic or fully-synthetic base oils that minimize combustion carbon residue so spark plugs don't foul easily.
            - **Prevents Cylinder Rust**: Contains good metal film coating properties to lubricate the piston walls at high RPMs.`
        }
    ],

    transactions: [
        {
            orderId: 'VV-9812401',
            date: 'June 11, 2026',
            customerName: 'Budi Wijaya',
            total: 370000,
            status: 'pending',
            paymentMethod: 'Bank Transfer BCA',
            shippingAddress: 'Jl. Rungkut Madya No. 45, East Surabaya, East Java',
            items: [
                { productId: 1, name: 'Keihin PE28 Carburetor Japan', price: 185000, qty: 2 }
            ]
        },
        {
            orderId: 'VV-9811320',
            date: 'June 10, 2026',
            customerName: 'Ahmad Subarjo',
            total: 375000,
            status: 'processing',
            paymentMethod: 'COD (Cash on Delivery)',
            shippingAddress: 'Jl. Dharmawangsa Barat Blok B-12, Gubeng, Surabaya, East Java',
            items: [
                { productId: 3, name: 'Oversize 0.50 GL Pro Piston Kit', price: 275000, qty: 1 },
                { productId: 7, name: 'Autopal 5 Inch Retro Round Headlight', price: 120000, qty: 1 }
            ]
        },
        {
            orderId: 'VV-9810842',
            date: 'June 08, 2026',
            customerName: 'Rian Hidayat',
            total: 320000,
            status: 'shipped',
            paymentMethod: 'QRIS',
            shippingAddress: 'Perumahan Keputih Permai F-4, Sukolilo, Surabaya, East Java',
            items: [
                { productId: 2, name: 'CB100 Standard Chrome Exhaust', price: 320000, qty: 1 }
            ]
        },
        {
            orderId: 'VV-9809612',
            date: 'June 05, 2026',
            customerName: 'Liem Kian Gie',
            total: 103000,
            status: 'completed',
            paymentMethod: 'Bank Transfer Mandiri',
            shippingAddress: 'Jl. Kenjeran No. 201, Tambaksari, Surabaya, East Java',
            items: [
                { productId: 5, name: 'RX-S Front Drum Brake Shoe', price: 55000, qty: 1 },
                { productId: 10, name: 'Binter Merzy KH350 Throttle Cable', price: 48000, qty: 1 }
            ]
        },
        {
            orderId: 'VV-9808421',
            date: 'June 01, 2026',
            customerName: 'Kadek Surya',
            total: 430000,
            status: 'completed',
            paymentMethod: 'Bank Transfer BNI',
            shippingAddress: 'Jl. Raya Darmo No. 78, Tegalsari, Surabaya, East Java',
            items: [
                { productId: 6, name: 'CB125 Classic Chrome 320mm Rear Shock Absorber', price: 430000, qty: 1 }
            ]
        }
    ],

    users: [
        { id: 1, name: 'Andy Vintage', email: 'andy@vintagevroom.id', role: 'admin', joined: 'Jan 01, 2026', status: 'active' },
        { id: 2, name: 'Budi Wijaya', email: 'budi.wijaya@gmail.com', role: 'user', joined: 'Mar 15, 2026', status: 'active' },
        { id: 3, name: 'Ahmad Subarjo', email: 'ahmad_subarjo@yahoo.com', role: 'user', joined: 'Apr 02, 2026', status: 'active' },
        { id: 4, name: 'Rian Hidayat', email: 'rian.hidayat@outlook.com', role: 'user', joined: 'May 10, 2026', status: 'active' },
        { id: 5, name: 'Siti Aminah', email: 'siti.aminah@gmail.com', role: 'user', joined: 'May 20, 2026', status: 'inactive' }
    ]
};

// LocalStorage helpers to simulate state persistence (using _en prefix to flush old data)
const VintageVroomStorage = {
    getProducts() {
        const local = localStorage.getItem('vv_products_en');
        if (!local) {
            localStorage.setItem('vv_products_en', JSON.stringify(VintageVroomDB.products));
            return VintageVroomDB.products;
        }
        return JSON.parse(local);
    },
    saveProducts(products) {
        localStorage.setItem('vv_products_en', JSON.stringify(products));
    },
    
    getArticles() {
        const local = localStorage.getItem('vv_articles_en');
        if (!local) {
            localStorage.setItem('vv_articles_en', JSON.stringify(VintageVroomDB.articles));
            return VintageVroomDB.articles;
        }
        return JSON.parse(local);
    },
    saveArticles(articles) {
        localStorage.setItem('vv_articles_en', JSON.stringify(articles));
    },

    getTransactions() {
        const local = localStorage.getItem('vv_transactions_en');
        if (!local) {
            localStorage.setItem('vv_transactions_en', JSON.stringify(VintageVroomDB.transactions));
            return VintageVroomDB.transactions;
        }
        return JSON.parse(local);
    },
    saveTransactions(transactions) {
        localStorage.setItem('vv_transactions_en', JSON.stringify(transactions));
    },

    getUsers() {
        const local = localStorage.getItem('vv_users_en');
        if (!local) {
            localStorage.setItem('vv_users_en', JSON.stringify(VintageVroomDB.users));
            return VintageVroomDB.users;
        }
        return JSON.parse(local);
    },
    saveUsers(users) {
        localStorage.setItem('vv_users_en', JSON.stringify(users));
    },

    // Cart Helper (Session-like using LocalStorage)
    getCart() {
        const cart = localStorage.getItem('vv_cart_en');
        return cart ? JSON.parse(cart) : [];
    },
    saveCart(cart) {
        localStorage.setItem('vv_cart_en', JSON.stringify(cart));
        // Dispatch custom event to trigger nav counter updates
        window.dispatchEvent(new Event('cartUpdated'));
    },
    addToCart(productId, qty = 1) {
        const cart = this.getCart();
        const products = this.getProducts();
        const product = products.find(p => p.id === productId);
        
        if (!product) return false;
        
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            if (existingItem.qty + qty > product.stock) {
                return { success: false, message: `Insufficient stock! Remaining stock: ${product.stock}` };
            }
            existingItem.qty += qty;
        } else {
            if (qty > product.stock) {
                return { success: false, message: `Insufficient stock! Remaining stock: ${product.stock}` };
            }
            cart.push({
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                compatibility: product.compatibility[0],
                qty: qty
            });
        }
        this.saveCart(cart);
        return { success: true, message: 'Product successfully added to cart!' };
    },
    
    // Formatting Helpers (Keeping IDR)
    formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);
    }
};
