const apparelData = [
    { id: 1, name: "VELORA Stealth Cyber Jacket", gender: "male", price: 999, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "VELORA Elegant Pearl Midi Dress", gender: "female", price: 1599, img: "https://images.unsplash.com/photo-1705921346068-8ef11237e1c2?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "VELORA Shadow Black Casual Hoodie", gender: "male", price: 899, img: "https://images.pexels.com/photos/15127546/pexels-photo-15127546.jpeg" },
    { id: 4, name: "VELORA Azure Grace Anarkali Suit", gender: "female", price: 1199, img: "https://images.unsplash.com/photo-1702974779992-1a419b0a86aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "VELORA Titanium Matte Cargo Trousers", gender: "male", price: 599, img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "VELORA Ivory Dream Maxi Dress", gender: "female", price: 1399, img: "https://images.unsplash.com/photo-1733470324488-d0e10d014d80?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "VELORA Royal Blue Embroidered Suit", gender: "female", price: 1299, img: "https://images.unsplash.com/photo-1773439878514-65d4aeb43046?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "VELORA Classic Midnight T-Shirt", gender: "male", price: 599, img: "https://media.istockphoto.com/id/469912482/photo/man-modeling-a-black-t-shirt-ready-for-graphic-design.jpg?s=1024x1024&w=is&k=20&c=gkyktsNagTjSm6wqp9XqYEAJFBnmJulUqcbFfXy1Gjs=" },
    { id: 9, name: "VELORA Heritage Black Embroidered Kurta", gender: "female", price: 1499, img: "https://images.unsplash.com/photo-1704119143675-d3469c4070a0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "VELORA Rosewood Premium Blazer", gender: "male", price: 1799, img: "https://media.istockphoto.com/id/1514823313/photo/male-model-posing-in-orange-suit.jpg?s=1024x1024&w=is&k=20&c=Zxbc7B-RLvH0agMB45fLZ-6boOXAhA5YXlnVY18kE5I=" },
    { id: 11, name: "VELORA Midnight Blue Co-Ord Set", gender: "female", price: 1099, img: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 12, name: "VELORA Urban Motion Casual Sneakers", gender: "male", price: 799, img: "https://images.pexels.com/photos/32518998/pexels-photo-32518998.jpeg" },
    { id: 13, name: "VELORA Cloud White Casual Top", gender: "female", price: 1399, img: "https://images.pexels.com/photos/28570309/pexels-photo-28570309.jpeg" },
    { id: 14, name: "VELORA Classic White Formal Shirt", gender: "male", price: 1599, img: "https://images.pexels.com/photos/27852497/pexels-photo-27852497.jpeg" },
    { id: 15, name: "VELORA Ocean Blue Wide-Leg Pants", gender: "female", price: 1999, img: "https://images.pexels.com/photos/19995459/pexels-photo-19995459.jpeg" },
    { id: 16, name: "VELORA Ice Blue Denim Jacket Set", gender: "male", price: 1299, img: "https://images.pexels.com/photos/15420244/pexels-photo-15420244.jpeg" },
    { id: 17, name: "VELORA Pure White Casual Co-Ord Set", gender: "male", price: 1499, img: "https://images.pexels.com/photos/12606659/pexels-photo-12606659.jpeg" },
    { id: 18, name: "VELORA Moonlight White Bodycon Dress", gender: "female", price: 1799, img: "https://images.pexels.com/photos/8085389/pexels-photo-8085389.jpeg" },
    { id: 19, name: "VELORA Rose Grey Elegant Jumpsuit", gender: "female", price: 1899, img: "https://images.pexels.com/photos/32815518/pexels-photo-32815518.jpeg" },
    { id: 20, name: "VELORA Executive White Formal Shirt", gender: "male", price: 1399, img: "https://images.pexels.com/photos/37906241/pexels-photo-37906241.jpeg" }    
];

let cartItems = JSON.parse(localStorage.getItem('velora_cart')) || [];

function updateCartUI() {
    let totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalItemCount;

    const cartContainer = document.getElementById('cart-items-container');
    let total = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<p style="color: #c5c6c7; text-align: center; margin-top: 2rem;">Your bag is empty.</p>`;
    } else {
        cartContainer.innerHTML = cartItems.map((item, index) => {
            total += item.price * item.quantity;
            return `
                        <div class="cart-item">
                            <img src="${item.img}" alt="${item.name}">
                            <div class="cart-item-details">
                                <div class="cart-item-title">${item.name}</div>
                                <div class="cart-item-price">₹${item.price}</div>
                                <div class="qty-controls">
                                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                                    <span class="qty-val">${item.quantity}</span>
                                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                                </div>
                            </div>
                            <i class="fa-solid fa-trash" style="color: #ff4d4d; cursor: pointer;" onclick="removeFromCart(${index})"></i>
                        </div>
                    `;
        }).join('');
    }
    document.getElementById('cart-total-price').innerText = `₹${total}`;
}

function renderProducts(items) {
    const container = document.getElementById('products-container');
    container.innerHTML = items.map(item => `
                <div class="product-card">
                    <span class="category-badge">${item.gender}</span>
                    <div class="product-img-box">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div>
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">₹${item.price}</div>
                    </div>
                    <button class="btn" style="width:100%; justify-content:center;" onclick="addToCart(${item.id})">Add to Bag</button>
                </div>
            `).join('');

    gsap.from(".product-card", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
    });
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (cat === 'all') renderProducts(apparelData);
    else renderProducts(apparelData.filter(i => i.gender === cat));
}

function addToCart(id) {
    const product = apparelData.find(p => p.id === id);
    const existingItem = cartItems.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('velora_cart', JSON.stringify(cartItems));
    updateCartUI();
    showToast(`${product.name} added to bag!`);
}

function updateQuantity(index, change) {
    cartItems[index].quantity += change;
    if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem('velora_cart', JSON.stringify(cartItems));
    updateCartUI();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('velora_cart', JSON.stringify(cartItems));
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('open');
}

function checkout() {
    if (cartItems.length === 0) {
        showToast("Your bag is empty!");
        return;
    }
    showToast("Order Placed Successfully!");
    cartItems = [];
    localStorage.removeItem('velora_cart');
    updateCartUI();
    toggleCart();
}

function showPage(pageId) {
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');

    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    gsap.fromTo(targetPage, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
}

function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('cname').value;
    showToast(`Thank you, ${name}! Inquiry submitted.`);
    e.target.reset();
}

function showToast(msg) {
    const toastBox = document.getElementById('toast-box');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    toastBox.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

window.addEventListener('load', () => {
    renderProducts(apparelData);
    updateCartUI();

    gsap.from(".hero-text h1", { opacity: 0, x: -50, duration: 1, delay: 0.2 });
    gsap.from(".hero-text p", { opacity: 0, x: -30, duration: 0.8, delay: 0.4 });
    gsap.from("#anim-card", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5, ease: "back.out(1.7)" });
});