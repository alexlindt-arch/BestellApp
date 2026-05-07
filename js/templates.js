/* ===== MENU SECTION TEMPLATES ===== */
function formatCategoryHeading(name) {
  return name
    .replace(/(\s*)(\([^)]+\))$/, '<span class="category-heading-sub">$1$2</span>')
    .replace(/( & .*)$/, '<span class="cat-subtitle">$1</span>');
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

/* ===== CART TEMPLATES ===== */
function buildCartHTML(items, subtotal, delivery, total) {
  if (items.length === 0) {
    return `
      <div class="cart-header">
        <h2 class="cart-title">Your Basket</h2>
      </div>
      <div class="cart-items-scroll">${buildEmptyCart()}</div>
    `.trim();
  }
  return `
    <div class="cart-header">
      <h2 class="cart-title">Your Basket</h2>
    </div>
    <div class="cart-items-scroll">${buildCartList(items)}</div>
    ${buildCartFooter(subtotal, delivery, total)}
  `.trim();
}

function buildEmptyCart() {
  return `
    <div class="cart-empty">
      <p class="cart-empty-text">Nothing here yet.<br>Go ahead and choose something delicious!</p>
      <div class="cart-empty-icon-wrap">
        <svg class="cart-empty-icon" viewBox="13 13 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.2067 37C19.546 37 18.9805 36.765 18.5101 36.295C18.0397 35.825 17.8044 35.26 17.8044 34.6C17.8044 33.94 18.0397 33.375 18.5101 32.905C18.9805 32.435 19.546 32.2 20.2067 32.2C20.8673 32.2 21.4328 32.435 21.9032 32.905C22.3737 33.375 22.6089 33.94 22.6089 34.6C22.6089 35.26 22.3737 35.825 21.9032 36.295C21.4328 36.765 20.8673 37 20.2067 37ZM32.2178 37C31.5571 37 30.9916 36.765 30.5212 36.295C30.0508 35.825 29.8155 35.26 29.8155 34.6C29.8155 33.94 30.0508 33.375 30.5212 32.905C30.9916 32.435 31.5571 32.2 32.2178 32.2C32.8784 32.2 33.4439 32.435 33.9143 32.905C34.3848 33.375 34.62 33.94 34.62 34.6C34.62 35.26 34.3848 35.825 33.9143 36.295C33.4439 36.765 32.8784 37 32.2178 37ZM19.1857 17.8L22.0684 23.8H30.4761L33.7792 17.8H19.1857ZM18.0447 15.4H35.761C36.2215 15.4 36.5718 15.605 36.812 16.015C37.0522 16.425 37.0622 16.84 36.842 17.26L32.5781 24.94C32.3579 25.34 32.0626 25.65 31.6923 25.87C31.3219 26.09 30.9166 26.2 30.4761 26.2H21.5279L20.2067 28.6H33.4189C33.7592 28.6 34.0444 28.715 34.2747 28.945C34.5049 29.175 34.62 29.46 34.62 29.8C34.62 30.14 34.5049 30.425 34.2747 30.655C34.0444 30.885 33.7592 31 33.4189 31H20.2067C19.3058 31 18.6252 30.605 18.1648 29.815C17.7043 29.025 17.6843 28.24 18.1047 27.46L19.7262 24.52L15.4022 15.4H14.2011C13.8608 15.4 13.5755 15.285 13.3453 15.055C13.1151 14.825 13 14.54 13 14.2C13 13.86 13.1151 13.575 13.3453 13.345C13.5755 13.115 13.8608 13 14.2011 13H16.1529C16.3731 13 16.5833 13.06 16.7835 13.18C16.9837 13.3 17.1338 13.47 17.2339 13.69L18.0447 15.4Z" fill="#FDEADC"/>
        </svg>
      </div>
    </div>
  `;
}

function buildCartList(items) {
  return `<ul class="cart-list">${items.map(buildCartItemHtml).join('')}</ul>`;
}

function cartItemTemplate(dish, quantity, cornerDelete, leftControl, price) {
  return `
    <li class="cart-item">
      <div class="cart-item-top">
        <span class="cart-item-name">${quantity} x ${dish.name}</span>
        ${cornerDelete}
      </div>
      <div class="cart-item-bottom">
        <div class="cart-qty-controls">
          ${leftControl}
          <span class="qty-display-new">${quantity}</span>
          <button type="button" class="qty-btn-new" onclick="updateQuantity(${dish.id}, 1)" aria-label="Increase quantity">+</button>
        </div>
        <span class="cart-item-price">${price}</span>
      </div>
    </li>
  `.trim();
}

function buildCartFooter(subtotal, delivery, total) {
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
        <button type="button" class="order-btn" onclick="placeOrder()">
          Buy now (${formatPrice(total)})
        </button>
      </div>
    </div>
  `.trim();
}
