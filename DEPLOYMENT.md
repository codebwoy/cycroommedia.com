# Deploy Cycroom Media Directly on IONOS

Host your site on IONOS without GitHub or Vercel. Use FTP/SFTP or Webfiles to upload your files.

**References:** [IONOS FTP, SSH & Webfiles](https://www.ionos.com/help/hosting/ftp-ssh-webfiles/) | [IONOS Domains API](https://developer.hosting.ionos.de/docs/domains)

---

## Prerequisites

- IONOS Web Hosting package (not MyWebsite)
- Domain `cycroommedia.com` in your IONOS account

---

## Step 1: Assign Domain to Hosting

1. Log in to [IONOS](https://www.ionos.de) → **Websites & Stores**
2. Select your **Web Hosting** package
3. Go to **Domains** / **Domain zuweisen**
4. Add `cycroommedia.com` and assign it to this hosting
5. IONOS will create the required DNS records (A, CNAME) for `@` and `www`

---

## Step 2: Upload Files

### Option A: Webfiles (File Manager)

1. IONOS → **Websites & Stores** → your hosting → **Webfiles**
2. Open the **htdocs** folder (this is your web root)
3. Upload these files and folders:
   - `index.html` (root of htdocs)
   - `favicon.svg` (root of htdocs)
   - `.htaccess` (root of htdocs)
   - `css/` folder (with `styles.css` inside)
   - `js/` folder (with `main.js` inside)

**Guide:** [Starting Webfiles in IONOS](https://www.ionos.com/help/hosting/setting-up-and-managing-web-files/starting-webfiles-in-control-center/)

### Option B: FTP/SFTP (FileZilla, WinSCP, etc.)

1. Create an FTP/SFTP account in IONOS if needed:
   - **Hosting** → **FTP-Zugang** / **FTP Access**
2. Connect with your FTP client:
   - **Host:** Your server (e.g. `ftp.ionos.de` or your hosting hostname)
   - **Protocol:** SFTP (Linux) or FTPS (Windows)
   - **Port:** 22 (SFTP) or 21 (FTPS)
3. Navigate to **htdocs**
4. Upload the same files as above

**Guides:**
- [Transferring files securely with FTPS and SFTP](https://www.ionos.com/help/hosting/setting-up-and-managing-ftp-access/transferring-files-securely-with-ftps-and-sftp/)
- [FileZilla with SFTP](https://www.ionos.com/help/hosting/setting-up-and-managing-ftp-access/transferring-files-with-filezilla-using-sftp/)

---

## Step 3: Enable SSL (HTTPS)

1. IONOS → **Domains & SSL**
2. Select `cycroommedia.com`
3. Enable **Let's Encrypt** SSL certificate
4. Wait a few minutes for activation

---

## File Structure in htdocs

```
htdocs/
├── index.html
├── favicon.svg
├── .htaccess
├── css/
│   └── styles.css
└── js/
    └── main.js
```

---

## Existing DNS Records (Keep)

Do **not** remove your existing records:

- DMARC, Domain Connect, MX, TXT, DKIM, autodiscover (mail)
- briefklar, kumasimarket, malatamarktgermany, veerafroshophamburg → base44.onrender.com

When you assign the domain to hosting, IONOS adds the A/CNAME records for `@` and `www` automatically.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Site not loading | Ensure domain is assigned to hosting; wait 5–30 min for DNS |
| 404 errors | Check files are in `htdocs`, not a subfolder |
| No HTTPS | Enable Let's Encrypt in Domains & SSL |
| .htaccess not working | Ensure Apache mod_rewrite is enabled (default on IONOS) |

---

## Domain API Reference

For programmatic domain/DNS management: [IONOS Domains API](https://developer.hosting.ionos.de/docs/domains)
