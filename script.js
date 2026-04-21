/* ===== RESTAURANT DATA ===== */
const RESTAURANT = {
  name: 'Pomodoro',
  rating: 4.8,
  reviewCount: 234,
  deliveryTime: '25–40 Min.',
  deliveryPrice: 2.49,
  minOrder: 12.0,
};

const MENU_DATA = [
  {
    id: 'vorspeisen',
    name: 'Vorspeisen',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 1, name: 'Bruschetta al Pomodoro', description: 'Geröstetes Ciabatta mit frischen Tomaten, Knoblauch und Basilikum', price: 5.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=400&q=80' },
      { id: 2, name: 'Caprese Classico', description: 'Büffelmozzarella, reife Tomaten, Basilikum und kaltgepresstes Olivenöl', price: 7.99, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=400&q=80' },
      { id: 3, name: 'Zuppa del Giorno', description: 'Hausgemachte Tagessuppe nach Empfehlung des Küchenchefs', price: 4.99, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80' },
      { id: 4, name: 'Antipasto Misto', description: 'Gemischte Vorspeiseplatte mit Oliven, Käse, Aufschnitt und Grillgemüse', price: 9.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 5, name: 'Margherita', description: 'Tomatensauce, Mozzarella fior di latte, frisches Basilikum', price: 8.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
      { id: 6, name: 'Diavola', description: 'Tomatensauce, Mozzarella, scharfe Salami, Chili', price: 10.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80' },
      { id: 7, name: 'Quattro Formaggi', description: 'Vier-Käse-Pizza: Mozzarella, Gorgonzola, Parmesan, Fontina', price: 11.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
      { id: 8, name: 'Prosciutto e Funghi', description: 'Tomatensauce, Mozzarella, Parmaschinken, Champignons', price: 12.49, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d9738?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 9, name: 'Spaghetti Bolognese', description: 'Hausgemachte Bolognese-Sauce mit Rindfleisch und frischen Kräutern', price: 9.99, image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=400&q=80' },
      { id: 10, name: 'Pasta alla Carbonara', description: 'Spaghetti, Guanciale, Eigelb, Parmesan, schwarzer Pfeffer', price: 10.99, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=400&q=80' },
      { id: 11, name: 'Penne all\'Arrabbiata', description: 'Pikante Tomatensauce mit Knoblauch und Chili (vegan)', price: 8.49, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80' },
      { id: 12, name: 'Lasagne al Forno', description: 'Klassische Lasagne mit Bolognese-Sauce und Béchamel', price: 11.99, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: 'dessert',
    name: 'Dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 13, name: 'Tiramisù', description: 'Klassisches Tiramisù mit Mascarpone, Espresso und Amaretto', price: 5.99, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80' },
      { id: 14, name: 'Panna Cotta', description: 'Cremige Panna Cotta mit frischer Beerensauce', price: 4.99, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80' },
      { id: 15, name: 'Gelato Misto', description: 'Drei Kugeln hausgemachtes Eis nach Wahl mit Waffel', price: 3.99, image: 'https://images.unsplash.com/photo-1567206563114-c179706a56e4?auto=format&fit=crop&w=400&q=80' },
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

function renderCategorySection(cat) {
  return `
    <section id="cat-${cat.id}" class="dish-section">
      <h2 class="category-heading">${cat.name}</h2>
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

function showOrderConfirmation() {
  document.getElementById('order-confirmation').classList.remove('hidden');
}

function closeOrderConfirmation() {
  document.getElementById('order-confirmation').classList.add('hidden');
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
