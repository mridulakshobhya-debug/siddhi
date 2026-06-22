const app = document.getElementById("riddhiApp");
const $ = (selector) => app.querySelector(selector);

// Hero Slideshow Configuration
const heroImages = [
    "images/Rice.jpg",
    "images/Spices.jpg",
    "images/Beverages.jpg",
    "images/Flour and grains.jpg",
    "images/cooking oil.jpg",
    "images/lentils.jpg"
];

let currentSlideIndex = 0;
let slideshowInterval = null;

function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    
    if (slides.length === 0) return;
    
    // Set background images for all slides
    slides.forEach((slide, index) => {
        if (index < heroImages.length) {
            slide.style.backgroundImage = `linear-gradient(90deg, rgba(8, 22, 19, 0.84), rgba(8, 22, 19, 0.42) 46%, rgba(246, 243, 238, 0.14)), url("${heroImages[index]}")`;
            slide.style.backgroundSize = "cover";
            slide.style.backgroundPosition = "center";
        }
    });
    
    // Set first slide as active
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    
    // Start slideshow rotation
    if (slideshowInterval) clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length === 0) return;
        
        // Remove active from current slide
        slides[currentSlideIndex].classList.remove('active');
        
        // Move to next slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // Add active to new slide
        slides[currentSlideIndex].classList.add('active');
    }, 5000);
}

const categories = [
    { id: "All", title: "All Products", subtitle: "Full catalogue", image: "images/Rice.jpg" },
    { id: "Rice & Grains", title: "Rice & Grains", subtitle: "Rice, atta, grains", image: "images/Rice.jpg" },
    { id: "Pulses & Lentils", title: "Pulses & Lentils", subtitle: "Daily staples", image: "images/Pulses.jpg" },
    { id: "Spices & Oils", title: "Spices & Oils", subtitle: "Kitchen essentials", image: "images/Spices.jpg" },
    { id: "Beverages", title: "Beverages", subtitle: "Tea, coffee, drinks", image: "images/Beverages.jpg" },
    { id: "Household", title: "Household", subtitle: "Cleaning and storage", image: "https://source.unsplash.com/900x700/?cleaning-products,household" },
    { id: "Electricals", title: "Electricals", subtitle: "Bulbs, sockets, tools", image: "https://source.unsplash.com/900x700/?electrical-supplies" },
    { id: "Electronics", title: "Electronics", subtitle: "Chargers, audio, cables", image: "https://source.unsplash.com/900x700/?electronics,devices" },
    { id: "Amazon Picks", title: "Amazon Picks", subtitle: "Popular online essentials", image: "https://source.unsplash.com/900x700/?smart-speaker,ecommerce" },
    { id: "Office Supplies", title: "Office Supplies", subtitle: "Business basics", image: "https://source.unsplash.com/900x700/?office-supplies,paper" }
];

