# Cycroom Media Website

Professional agency website for Cycroom Media — a German-based digital agency for African businesses.

## Setup

1. **WhatsApp Number**: Replace `491234567890` in all WhatsApp links with your actual number (format: country code + number, no + or spaces).
   - Search for: `wa.me/491234567890`
   - Example for +49 170 1234567: use `491701234567`

2. **Favicon**: Replace `favicon.svg` with your Cycroom Media logo. Supported formats: SVG, ICO, or PNG.

## Local Development

Open `index.html` in a browser, or run a simple server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve
```

Then visit http://localhost:8000

## Deploy to IONOS

1. **Upload files** via IONOS File Manager or FTP to your web root (e.g. `htdocs` or `public_html`):
   - `index.html` (root)
   - `favicon.svg` (root)
   - `css/` folder
   - `js/` folder
   - `.htaccess` (root — redirects cycroommedia.com → www.cycroommedia.com)

2. **Domain setup** in IONOS:
   - If domain is at IONOS: Add domain to your hosting package and assign it to this web space
   - Ensure both `cycroommedia.com` and `www.cycroommedia.com` point to your hosting

3. **SSL**: Enable Let's Encrypt SSL in IONOS for HTTPS

## Push to GitHub

1. Create a new repository on [github.com/new](https://github.com/new) (e.g. `cycroommedia.com`).

2. Add the remote and push (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/cycroommedia.com.git
git push -u origin main
```

3. For authentication, use a [Personal Access Token](https://github.com/settings/tokens) as password when prompted.

## Structure

- `index.html` — Single-page site with all sections
- `css/styles.css` — Styles (mobile-first, Inter font, black/white/gold palette)
- `js/main.js` — Mobile menu, smooth scroll
- `favicon.svg` — Favicon
- `.htaccess` — Redirects to www.cycroommedia.com
