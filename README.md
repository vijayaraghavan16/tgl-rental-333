# TGL Suppliers Website

## 🎉 Premium Shamiyana & Event Rental Services in Kanchipuram

A modern, SEO-optimized, and fully responsive website for TGL Suppliers, featuring Google Sheets integration for booking management.

---

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Google Sheets Integration Setup](#google-sheets-integration-setup)
- [SEO Features](#seo-features)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Support](#support)

---

## ✨ Features

### User Features
- **Modern, Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **SEO Optimized** - Complete meta tags, structured data, and semantic HTML
- **Google Sheets Integration** - Automatic booking form submission to Google Sheets
- **WhatsApp Integration** - Direct chat and booking notification via WhatsApp
- **Click-to-Call** - Instant phone call functionality
- **Smooth Animations** - Professional animations using AOS library
- **Interactive Gallery** - Showcase your work with image gallery
- **Service Areas Coverage** - Complete list of service locations
- **Google Maps Integration** - Easy directions to your shop
- **Booking Form** - Comprehensive booking form with validation

### Technical Features
- Semantic HTML5
- Modern CSS3 with CSS Variables
- Vanilla JavaScript (no jQuery required)
- Mobile-First Responsive Design
- Cross-Browser Compatible
- Fast Loading Speed
- Accessibility Compliant
- Schema.org Structured Data
- Open Graph Tags for Social Sharing

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Playfair Display & Manrope
- **Font Awesome** - Icons
- **AOS Library** - Scroll animations
- **Google Apps Script** - Backend for form submissions
- **Google Sheets** - Database for bookings

---

## 📁 File Structure

```
tgl-suppliers-website/
│
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── google-apps-script.js   # Google Apps Script code
├── README.md               # This file
│
└── images/                 # (To be created)
    ├── tgl-logo.png
    ├── tgl-og-image.jpg
    └── favicon.png
```

---

## 🚀 Setup Instructions

### Step 1: Download Files

Download all the files:
- `index.html`
- `styles.css`
- `script.js`
- `google-apps-script.js`

### Step 2: Create Images Folder

1. Create a folder named `images` in the same directory as your HTML file
2. Add the following images:
   - `tgl-logo.png` - Your company logo
   - `tgl-og-image.jpg` - Social media preview image (1200x630px recommended)
   - `favicon.png` - Browser tab icon (32x32px or 64x64px)

### Step 3: Update Contact Information

In `index.html`, verify all contact information is correct:
- Phone number: `9585684616`
- Location: Pillaiyar Palayam, Kanchipuram
- Service areas

---

## 📊 Google Sheets Integration Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "TGL Suppliers Bookings" (or any name you prefer)
4. The sheet will be automatically created with proper headers when first booking is received

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy the entire content from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. Update the configuration:
   ```javascript
   const SHEET_NAME = 'Bookings'; // Change if needed
   const ownerEmail = 'your-email@example.com'; // CHANGE THIS to your email
   ```

### Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Click on the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Fill in the details:
   - **Description**: TGL Suppliers Booking Form
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: Click **Authorize access** and grant all required permissions
7. Copy the **Web app URL** that appears

### Step 4: Update Website with Web App URL

1. Open `script.js` file
2. Find this line near the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your actual Web App URL
4. Save the file

### Step 5: Test the Integration

1. Open your website in a browser
2. Fill out the booking form
3. Submit it
4. Check your Google Sheet - you should see the new booking entry
5. Check your email - you should receive a notification email

**Troubleshooting:**
- If bookings aren't appearing, check the Apps Script execution logs
- Ensure you've granted all necessary permissions
- Verify the Web App URL is correct in `script.js`
- Make sure the sheet name matches in the Apps Script

---

## 🔍 SEO Features

### Meta Tags
✅ Title tag optimized for local search
✅ Meta description with target keywords
✅ Keywords meta tag
✅ Canonical URL
✅ Open Graph tags for Facebook
✅ Twitter Card tags
✅ Mobile viewport optimization

### Structured Data (Schema.org)
✅ LocalBusiness schema
✅ Service schema
✅ Organization schema
✅ GeoCoordinates
✅ Opening hours
✅ Contact information

### On-Page SEO
✅ Semantic HTML5 structure
✅ Proper heading hierarchy (H1-H4)
✅ Alt text for images
✅ Internal linking
✅ Fast loading speed
✅ Mobile-responsive design

### Target Keywords
- Shamiyana rental Kanchipuram
- Pandal rental Pillaiyar Palayam
- Tent rental Kanchipuram
- Chair rental Kanchipuram
- Cooking vessel rental
- Wedding tent Kanchipuram
- Event rental services

---

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #d97706;      /* Main brand color */
    --secondary-color: #059669;    /* Secondary color */
    --accent-color: #dc2626;       /* Accent color */
}
```

### Adding More Services

1. Open `index.html`
2. Find the services section
3. Copy an existing service card
4. Update the content
5. Add corresponding images

### Updating Service Areas

1. Find the service areas section in `index.html`
2. Add or remove area cards as needed
3. Keep the structure consistent

### Changing Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your preferred fonts
3. Replace the font link in `index.html`
4. Update the CSS variables in `styles.css`:
   ```css
   --font-display: 'YourDisplayFont', serif;
   --font-body: 'YourBodyFont', sans-serif;
   ```

---

## 🌐 Deployment

### Option 1: Web Hosting (Recommended)

1. **Choose a hosting provider:**
   - Hostinger
   - Bluehost
   - SiteGround
   - GoDaddy

2. **Upload files via FTP:**
   - Use FileZilla or your hosting control panel
   - Upload all files to the `public_html` folder
   - Ensure folder structure is maintained

3. **Configure domain:**
   - Point your domain to the hosting server
   - Wait for DNS propagation (24-48 hours)

### Option 2: GitHub Pages (Free)

1. Create a GitHub account
2. Create a new repository named `tgl-suppliers`
3. Upload all files
4. Go to Settings > Pages
5. Select main branch as source
6. Your site will be live at `https://yourusername.github.io/tgl-suppliers`

### Option 3: Netlify (Free, Recommended for Easy Setup)

1. Go to [Netlify](https://www.netlify.com)
2. Sign up for free account
3. Drag and drop your website folder
4. Your site is live instantly!
5. You can connect a custom domain later

---

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- ✅ iPhone (all models)
- ✅ Android phones
- ✅ Tablets
- ✅ Desktop screens of all sizes

### Testing on Mobile

1. Open Chrome DevTools (F12)
2. Click the device toggle icon
3. Test on various device sizes
4. Check touch interactions
5. Verify forms work correctly

---

## 🔧 Maintenance & Updates

### Regular Updates

1. **Content Updates:**
   - Update event photos in gallery
   - Add customer testimonials
   - Update service prices
   - Add new service areas

2. **SEO Maintenance:**
   - Monitor Google Search Console
   - Update meta descriptions seasonally
   - Add new relevant keywords
   - Create blog posts (optional)

3. **Technical Maintenance:**
   - Check all links monthly
   - Test booking form
   - Verify Google Sheets integration
   - Update copyright year

---

## 📈 Analytics Setup (Optional)

### Google Analytics

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property
3. Get your tracking code
4. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🆘 Support & Contact

### For Website Issues

**TGL Suppliers**
📞 Phone: 9585684616
📍 Location: Pillaiyar Palayam, Kanchipuram, Tamil Nadu 631501
📧 Email: your-email@example.com

### For Technical Support

If you encounter any technical issues:
1. Check the browser console for errors (F12)
2. Verify all files are uploaded correctly
3. Test the Google Sheets integration
4. Check your hosting provider's status

---

## 📝 License

This website is created for TGL Suppliers. All rights reserved.

---

## 🎉 Features Checklist

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Google Sheets integration
- ✅ WhatsApp integration
- ✅ Call functionality
- ✅ Contact form
- ✅ Service areas listing
- ✅ Gallery section
- ✅ About section
- ✅ Google Maps integration
- ✅ Social media links
- ✅ Mobile menu
- ✅ Smooth scrolling
- ✅ Animations
- ✅ Fast loading
- ✅ Cross-browser compatible

---

## 🚀 Quick Start Checklist

- [ ] Download all files
- [ ] Create images folder and add images
- [ ] Set up Google Sheet
- [ ] Deploy Google Apps Script
- [ ] Update Web App URL in script.js
- [ ] Update email in google-apps-script.js
- [ ] Test booking form
- [ ] Upload to hosting
- [ ] Test on mobile devices
- [ ] Submit to Google Search Console
- [ ] Share on social media

---

**Built with ❤️ for TGL Suppliers, Kanchipuram**

**Version:** 1.0.0  
**Last Updated:** February 2025