const products = [
    {
        id: 1,
        title: "Royal Basmati Rice 5kg",
        category: "Rice & Grains",
        price: 42.5,
        originalPrice: 48.3,
        image: "images/basmathi.jpg",
        rating: 4.8,
        reviews: 534,
        badge: "Best Seller",
        variant: "5kg bag"
    },
    {
        id: 2,
        title: "Sona Masoori Rice 5kg",
        category: "Rice & Grains",
        price: 34,
        originalPrice: 37,
        image: "images/sona masoori2.jpg",
        rating: 4.6,
        reviews: 321,
        badge: "Staple",
        variant: "5kg bag"
    },
    {
        id: 3,
        title: "Organic Brown Rice 2kg",
        category: "Rice & Grains",
        price: 29.9,
        originalPrice: 33.2,
        image: "images/organic brown rice.jpg",
        rating: 4.7,
        reviews: 214,
        badge: "Organic",
        variant: "2kg bag"
    },
    {
        id: 4,
        title: "Thai Jasmine Rice 5kg",
        category: "Rice & Grains",
        price: 37.13,
        originalPrice: 39.9,
        image: "images/jasmine.jpg",
        rating: 4.5,
        reviews: 423,
        badge: "Aromatic",
        variant: "5kg bag"
    },
    {
        id: 5,
        title: "Whole Wheat Atta 10kg",
        category: "Rice & Grains",
        price: 38,
        originalPrice: 40.86,
        image: "images/whole wheat atta.jpg",
        rating: 4.6,
        reviews: 664,
        badge: "Family Pack",
        variant: "10kg bag"
    },
    {
        id: 6,
        title: "Toor Dal Premium 1kg",
        category: "Pulses & Lentils",
        price: 12.11,
        originalPrice: 13.75,
        image: "images/Pulses.jpg",
        rating: 4.4,
        reviews: 156,
        badge: "Premium",
        variant: "1kg pouch"
    },
    {
        id: 7,
        title: "Mixed Lentils Combo 1kg",
        category: "Pulses & Lentils",
        price: 14.8,
        originalPrice: 16.5,
        image: "images/lentils.jpg",
        rating: 4.5,
        reviews: 188,
        badge: "Combo",
        variant: "1kg pack"
    },
    {
        id: 8,
        title: "South Indian Spice Combo Pack",
        category: "Spices & Oils",
        price: 27.24,
        originalPrice: 30,
        image: "images/Spices.jpg",
        rating: 4.7,
        reviews: 156,
        badge: "Chef Pick",
        variant: "6-piece set"
    },
    {
        id: 9,
        title: "Sunflower Cooking Oil 5L",
        category: "Spices & Oils",
        price: 26.84,
        originalPrice: 31,
        image: "images/cooking oil.jpg",
        rating: 4.3,
        reviews: 289,
        badge: "Value",
        variant: "5L bottle"
    },
    {
        id: 10,
        title: "Premium Tea and Coffee Hamper",
        category: "Beverages",
        price: 31.5,
        originalPrice: 36,
        image: "images/Beverages.jpg",
        rating: 4.6,
        reviews: 97,
        badge: "Giftable",
        variant: "Assorted"
    },
    {
        id: 11,
        title: "Dishwash Liquid 5L Commercial Pack",
        category: "Household",
        price: 18.75,
        originalPrice: 22,
        image: "https://source.unsplash.com/900x700/?dishwashing-liquid,cleaning",
        rating: 4.4,
        reviews: 142,
        badge: "Bulk",
        variant: "5L can"
    },
    {
        id: 12,
        title: "Laundry Detergent Powder 5kg",
        category: "Household",
        price: 24.9,
        originalPrice: 29,
        image: "https://source.unsplash.com/900x700/?laundry-detergent",
        rating: 4.5,
        reviews: 238,
        badge: "Bulk",
        variant: "5kg bag"
    },
    {
        id: 13,
        title: "Tissue Roll Bulk Pack",
        category: "Household",
        price: 19.5,
        originalPrice: 23,
        image: "https://source.unsplash.com/900x700/?tissue-roll,paper",
        rating: 4.4,
        reviews: 176,
        badge: "Essentials",
        variant: "12 rolls"
    },
    {
        id: 14,
        title: "Microfiber Mop and Bucket Set",
        category: "Household",
        price: 49,
        originalPrice: 59,
        image: "https://source.unsplash.com/900x700/?mop,bucket,cleaning",
        rating: 4.6,
        reviews: 121,
        badge: "New",
        variant: "Spin mop"
    },
    {
        id: 15,
        title: "Airtight Storage Container Set",
        category: "Household",
        price: 36,
        originalPrice: 44,
        image: "https://source.unsplash.com/900x700/?storage-containers,kitchen",
        rating: 4.7,
        reviews: 93,
        badge: "Organize",
        variant: "10 pieces"
    },
    {
        id: 16,
        title: "LED Bulb Pack 9W Warm White",
        category: "Electricals",
        price: 21,
        originalPrice: 27,
        image: "https://source.unsplash.com/900x700/?led-bulb",
        rating: 4.6,
        reviews: 310,
        badge: "Energy Save",
        variant: "4 pack"
    },
    {
        id: 17,
        title: "6-Way Extension Socket with Switch",
        category: "Electricals",
        price: 44,
        originalPrice: 52,
        image: "https://source.unsplash.com/900x700/?extension-socket,power-strip",
        rating: 4.5,
        reviews: 201,
        badge: "Safety",
        variant: "3 meter"
    },
    {
        id: 18,
        title: "Rechargeable LED Torch Light",
        category: "Electricals",
        price: 32.5,
        originalPrice: 39,
        image: "https://source.unsplash.com/900x700/?led-flashlight,torch",
        rating: 4.4,
        reviews: 118,
        badge: "Portable",
        variant: "USB charge"
    },
    {
        id: 19,
        title: "Electric Kettle 1.7L Stainless Steel",
        category: "Electricals",
        price: 58,
        originalPrice: 68,
        image: "https://source.unsplash.com/900x700/?electric-kettle",
        rating: 4.7,
        reviews: 283,
        badge: "Fast Boil",
        variant: "1.7L"
    },
    {
        id: 20,
        title: "Steam Iron 1600W Non-Stick Plate",
        category: "Electricals",
        price: 64,
        originalPrice: 76,
        image: "https://source.unsplash.com/900x700/?steam-iron",
        rating: 4.4,
        reviews: 159,
        badge: "Home Care",
        variant: "1600W"
    },
    {
        id: 21,
        title: "Table Fan 16 Inch Quiet Motor",
        category: "Electricals",
        price: 89,
        originalPrice: 105,
        image: "https://source.unsplash.com/900x700/?table-fan,electric-fan",
        rating: 4.6,
        reviews: 144,
        badge: "Cooling",
        variant: "16 inch"
    },
    {
        id: 22,
        title: "Mixer Grinder 750W Kitchen Set",
        category: "Electricals",
        price: 139,
        originalPrice: 165,
        image: "https://source.unsplash.com/900x700/?mixer-grinder,blender",
        rating: 4.5,
        reviews: 203,
        badge: "Kitchen",
        variant: "3 jars"
    },
    {
        id: 23,
        title: "Induction Cooktop 2000W",
        category: "Electricals",
        price: 149,
        originalPrice: 179,
        image: "https://source.unsplash.com/900x700/?induction-cooktop",
        rating: 4.4,
        reviews: 132,
        badge: "Modern",
        variant: "2000W"
    },
    {
        id: 24,
        title: "Amazon Fire TV Stick 4K Style Streamer",
        category: "Amazon Picks",
        price: 169,
        originalPrice: 199,
        image: "https://source.unsplash.com/900x700/?streaming-device,remote",
        rating: 4.8,
        reviews: 424,
        badge: "Amazon Pick",
        variant: "4K ready"
    },
    {
        id: 25,
        title: "Echo Dot Style Smart Speaker",
        category: "Amazon Picks",
        price: 149,
        originalPrice: 179,
        image: "https://source.unsplash.com/900x700/?smart-speaker",
        rating: 4.7,
        reviews: 386,
        badge: "Smart Home",
        variant: "Compact"
    },
    {
        id: 26,
        title: "AmazonBasics AA Battery Pack",
        category: "Amazon Picks",
        price: 34,
        originalPrice: 42,
        image: "https://source.unsplash.com/900x700/?aa-batteries",
        rating: 4.6,
        reviews: 278,
        badge: "Amazon Pick",
        variant: "24 pack"
    },
    {
        id: 27,
        title: "Wireless Keyboard and Mouse Combo",
        category: "Electronics",
        price: 79,
        originalPrice: 96,
        image: "https://source.unsplash.com/900x700/?wireless-keyboard,mouse",
        rating: 4.5,
        reviews: 207,
        badge: "Office",
        variant: "2.4GHz"
    },
    {
        id: 28,
        title: "Bluetooth Speaker Portable Bass",
        category: "Electronics",
        price: 88,
        originalPrice: 110,
        image: "https://source.unsplash.com/900x700/?bluetooth-speaker",
        rating: 4.6,
        reviews: 235,
        badge: "Audio",
        variant: "Portable"
    },
    {
        id: 29,
        title: "USB-C Fast Charger 30W",
        category: "Electronics",
        price: 39,
        originalPrice: 49,
        image: "https://source.unsplash.com/900x700/?usb-c-charger",
        rating: 4.5,
        reviews: 162,
        badge: "Fast Charge",
        variant: "30W"
    },
    {
        id: 30,
        title: "Power Bank 10000mAh Slim",
        category: "Electronics",
        price: 69,
        originalPrice: 86,
        image: "https://source.unsplash.com/900x700/?power-bank",
        rating: 4.7,
        reviews: 297,
        badge: "Travel",
        variant: "10000mAh"
    },
    {
        id: 31,
        title: "HDMI Cable 2m Premium Braided",
        category: "Electronics",
        price: 22,
        originalPrice: 29,
        image: "https://source.unsplash.com/900x700/?hdmi-cable",
        rating: 4.4,
        reviews: 111,
        badge: "Cable",
        variant: "2 meter"
    },
    {
        id: 32,
        title: "A4 Copier Paper Box 80gsm",
        category: "Office Supplies",
        price: 92,
        originalPrice: 110,
        image: "https://source.unsplash.com/900x700/?printer-paper,office",
        rating: 4.6,
        reviews: 149,
        badge: "Office",
        variant: "5 reams"
    }
];

