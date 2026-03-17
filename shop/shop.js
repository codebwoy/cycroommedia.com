/**
 * WhatsApp Order Automation — Cycroom Media
 * Generates pre-filled WhatsApp order links for product cards.
 */

(function () {
  'use strict';

  const PRICE_ON_REQUEST = 'Preis auf Anfrage';

  /**
   * Build the pre-filled order message
   */
  function buildOrderMessage(productName, productPrice, quantity, config) {
    const greeting = config.greetingText || 'Hallo! Ich möchte gerne bestellen:';
    const price = productPrice && productPrice.trim() ? productPrice : PRICE_ON_REQUEST;
    const closing = config.closingText || 'Bitte bestätigen Sie meine Bestellung. Vielen Dank!';

    return `${greeting}

🛒 Produkt: ${productName}
💰 Preis: ${price}
📦 Menge: ${quantity}

${closing}`;
  }

  /**
   * Generate WhatsApp deep link
   */
  function getWhatsAppOrderUrl(productName, productPrice, quantity) {
    const config = window.SHOP_CONFIG || {};
    const number = (config.whatsappNumber || '').trim();

    if (!number) {
      return null;
    }

    const message = buildOrderMessage(productName, productPrice, quantity, config);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
  }

  /**
   * Create WhatsApp order button element
   */
  function createOrderButton(product) {
    const container = document.createElement('div');
    container.className = 'wa-order-container';

    // Quantity selector (1-10)
    const qtyWrapper = document.createElement('div');
    qtyWrapper.className = 'wa-order-row';

    const qtyLabel = document.createElement('label');
    qtyLabel.className = 'wa-qty-label';
    qtyLabel.textContent = 'Menge:';
    qtyLabel.htmlFor = `qty-${product.id}`;

    const qtySelect = document.createElement('select');
    qtySelect.id = `qty-${product.id}`;
    qtySelect.className = 'wa-qty-select';
    qtySelect.setAttribute('aria-label', 'Menge auswählen');
    for (let i = 1; i <= 10; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = i;
      qtySelect.appendChild(opt);
    }

    qtyWrapper.appendChild(qtyLabel);
    qtyWrapper.appendChild(qtySelect);

    // Button or warning
    const config = window.SHOP_CONFIG || {};
    const hasNumber = !!(config.whatsappNumber || '').trim();

    if (hasNumber) {
      const btn = document.createElement('a');
      btn.className = 'wa-order-btn';
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Bestellen via WhatsApp';

      btn.addEventListener('click', function (e) {
        const qty = parseInt(qtySelect.value, 10) || 1;
        const url = getWhatsAppOrderUrl(product.name, product.price, qty);
        if (url) {
          btn.href = url;
          // Let default behavior open in new tab
        } else {
          e.preventDefault();
        }
      });

      // Set initial href and update on quantity change
      function updateHref() {
        const qty = parseInt(qtySelect.value, 10) || 1;
        btn.href = getWhatsAppOrderUrl(product.name, product.price, qty);
      }
      updateHref();

      qtySelect.addEventListener('change', updateHref);

      container.appendChild(qtyWrapper);
      container.appendChild(btn);
    } else {
      const warning = document.createElement('div');
      warning.className = 'wa-order-warning';
      warning.textContent = 'Bitte WhatsApp-Nummer in den Einstellungen eintragen';
      container.appendChild(qtyWrapper);
      container.appendChild(warning);
    }

    return container;
  }

  /**
   * Render product cards with WhatsApp button
   */
  function renderProducts(products, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    products.forEach(function (product) {
      const card = document.createElement('article');
      card.className = 'product-card';

      const img = product.image
        ? `<img src="${product.image}" alt="${product.name}" class="product-image">`
        : '<div class="product-image-placeholder">Kein Bild</div>';

      const priceDisplay = product.price && product.price.trim()
        ? `€${product.price}`
        : 'Preis auf Anfrage';

      card.innerHTML = `
        <div class="product-image-wrap">${img}</div>
        <div class="product-body">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${priceDisplay}</p>
        </div>
      `;

      const body = card.querySelector('.product-body');
      const orderBtn = createOrderButton({
        id: product.id,
        name: product.name,
        price: product.price ? `€${product.price}` : PRICE_ON_REQUEST
      });
      body.appendChild(orderBtn);

      container.appendChild(card);
    });
  }

  // Expose for external use
  window.WhatsAppOrder = {
    getWhatsAppOrderUrl: getWhatsAppOrderUrl,
    buildOrderMessage: buildOrderMessage,
    createOrderButton: createOrderButton,
    renderProducts: renderProducts
  };
})();
