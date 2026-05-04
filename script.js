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
      { id: 3, name: 'Beef Red Burger', description: 'Beef, Cheese, Tomatoes, Lettuce, Onion', price: 14.90, image: 'dish-beef-red-burger.jpg' },
      { id: 4, name: 'Big Chicken Burger', description: 'Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper', price: 15.90, image: 'dish-big-chicken-burger.jpg' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza (30cm)',
    icon: 'icon-pizza-cat.png',
    items: [
      { id: 5, name: 'Pizza Margherita', description: 'Tomato Sauce, Mozzarella', price: 11.90, image: 'dish-pizza-margherita.jpg' },
      { id: 6, name: 'Pizza Chorizo', description: 'Tomato slices, Mozzarella, Chorizo', price: 13.90, image: 'dish-pizza-chorizo.jpg' },
      { id: 7, name: 'Funghi', description: 'Red onion, Olives, Button Mushrooms, Mozzarella', price: 12.90, image: 'dish-pizza-funghi.jpg' },
      { id: 8, name: 'Quattro Formaggi with Chicken', description: 'Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano', price: 15.90, image: 'dish-pizza-quattro-formaggi.jpg' },
    ],
  },
  {
    id: 'salat',
    name: 'Salad',
    icon: 'icon-salad-cat.png',
    items: [
      { id: 9,  name: 'Warm Beef Arugula Salad', description: 'Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing', price: 16.90, image: 'dish-salad-beef-arugula.jpg' },
      { id: 10, name: 'Mini Green Salad', description: 'Green salad, Cucumber, Carrots, Parsley, Radishes', price: 7.90, image: 'dish-salad-mini-green.jpg' },
      { id: 11, name: 'Green Salad with Sea Food', description: 'Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill', price: 16.90, image: 'dish-salad-seafood.jpg' },
      { id: 12, name: 'Vegan Green Salad with Tofu', description: 'Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts', price: 14.90, image: 'dish-salad-vegan-tofu.jpg' },
    ],
  },
];

const DELETE_ICON_SVG = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M1 4h14M6 4V2h4v2M2 4l1 12h10L14 4" stroke="#E76C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const CART_EMPTY_SVG = `<svg class="cart-empty-icon" viewBox="13 13 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2067 37C19.546 37 18.9805 36.765 18.5101 36.295C18.0397 35.825 17.8044 35.26 17.8044 34.6C17.8044 33.94 18.0397 33.375 18.5101 32.905C18.9805 32.435 19.546 32.2 20.2067 32.2C20.8673 32.2 21.4328 32.435 21.9032 32.905C22.3737 33.375 22.6089 33.94 22.6089 34.6C22.6089 35.26 22.3737 35.825 21.9032 36.295C21.4328 36.765 20.8673 37 20.2067 37ZM32.2178 37C31.5571 37 30.9916 36.765 30.5212 36.295C30.0508 35.825 29.8155 35.26 29.8155 34.6C29.8155 33.94 30.0508 33.375 30.5212 32.905C30.9916 32.435 31.5571 32.2 32.2178 32.2C32.8784 32.2 33.4439 32.435 33.9143 32.905C34.3848 33.375 34.62 33.94 34.62 34.6C34.62 35.26 34.3848 35.825 33.9143 36.295C33.4439 36.765 32.8784 37 32.2178 37ZM19.1857 17.8L22.0684 23.8H30.4761L33.7792 17.8H19.1857ZM18.0447 15.4H35.761C36.2215 15.4 36.5718 15.605 36.812 16.015C37.0522 16.425 37.0622 16.84 36.842 17.26L32.5781 24.94C32.3579 25.34 32.0626 25.65 31.6923 25.87C31.3219 26.09 30.9166 26.2 30.4761 26.2H21.5279L20.2067 28.6H33.4189C33.7592 28.6 34.0444 28.715 34.2747 28.945C34.5049 29.175 34.62 29.46 34.62 29.8C34.62 30.14 34.5049 30.425 34.2747 30.655C34.0444 30.885 33.7592 31 33.4189 31H20.2067C19.3058 31 18.6252 30.605 18.1648 29.815C17.7043 29.025 17.6843 28.24 18.1047 27.46L19.7262 24.52L15.4022 15.4H14.2011C13.8608 15.4 13.5755 15.285 13.3453 15.055C13.1151 14.825 13 14.54 13 14.2C13 13.86 13.1151 13.575 13.3453 13.345C13.5755 13.115 13.8608 13 14.2011 13H16.1529C16.3731 13 16.5833 13.06 16.7835 13.18C16.9837 13.3 17.1338 13.47 17.2339 13.69L18.0447 15.4Z" fill="#FDEADC"/></svg>`;

/* ===== STATE ===== */
let cart = {};

/* ===== INIT ===== */
function init() {
  renderMenuSections();
  renderCategoryNav();
  renderRestaurantMeta();
  syncCarts();
  updateCartUI();
  initScrollSpy();
}

/* ===== RENDER – RESTAURANT META ===== */
function renderRestaurantMeta() {
  const el = document.getElementById('restaurant-meta');
  if (!el) return;
  el.innerHTML = buildRestaurantMeta();
}

function buildRestaurantMeta() {
  return `
    <div class="meta-chips">
      <span class="meta-chip">${RESTAURANT.deliveryTime}</span>
      <span class="meta-chip">Delivery: ${formatPrice(RESTAURANT.deliveryPrice)}</span>
      <span class="meta-chip">Min. order: ${formatPrice(RESTAURANT.minOrder)}</span>
    </div>
  `.trim();
}

