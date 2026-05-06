/* ===== STATE ===== */
let cart = {};

/* ===== INIT ===== */
function init() {
  renderMenuSections();
  syncCarts();
  updateCartUI();
}

/* ===== MENU RENDER ===== */
function renderMenuSections() {
  const container = document.getElementById('menu-container');
  container.innerHTML = MENU_DATA.map(renderCategorySection).join('');
}

/* ===== CART RENDER ===== */
function syncCarts() {
  const items = Object.values(cart);
  const html = buildCartHTML(items, RESTAURANT.deliveryPrice);
  document.getElementById('cart-desktop').innerHTML = html;
  document.getElementById('cart-mobile-inner').innerHTML = html;
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

/* ===== NAVIGATION ===== */
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

/* ===== UTILS ===== */
function findDish(dishId) {
  for (const cat of MENU_DATA) {
    const dish = cat.items.find(d => d.id === dishId);
    if (dish) return dish;
  }
  return null;
}

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

/* ===== BOOTSTRAP ===== */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleMobileNav);
  init();
});
