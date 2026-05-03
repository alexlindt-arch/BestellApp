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

/* ===== STATE ===== */
let cart = {};

/* ===== INIT ===== */
function init() {
  renderMenuSections();
  syncCarts();
  updateCartUI();
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
      <h2 class="category-heading">${iconHTML}${formatCategoryHeading(cat.name)}</h2>
      <div class="dish-list">
        ${cat.items.map(renderDishCard).join('')}
      </div>
    </section>
  `.trim();
}

function renderDishCard(dish) {
  const imageHTML = dish.image
    ? `<img class="dish-image" src="${dish.image}" alt="${dish.name}" loading="eager" fetchpriority="high" />`
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
          <button type="button" class="add-btn" data-id="${dish.id}" onclick="addToCart(${dish.id})" aria-label="${dish.name} hinzufügen">
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
      <div class="cart-empty-icon-wrap">
        <svg class="cart-empty-icon" viewBox="0 0 64 64" fill="#FDEADC" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h6.5l8.7 31.2a4 4 0 003.8 2.8H48a4 4 0 003.8-2.8L56 16H16"/>
          <circle cx="24" cy="52" r="4"/>
          <circle cx="46" cy="52" r="4"/>
        </svg>
      </div>
    </div>
  `;
}

function buildCartList(items) {
  return `<ul class="cart-list">${items.map(buildCartItem).join('')}</ul>`;
}

function buildCartItem(entry) {
  const { dish, quantity } = entry;
  return `
    <li class="cart-item">
      <div class="cart-item-top">
        <span class="cart-item-name">${dish.name}</span>
      </div>
      <div class="cart-item-bottom">
        <button type="button" class="cart-item-delete" onclick="removeFromCart(${dish.id})" aria-label="${dish.name} löschen">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M1 4h14M6 4V2h4v2M2 4l1 12h10L14 4" stroke="#E76C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="cart-qty-controls">
          <!-- FIX: Minus-Button war nie vorhanden -->
          <button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, -1)" aria-label="Weniger">−</button>
          <span class="qty-display-new">${quantity}</span>
          <button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, 1)" aria-label="Mehr">+</button>
        </div>
        <span class="cart-item-price">${formatPrice(dish.price * quantity)}</span>
      </div>
    </li>
  `.trim();
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

/* ===== SCROLL SPY (NEU) ===== */
// Aktualisiert den aktiven Kategorie-Link beim Scrollen automatisch
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
// FIX: War zweimal als separater DOMContentLoaded-Listener – jetzt zusammengeführt
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleMobileNav);
  init();
});
