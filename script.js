/* ===== RESTAURANT DATA ===== */
const RESTAURANT = {
  name: 'BurgerHouse',
  rating: 4.1,
  reviewCount: 317,
  deliveryTime: '25–40 Min.',
  deliveryPrice: 2.49,
  minOrder: 12.0,
};

const MENU_DATA = [
  {
    id: 'burger',
    name: 'Burger & Sandwiches',
    icon: 'icon-burger-cat.png',
    items: [
      { id: 1, name: 'Veggie Mushroom Black Burger', description: 'Mixed green salad, Tomatoes, Edamame, Mushrooms', price: 16.90, image: 'dish-veggie-mushroom-burger.jpg' },
      { id: 2, name: 'All Meat Burger', description: 'Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ sauce', price: 15.90, image: 'dish-all-meat-burger.jpg' },
      { id: 3, name: 'Beef Red Burger', description: 'Beef, Cheese, Tomatoes, Lettuce, Onion', price: 14.90, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 4, name: 'Big Chicken Burger', description: 'Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper', price: 15.90, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza (30cm)',
    items: [
      { id: 5, name: 'Pizza Margherita', description: 'Tomato Sauce, Mozzarella', price: 11.90, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
      { id: 6, name: 'Pizza Chorizo', description: 'Tomato slices, Mozzarella, Chorizo', price: 13.90, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80' },
      { id: 7, name: 'Funghi', description: 'Red onion, Olives, Button Mushrooms, Mozzarella', price: 12.90, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80' },
      { id: 8, name: 'Quattro Formaggi with Chicken', description: 'Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano', price: 15.90, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: 'salat',
    name: 'Salad',
    items: [
      { id: 9,  name: 'Warm Beef Arugula Salad', description: 'Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing', price: 16.90, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80' },
      { id: 10, name: 'Mini Green Salad', description: 'Green salad, Cucumber, Carrots, Parsley, Radishes', price: 7.90, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
      { id: 11, name: 'Green Salad with Sea Food', description: 'Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill', price: 16.90, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80' },
      { id: 12, name: 'Vegan Green Salad with Tofu', description: 'Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts', price: 14.90, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

/* ===== STATE ===== */
let cart = {};

/* ===== INIT ===== */
function init() {
  renderCategoryNav();
  renderMenuSections();
  syncCarts();
  updateCartUI();
}

/* ===== RENDER – CATEGORY NAV ===== */
function renderCategoryNav() {
  const nav = document.getElementById('category-nav');
  nav.innerHTML = MENU_DATA.map((cat, i) => categoryNavItem(cat, i === 0)).join('');
}

function categoryNavItem(cat, isActive) {
  const activeClass = isActive ? ' active' : '';
  return `<a href="#cat-${cat.id}" class="category-link${activeClass}" id="nav-${cat.id}" onclick="handleCategoryClick(event, '${cat.id}')">${cat.name}</a>`;
}

/* ===== RENDER – MENU SECTIONS ===== */
function renderMenuSections() {
  const container = document.getElementById('menu-container');
  container.innerHTML = MENU_DATA.map(renderCategorySection).join('');
}

function formatCategoryHeading(name) {
  return name.replace(/(\s*)(\([^)]+\))$/, '<span class="category-heading-sub">$1$2</span>');
}

function renderCategorySection(cat) {
  const iconHTML = cat.icon
    ? `<img src="${cat.icon}" alt="" class="category-heading-icon" aria-hidden="true" />`
    : '';
  return `
    <section id="cat-${cat.id}" class="dish-section">
      <h2 class="category-heading">${iconHTML}${formatCategoryHeading(cat.name)}</h2>
      <div class="dish-list">
        ${cat.items.map(renderDishCard).join('')}
      </div>
    </section>
  `.trim();
}

function renderDishCard(dish) {
  const imageHTML = dish.image
    ? `<img class="dish-image" src="${dish.image}" alt="${dish.name}" loading="lazy" />`
    : '';
  return `
    <div class="dish-card">
      ${imageHTML}
      <div class="dish-content">
        <div class="dish-info">
          <div class="dish-top-row">
            <span class="dish-name">${dish.name}</span>
            <span class="dish-price">${formatPrice(dish.price)}</span>
          </div>
          <p class="dish-description">${dish.description}</p>
        </div>
        <button type="button" class="add-btn" data-id="${dish.id}" onclick="addToCart(${dish.id})" aria-label="${dish.name} hinzufügen">Add to basket</button>
      </div>
    </div>
  `.trim();
}

/* ===== RENDER – CART ===== */
function syncCarts() {
  const html = buildCartHTML();
  document.getElementById('cart-desktop').innerHTML = html;
  document.getElementById('cart-mobile-inner').innerHTML = html;
}

function buildCartHTML() {
  const items = Object.values(cart);
  const listHTML = items.length === 0 ? buildEmptyCart() : buildCartList(items);
  return `
    <div class="cart-header">
      <h2 class="cart-title">Your Basket</h2>
    </div>
    <div class="cart-items-scroll">${listHTML}</div>
    ${buildCartFooter()}
  `.trim();
}

function buildEmptyCart() {
  return `<p class="cart-empty">Your basket is empty.<br>Add some dishes!</p>`;
}

function buildCartList(items) {
  return `<ul class="cart-list">${items.map(buildCartItem).join('')}</ul>`;
}

function buildCartItem(entry) {
  const { dish, quantity } = entry;
  const leftControl = quantity === 1
    ? `<button type="button" class="cart-item-delete" onclick="removeFromCart(${dish.id})" aria-label="${dish.name} löschen">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M1 4h14M6 4V2h4v2M2 4l1 12h10L14 4" stroke="#363534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
       </button>`
    : `<button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, -1)" aria-label="Weniger">−</button>`;
  return `
    <li class="cart-item">
      <div class="cart-item-top">
        <span class="cart-item-name">${quantity} x ${dish.name}</span>
        <button type="button" class="cart-item-close" onclick="removeFromCart(${dish.id})" aria-label="${dish.name} entfernen">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="#726D6D" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="cart-item-bottom">
        ${leftControl}
        <div class="cart-qty-controls">
          <span class="qty-display-new">${quantity}</span>
          <button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, 1)" aria-label="Mehr">+</button>
        </div>
        <span class="cart-item-price">${formatPrice(dish.price * quantity)}</span>
      </div>
    </li>
  `.trim();
}

function buildCartSubtotal(subtotal, hasItems) {
  if (!hasItems) return '';
  return `
    <div class="cart-row"><span>Zwischensumme</span><span>${formatPrice(subtotal)}</span></div>
    <div class="cart-row"><span>Lieferkosten</span><span>${formatPrice(RESTAURANT.deliveryPrice)}</span></div>
  `.trim();
}

function buildOrderButton(hasItems) {
  return `<button type="button" class="order-btn" onclick="placeOrder()" ${!hasItems ? 'disabled' : ''}>Jetzt bestellen</button>`;
}

function buildCartFooter() {
  const subtotal = getCartTotal();
  const hasItems = Object.keys(cart).length > 0;
  const delivery = hasItems ? RESTAURANT.deliveryPrice : 0;
  const total = subtotal + delivery;
  return `
    <div class="cart-footer">
      <div class="cart-footer-divider"></div>
      <div class="cart-footer-rows">
        <div class="cart-footer-summary">
          <div class="cart-footer-labels">
            <span class="cart-footer-label">Subtotal</span>
            <span class="cart-footer-label">Delivery fee</span>
          </div>
          <div class="cart-footer-values">
            <span class="cart-footer-value">${formatPrice(subtotal)}</span>
            <span class="cart-footer-value">${formatPrice(delivery)}</span>
          </div>
        </div>
        <div class="cart-total-row">
          <span class="cart-total-label">Total</span>
          <span class="cart-total-value">${formatPrice(total)}</span>
        </div>
        <button type="button" class="order-btn" onclick="placeOrder()" ${!hasItems ? 'disabled' : ''}>
          Buy now (${formatPrice(total)})
        </button>
      </div>
    </div>
  `.trim();
}

/* ===== CART LOGIC ===== */
function addToCart(dishId) {
  const dish = findDish(dishId);
  if (!dish) return;
  if (cart[dishId]) {
    cart[dishId].quantity += 1;
  } else {
    cart[dishId] = { dish, quantity: 1 };
  }
  syncCarts();
  updateCartUI();
}

function updateQuantity(dishId, delta) {
  if (!cart[dishId]) return;
  cart[dishId].quantity += delta;
  if (cart[dishId].quantity <= 0) {
    removeFromCart(dishId);
    return;
  }
  syncCarts();
  updateCartUI();
}

function removeFromCart(dishId) {
  delete cart[dishId];
  syncCarts();
  updateCartUI();
}

function getCartTotal() {
  return Object.values(cart).reduce((sum, { dish, quantity }) => sum + dish.price * quantity, 0);
}

function getCartItemCount() {
  return Object.values(cart).reduce((sum, { quantity }) => sum + quantity, 0);
}

function placeOrder() {
  if (Object.keys(cart).length === 0) return;
  cart = {};
  syncCarts();
  updateCartUI();
  closeMobileCart();
  showOrderConfirmation();
}

/* ===== UI HELPERS ===== */
function updateCartUI() {
  const count = getCartItemCount();
  const subtotal = getCartTotal();
  const total = subtotal + (count > 0 ? RESTAURANT.deliveryPrice : 0);
  document.getElementById('mobile-cart-count').textContent = count;
  document.getElementById('mobile-cart-total').textContent = formatPrice(total);
  const btn = document.getElementById('mobile-cart-btn');
  btn.style.display = count > 0 ? 'flex' : 'none';
  const badge = document.getElementById('header-cart-badge');
  if (badge) badge.textContent = count;
  syncAddButtons();
}

function syncAddButtons() {
  document.querySelectorAll('.add-btn[data-id]').forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    const qty = cart[id] ? cart[id].quantity : 0;
    if (qty > 0) {
      btn.textContent = `Added ${qty}`;
      btn.classList.add('add-btn--added');
    } else {
      btn.textContent = 'Add to basket';
      btn.classList.remove('add-btn--added');
    }
  });
}

let _confirmationTimer = null;

function showOrderConfirmation() {
  const overlay = document.getElementById('order-confirmation');
  overlay.classList.remove('hidden', 'dismissing');
  if (_confirmationTimer) clearTimeout(_confirmationTimer);
  _confirmationTimer = setTimeout(closeOrderConfirmation, 2700);
}

function closeOrderConfirmation() {
  const overlay = document.getElementById('order-confirmation');
  overlay.classList.add('dismissing');
  setTimeout(() => overlay.classList.add('hidden'), 300);
  _confirmationTimer = null;
}

function toggleMobileNav() {
  const nav = document.querySelector('.header-nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleMobileNav);
});

function openMobileCart() {
  document.getElementById('mobile-cart-dialog').showModal();
}

function closeMobileCart() {
  const dialog = document.getElementById('mobile-cart-dialog');
  if (dialog.open) dialog.close();
}

function findDish(dishId) {
  for (const cat of MENU_DATA) {
    const dish = cat.items.find(d => d.id === dishId);
    if (dish) return dish;
  }
  return null;
}

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + '\u00a0€';
}

function handleCategoryClick(event, catId) {
  event.preventDefault();
  scrollToCategory(catId);
  setActiveCategory(catId);
}

function scrollToCategory(catId) {
  const el = document.getElementById('cat-' + catId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setActiveCategory(catId) {
  document.querySelectorAll('.category-link').forEach(link => {
    link.classList.toggle('active', link.id === 'nav-' + catId);
  });
}

/* ===== BOOTSTRAP ===== */
document.addEventListener('DOMContentLoaded', init);