const state = {
    category: "All",
    search: "",
    sort: "featured"
};

const contact = {
    company: "Riddhi General Trading FZ-LLC",
    phone: "+971 52 436 1223",
    email: "riddhigeneraltradingfz@gmail.com",
    address: "FOB50736, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates"
};

class Cart {
    constructor() {
        this.key = "riddhi-cart-v1";
        this.items = this.load();
    }

    load() {
        try {
            const stored = JSON.parse(localStorage.getItem(this.key));
            return Array.isArray(stored) ? stored : [];
        } catch {
            return [];
        }
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }

    add(productId) {
        const product = products.find((item) => item.id === Number(productId));
        if (!product) return;

        const existing = this.items.find((item) => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                title: product.title,
                category: product.category,
                price: product.price,
                image: product.image,
                variant: product.variant,
                quantity: 1
            });
        }

        this.save();
        this.updateUI();
        openCartDrawer();
        showToast(`${product.title} added to cart`);
    }

    remove(productId) {
        this.items = this.items.filter((item) => item.id !== Number(productId));
        this.save();
        this.updateUI();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find((cartItem) => cartItem.id === Number(productId));
        if (!item) return;

        item.quantity = Math.max(0, Number(quantity));
        if (item.quantity === 0) {
            this.remove(productId);
            return;
        }

        this.save();
        this.updateUI();
    }

    clear() {
        this.items = [];
        this.save();
        this.updateUI();
    }

    getCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    updateUI() {
        $("#cartCount").textContent = this.getCount();
        $("#cartTotal").textContent = formatAED(this.getTotal());
        renderCartItems();
    }
}