/* ===== RENDER – CATEGORY NAV ===== */
function renderCategoryNav() {
  const nav = document.getElementById('category-nav');
  if (!nav) return;
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
    ? `<div class="category-heading-icon category-heading-icon--${cat.id}" aria-hidden="true" style="background-image:url('${cat.icon}')"></div>`
    : '';
  return `
    <section id="cat-${cat.id}" class="dish-section">
      <h2 class="category-heading">${iconHTML}<span class="category-heading-text">${formatCategoryHeading(cat.name)}</span></h2>
      <div class="dish-list">
        ${cat.items.map(renderDishCard).join('')}
      </div>
    </section>
  `.trim();
}

function renderDishCard(dish) {
  const imageHTML = dish.image
    ? `<div class="dish-image-wrap"><img class="dish-image" src="${dish.image}" alt="${dish.name}" loading="eager" fetchpriority="high" /></div>`
    : '';
  return `
    <div class="dish-card">
      ${imageHTML}
      <div class="dish-content">
        <div class="dish-info">
          <span class="dish-name">${dish.name}</span>
          <p class="dish-description">${dish.description}</p>
        </div>
        <div class="dish-right">
          <span class="dish-price">${formatPrice(dish.price)}</span>
          <button type="button" class="add-btn" data-id="${dish.id}" onclick="addToCart(${dish.id})" aria-label="Add ${dish.name} to basket">
            Add to basket
          </button>
        </div>
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
  return `
    <div class="cart-empty">
      <p class="cart-empty-text">Nothing here yet.<br>Go ahead and choose something delicious!</p>
      <div class="cart-empty-icon-wrap">${CART_EMPTY_SVG}</div>
    </div>
  `.trim();
}

function buildCartList(items) {
  return `<ul class="cart-list">${items.map(buildCartItem).join('')}</ul>`;
}

function buildCartItem(entry) {
  const { dish, quantity } = entry;
  return `
    <li class="cart-item">
      <div class="cart-item-top">
        <span class="cart-item-name">${quantity} x ${dish.name}</span>
        ${buildCornerDelete(dish, quantity)}
      </div>
      <div class="cart-item-bottom">
        <div class="cart-qty-controls">${buildQtyControls(dish, quantity)}</div>
        <span class="cart-item-price">${formatPrice(dish.price * quantity)}</span>
      </div>
    </li>
  `.trim();
}

function buildCornerDelete(dish, quantity) {
  if (quantity <= 1) return '';
  return `<button type="button" class="cart-item-delete cart-item-delete--corner" onclick="removeFromCart(${dish.id})" aria-label="Remove ${dish.name}">${DELETE_ICON_SVG}</button>`;
}

function buildQtyControls(dish, quantity) {
  const leftBtn = quantity <= 1
    ? `<button type="button" class="qty-btn-new qty-btn-new--as-delete" onclick="removeFromCart(${dish.id})" aria-label="Remove ${dish.name}">${DELETE_ICON_SVG}</button>`
    : `<button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, -1)" aria-label="Decrease quantity">−</button>`;
  return `${leftBtn}<span class="qty-display-new">${quantity}</span><button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, 1)" aria-label="Increase quantity">+</button>`;
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
        ${buildFooterSummary(subtotal, delivery)}
        ${buildTotalRow(total)}
        ${buildOrderButton(total, hasItems)}
      </div>
    </div>
  `.trim();
}

function buildFooterSummary(subtotal, delivery) {
  return `
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
  `.trim();
}

function buildTotalRow(total) {
  return `
    <div class="cart-total-row">
      <span class="cart-total-label">Total</span>
      <span class="cart-total-value">${formatPrice(total)}</span>
    </div>
  `.trim();
}

function buildOrderButton(total, hasItems) {
  return `<button type="button" class="order-btn" onclick="placeOrder()" ${!hasItems ? 'disabled' : ''}>Buy now (${formatPrice(total)})</button>`;
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
  document.querySelector('.cart-wrapper')?.classList.add('cart-hidden');
  showOrderConfirmation();
}

/* ===== UI HELPERS ===== */
function updateCartUI() {
  const count = getCartItemCount();
  const subtotal = getCartTotal();
  const total = subtotal + (count > 0 ? RESTAURANT.deliveryPrice : 0);
  const badge = document.getElementById('mobile-cart-count');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('nav-cart-badge--hidden', count === 0);
  }
  const basketBtn = document.querySelector('.nav-item--basket');
  if (basketBtn) basketBtn.classList.toggle('nav-item--basket-active', count > 0);
  const totalEl = document.getElementById('mobile-cart-total');
  if (totalEl) totalEl.textContent = formatPrice(total);
  syncAddButtons();
}

function syncAddButtons() {
  document.querySelectorAll('.add-btn[data-id]').forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    const qty = cart[id] ? cart[id].quantity : 0;
    if (qty > 0) {
      btn.classList.add('add-btn--added');
      btn.textContent = `Added ${qty}`;
    } else {
      btn.classList.remove('add-btn--added');
      btn.textContent = 'Add to basket';
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
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.querySelector('.cart-wrapper')?.classList.remove('cart-hidden');
  }, 300);
  _confirmationTimer = null;
}

function toggleMobileNav() {
  const nav = document.querySelector('.header-nav');
  if (nav) nav.classList.toggle('open');
}

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
  return price.toFixed(2).replace('.', ',') + ' €';
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

/* ===== SCROLL SPY ===== */
function initScrollSpy() {
  const sections = MENU_DATA
    .map(cat => document.getElementById('cat-' + cat.id))
    .filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveCategory(entry.target.id.replace('cat-', ''));
      }
    });
  }, {
    rootMargin: '-148px 0px -60% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
}

/* ===== BOOTSTRAP ===== */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleMobileNav);
  init();
});
