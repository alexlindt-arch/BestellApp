/* ===== STATE ===== */
let cart = {};
let _confirmationTimer = null;

/* ===== INIT ===== */
function init() {
  renderMenuSections();
  syncCarts();
  updateCartUI();
}

function syncCarts() {
  const items = Object.values(cart);
  const subtotal = getCartTotal();
  const delivery = RESTAURANT.deliveryPrice;
  const total = subtotal + delivery;
  const html = buildCartHTML(items, subtotal, delivery, total);
  document.getElementById('cart-desktop').innerHTML = html;
  document.getElementById('cart-mobile-inner').innerHTML = html;
}

/* ===== CART ITEM HTML BUILDER ===== */
function buildCartItemHtml(entry) {
  const { dish, quantity } = entry;
  const deleteIcon = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M1 4h14M6 4V2h4v2M2 4l1 12h10L14 4" stroke="#E76C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const cornerDelete = quantity > 1
    ? `<button type="button" class="cart-item-delete cart-item-delete--corner" onclick="removeFromCart(${dish.id})" aria-label="Remove ${dish.name}">${deleteIcon}</button>`
    : '';
  const leftControl = quantity <= 1
    ? `<button type="button" class="qty-btn-new qty-btn-new--as-delete" onclick="removeFromCart(${dish.id})" aria-label="Remove ${dish.name}">${deleteIcon}</button>`
    : `<button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, -1)" aria-label="Decrease quantity">−</button>`;
  const price = formatPrice(dish.price * quantity);
  return cartItemTemplate(dish, quantity, cornerDelete, leftControl, price);
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
  initScrollSpy();
});