const cart = new Cart();

function init() {
    initHeroSlideshow();
    renderCategories();
    renderProducts();
    wireHeader();
    wireSearch();
    wireCatalogue();
    wireCart();
    wireCheckout();
    wireTheme();
    revealOnScroll();
    cart.updateUI();
}

function renderCategories() {
    const grid = $("#categoryGrid");
    grid.innerHTML = categories.map((category) => `
        <button class="category-card ${state.category === category.id ? "active" : ""}" type="button" data-category="${escapeAttr(category.id)}">
            <img src="${escapeAttr(category.image)}" alt="${escapeAttr(category.title)}" loading="lazy" data-fallback="${escapeAttr(fallbackImage(category.title, category.id))}">
            <span>${escapeHTML(category.title)}<small>${escapeHTML(category.subtitle)}</small></span>
        </button>
    `).join("");
    wireImageFallbacks(grid);
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();
    const grid = $("#productsGrid");
    const empty = $("#emptyResults");

    $("#activeCategoryLabel").textContent = state.category === "All" ? "All categories" : state.category;
    $("#resultCount").textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "product" : "products"}`;
    empty.hidden = filteredProducts.length > 0;

    grid.innerHTML = filteredProducts.map((product, index) => `
        <article class="product-card" style="animation-delay:${Math.min(index * 35, 420)}ms">
            <div class="product-media">
                <span class="product-badge">${escapeHTML(product.badge)}</span>
                <img class="product-image" src="${escapeAttr(product.image)}" alt="${escapeAttr(product.title)}" loading="lazy" data-fallback="${escapeAttr(fallbackImage(product.title, product.category))}">
            </div>
            <div class="product-info">
                <div class="product-category">${escapeHTML(product.category)}</div>
                <h3 class="product-title">${escapeHTML(product.title)}</h3>
                <div class="product-meta">
                    <span>${escapeHTML(product.variant)}</span>
                    <span>${product.rating.toFixed(1)} / 5 (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="price">${formatAED(product.price)}</span>
                    <span class="original-price">${formatAED(product.originalPrice)}</span>
                    <span class="discount">${getDiscount(product)}% off</span>
                </div>
                <button class="add-to-cart-btn" type="button" data-add-product="${product.id}">Add to Cart</button>
            </div>
        </article>
    `).join("");
    wireImageFallbacks(grid);
}

function getFilteredProducts() {
    const search = state.search.trim().toLowerCase();
    let result = products.filter((product) => {
        const categoryMatch = state.category === "All" || product.category === state.category;
        const searchMatch = !search || [
            product.title,
            product.category,
            product.badge,
            product.variant
        ].join(" ").toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });

    result = [...result].sort((a, b) => {
        if (state.sort === "price-asc") return a.price - b.price;
        if (state.sort === "price-desc") return b.price - a.price;
        if (state.sort === "rating-desc") return b.rating - a.rating;
        return a.id - b.id;
    });

    return result;
}

function renderCartItems() {
    const container = $("#cartItems");

    if (cart.items.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty. Add products to create an order draft.</p>';
        return;
    }

    container.innerHTML = cart.items.map((item) => `
        <article class="cart-item">
            <img class="cart-item-image" src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}" data-fallback="${escapeAttr(fallbackImage(item.title, item.category))}">
            <div>
                <div class="cart-item-title">${escapeHTML(item.title)}</div>
                <div class="cart-item-price">${formatAED(item.price)} | ${escapeHTML(item.variant)}</div>
                <div class="cart-item-controls">
                    <button type="button" data-cart-action="decrease" data-product-id="${item.id}" aria-label="Decrease quantity">-</button>
                    <strong>${item.quantity}</strong>
                    <button type="button" data-cart-action="increase" data-product-id="${item.id}" aria-label="Increase quantity">+</button>
                    <button class="cart-item-remove" type="button" data-cart-action="remove" data-product-id="${item.id}">Remove</button>
                </div>
            </div>
        </article>
    `).join("");
    wireImageFallbacks(container);
}

function renderCheckoutItems() {
    const deliveryFee = 5;
    const subtotal = cart.getTotal();
    const total = subtotal + deliveryFee;

    $("#checkoutItems").innerHTML = cart.items.map((item) => `
        <div class="checkout-item">
            <div>
                <div class="checkout-item-title">${escapeHTML(item.title)}</div>
                <div class="checkout-item-qty">Qty ${item.quantity} x ${formatAED(item.price)}</div>
            </div>
            <strong>${formatAED(item.price * item.quantity)}</strong>
        </div>
    `).join("");

    $("#checkoutSubtotal").textContent = formatAED(subtotal);
    $("#checkoutTotal").textContent = formatAED(total);
}

function wireHeader() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    app.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = app.querySelector(link.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function wireSearch() {
    const heroSearch = $("#heroSearch");
    const catalogSearch = $("#catalogSearch");
    const syncSearch = (value) => {
        state.search = value;
        heroSearch.value = value;
        catalogSearch.value = value;
        renderProducts();
    };

    heroSearch.addEventListener("input", (event) => syncSearch(event.target.value));
    catalogSearch.addEventListener("input", (event) => syncSearch(event.target.value));
    $("#heroSearchButton").addEventListener("click", () => {
        syncSearch(heroSearch.value);
        $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function wireCatalogue() {
    $("#categoryGrid").addEventListener("click", (event) => {
        const card = event.target.closest("[data-category]");
        if (!card) return;
        state.category = card.dataset.category;
        renderCategories();
        renderProducts();
        $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#productsGrid").addEventListener("click", (event) => {
        const button = event.target.closest("[data-add-product]");
        if (!button) return;
        cart.add(button.dataset.addProduct);
    });

    $("#sortSelect").addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderProducts();
    });
}

function wireCart() {
    $("#cartBtn").addEventListener("click", openCartDrawer);
    $("#closeCart").addEventListener("click", closeCartDrawer);
    $("#cartOverlay").addEventListener("click", closeCartDrawer);

    $("#cartItems").addEventListener("click", (event) => {
        const button = event.target.closest("[data-cart-action]");
        if (!button) return;

        const productId = button.dataset.productId;
        const item = cart.items.find((cartItem) => cartItem.id === Number(productId));
        if (!item) return;

        if (button.dataset.cartAction === "increase") {
            cart.updateQuantity(productId, item.quantity + 1);
        }

        if (button.dataset.cartAction === "decrease") {
            cart.updateQuantity(productId, item.quantity - 1);
        }

        if (button.dataset.cartAction === "remove") {
            cart.remove(productId);
        }
    });
}

function wireCheckout() {
    $("#checkoutBtn").addEventListener("click", openCheckout);
    $("#closeCheckout").addEventListener("click", closeCheckout);
    $("#backToCart").addEventListener("click", () => {
        closeCheckout();
        openCartDrawer();
    });
    $("#placeOrderBtn").addEventListener("click", placeOrder);
    $("#closeConfirmation").addEventListener("click", closeConfirmation);
}

function wireTheme() {
    const storedTheme = localStorage.getItem("riddhi-theme");
    if (storedTheme === "dark") {
        document.body.classList.add("riddhi-dark");
    }

    $("#themeToggle").addEventListener("click", () => {
        document.body.classList.toggle("riddhi-dark");
        localStorage.setItem("riddhi-theme", document.body.classList.contains("riddhi-dark") ? "dark" : "light");
    });
}

function openCartDrawer() {
    $("#cartDrawer").classList.add("open");
    $("#cartDrawer").setAttribute("aria-hidden", "false");
    $("#cartOverlay").classList.add("open");
}

function closeCartDrawer() {
    $("#cartDrawer").classList.remove("open");
    $("#cartDrawer").setAttribute("aria-hidden", "true");
    $("#cartOverlay").classList.remove("open");
}

function openCheckout() {
    if (cart.items.length === 0) {
        showToast("Your cart is empty");
        return;
    }

    closeCartDrawer();
    renderCheckoutItems();
    $("#checkoutScreen").classList.add("open");
    $("#checkoutScreen").setAttribute("aria-hidden", "false");
}

function closeCheckout() {
    $("#checkoutScreen").classList.remove("open");
    $("#checkoutScreen").setAttribute("aria-hidden", "true");
}

function placeOrder() {
    const form = $("#checkoutForm");
    if (!form.reportValidity()) return;

    const details = {
        orderId: `RID-${Math.floor(100000 + Math.random() * 900000)}`,
        name: $("#fullName").value.trim(),
        email: $("#email").value.trim(),
        phone: $("#phone").value.trim(),
        address: $("#address").value.trim(),
        payment: app.querySelector('input[name="payment"]:checked').value,
        total: formatAED(cart.getTotal() + 5)
    };

    closeCheckout();
    showConfirmation(details);
    cart.clear();
    form.reset();
}

function showConfirmation(details) {
    $("#confirmationDetails").innerHTML = [
        ["Order ID", details.orderId],
        ["Name", details.name],
        ["Phone", details.phone],
        ["Email", details.email],
        ["Payment", details.payment],
        ["Total", details.total],
        ["Supplier", contact.company]
    ].map(([label, value]) => `
        <div class="confirmation-detail-item">
            <span class="confirmation-detail-label">${escapeHTML(label)}</span>
            <span class="confirmation-detail-value">${escapeHTML(value)}</span>
        </div>
    `).join("");

    $("#confirmationScreen").classList.add("open");
    $("#confirmationScreen").setAttribute("aria-hidden", "false");
}

function closeConfirmation() {
    $("#confirmationScreen").classList.remove("open");
    $("#confirmationScreen").setAttribute("aria-hidden", "true");
}

function revealOnScroll() {
    const revealItems = app.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));
}

function wireImageFallbacks(root) {
    root.querySelectorAll("img[data-fallback]").forEach((image) => {
        image.addEventListener("error", () => {
            image.src = image.dataset.fallback;
        }, { once: true });
    });
}

function fallbackImage(title, category) {
    const palette = getPalette(category);
    const lines = splitTitle(title);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <defs>
                <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="${palette[0]}"/>
                    <stop offset="100%" stop-color="${palette[1]}"/>
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="22" stdDeviation="22" flood-color="#081411" flood-opacity="0.20"/>
                </filter>
            </defs>
            <rect width="900" height="700" fill="url(#bg)"/>
            <rect x="122" y="105" width="656" height="490" rx="34" fill="rgba(255,255,255,0.58)" filter="url(#shadow)"/>
            <circle cx="450" cy="272" r="92" fill="${palette[2]}" opacity="0.92"/>
            <rect x="312" y="378" width="276" height="38" rx="19" fill="${palette[2]}" opacity="0.32"/>
            <text x="450" y="474" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="800" fill="#17332d">${escapeSVG(lines[0])}</text>
            <text x="450" y="526" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#51615d">${escapeSVG(lines[1] || category)}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getPalette(category) {
    if (category.includes("Electrical")) return ["#d8ecff", "#fffdf8", "#0b7a63"];
    if (category.includes("Electronics") || category.includes("Amazon")) return ["#e7e1ff", "#d8ecff", "#035c4b"];
    if (category.includes("Household")) return ["#dff6ea", "#fffdf8", "#f2aa22"];
    if (category.includes("Office")) return ["#f3f0e8", "#d8ecff", "#0b7a63"];
    return ["#fff3cf", "#dff6ea", "#f2aa22"];
}

function splitTitle(title) {
    const words = title.split(" ");
    const midpoint = Math.ceil(words.length / 2);
    return [
        words.slice(0, midpoint).join(" "),
        words.slice(midpoint).join(" ")
    ];
}

function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function formatAED(value) {
    return `AED ${Number(value).toFixed(2)}`;
}

function getDiscount(product) {
    return Math.max(0, Math.round((1 - product.price / product.originalPrice) * 100));
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
    return escapeHTML(value);
}

function escapeSVG(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", init);
