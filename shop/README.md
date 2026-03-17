# WhatsApp Order Automation — Shop Demo

Pre-filled WhatsApp order buttons for product cards. Customers click → WhatsApp opens with message ready to send.

## Quick Start

1. Open `index.html` in a browser (or serve via `python -m http.server 8000` and visit `/shop/`)
2. Click **Einstellungen** to set your WhatsApp number (or use default from `config.js`)
3. Click **Bestellen via WhatsApp** on any product to test

## Files

| File | Purpose |
|------|---------|
| `config.js` | Default WhatsApp number & greeting. Edit once, applies everywhere. |
| `shop.js` | Order link generation, product rendering, edge-case handling |
| `shop.css` | Button styles (#25D366 green, 8px radius, full-width mobile) |
| `index.html` | Demo page with 6 sample products |

## Settings (Shop Owner)

- **WhatsApp Bestellnummer**: International format, no + or spaces (e.g. `4915712345678`)
- **Begrüßungstext**: Customizable greeting. Default: `Hallo! Ich möchte gerne bestellen:`

Settings are saved to `localStorage` and persist across reloads.

## Message Format

```
Hallo! Ich möchte gerne bestellen:

🛒 Produkt: [Product Name]
💰 Preis: [Product Price] or "Preis auf Anfrage"
📦 Menge: [1-10]

Bitte bestätigen Sie meine Bestellung. Vielen Dank!
```

## Edge Cases

- **No WhatsApp number**: Button shows "Bitte WhatsApp-Nummer in den Einstellungen eintragen"
- **No price**: Message shows "Preis auf Anfrage"
- **Quantity**: Customer selects 1–10 before clicking; defaults to 1

## Integration

To add to an existing shop:

1. Include `config.js` and `shop.js`
2. Call `WhatsAppOrder.createOrderButton(product)` and append to each product card
3. Or call `WhatsAppOrder.renderProducts(products, '#productGrid')` with your product array

Product shape: `{ id, name, price, image? }`
