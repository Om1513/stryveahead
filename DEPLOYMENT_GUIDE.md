# 🚀 cPanel Deployment Guide for StryveAhead Website

This guide will help you deploy your Next.js website to cPanel hosting step by step.

## 📋 Prerequisites

- cPanel hosting account with File Manager access
- Node.js installed on your local machine
- Your website files ready for deployment

## 🔧 Step 1: Prepare Your Project for Static Export

✅ **Already Done**: The project has been configured with:
- `output: 'export'` in `next.config.js`
- `images.unoptimized: true` for static hosting
- `trailingSlash: true` for better cPanel compatibility

## 🏗️ Step 2: Build Your Website

1. **Open Terminal/Command Prompt** in your project directory:
   ```bash
   cd C:\Users\omsin\Documents\stryveahead
   ```

2. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Build the Static Website**:
   ```bash
   npm run build
   ```

4. **Verify Build Success**: You should see an `out` folder created in your project directory containing all static files.

## 📁 Step 3: Prepare Files for Upload

After building, you'll find these important folders/files in the `out` directory:
- `index.html` (your homepage)
- `_next/` folder (contains CSS, JS, and other assets)
- `images/` folder (your website images)
- Other HTML files for different pages

## 🌐 Step 4: Access Your cPanel

1. **Log into your cPanel** account
2. **Find File Manager** in the Files section
3. **Click on File Manager**

## 📤 Step 5: Upload Files to cPanel

### Option A: Using File Manager Upload

1. **Navigate to public_html** folder (this is your website's root directory)
2. **Delete existing files** (if any) - typically `index.html`, `cgi-bin` can stay
3. **Click Upload** button at the top
4. **Select all files from your `out` folder** and upload them
5. **Wait for upload to complete**

### Option B: Using ZIP Upload (Recommended for faster upload)

1. **Create a ZIP file** of all contents in your `out` folder
2. **Upload the ZIP file** to `public_html`
3. **Right-click the ZIP file** and select "Extract"
4. **Delete the ZIP file** after extraction

## 🔗 Step 6: Set Up Domain/Subdomain

### For Main Domain:
- Files should be in `public_html/`
- Your website will be accessible at `yourdomain.com`

### For Subdomain:
1. **Create Subdomain** in cPanel:
   - Go to Subdomains
   - Create subdomain (e.g., `www` or `app`)
2. **Upload files** to the subdomain folder instead of `public_html`

## ⚙️ Step 7: Configure .htaccess (Important!)

Create a `.htaccess` file in your `public_html` directory with this content:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>

# Handle routing for single page application
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
</IfModule>
```

## 🧪 Step 8: Test Your Website

1. **Visit your domain** in a web browser
2. **Test all sections**:
   - Home/Hero section
   - About Us
   - Services
   - Portfolio
   - Team
   - Contact form
3. **Check mobile responsiveness**
4. **Test contact form** (make sure it submits properly)

## 🔧 Step 9: Contact Form Setup (Important!)

Since your contact form uses API routes, you'll need to set up form handling:

### Option A: Use a Form Service (Recommended)
1. **Sign up for Formspree, Netlify Forms, or similar**
2. **Update your contact form** to point to their endpoint
3. **Replace the API call** in `components/cta/cta.tsx`

### Option B: Use cPanel Email Forms
1. **Set up email forwarding** in cPanel
2. **Create a PHP script** to handle form submissions
3. **Update form action** to point to the PHP script

## 📱 Step 10: SSL Certificate Setup

1. **Go to SSL/TLS** in cPanel
2. **Enable "Let's Encrypt SSL"** (usually free)
3. **Force HTTPS** redirects
4. **Update any hardcoded HTTP links** to HTTPS

## 🚀 Step 11: Performance Optimization

1. **Enable Cloudflare** (if available through your host)
2. **Set up CDN** for faster image loading
3. **Monitor website speed** with Google PageSpeed Insights
4. **Enable cPanel caching** if available

## 🔍 Troubleshooting Common Issues

### Website Shows Directory Listing
- **Solution**: Make sure `index.html` is in the root directory

### Images Not Loading
- **Solution**: Check image paths are correct and images are uploaded

### CSS/JS Not Loading
- **Solution**: Ensure `_next` folder is uploaded completely

### Contact Form Not Working
- **Solution**: Set up proper form handling (see Step 9)

### 404 Errors on Page Refresh
- **Solution**: Make sure `.htaccess` file is properly configured

## 📞 Support

If you encounter issues:
1. **Check cPanel Error Logs**
2. **Contact your hosting provider**
3. **Use browser developer tools** to debug issues

## 🎉 Congratulations!

Your StryveAhead website should now be live! 

**Quick Checklist:**
- ✅ Website loads at your domain
- ✅ All sections display correctly
- ✅ Images load properly
- ✅ Mobile version works
- ✅ Contact form functions
- ✅ SSL certificate active

---

**Next Steps:**
- Set up Google Analytics
- Submit sitemap to Google Search Console
- Set up regular backups
- Monitor website performance
