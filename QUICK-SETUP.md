# 🚀 QUICK SETUP GUIDE - TGL SUPPLIERS WEBSITE

## ⚡ Get Your Website Live in 30 Minutes!

---

## STEP 1: GOOGLE SHEETS SETUP (10 minutes)

### A. Create the Spreadsheet

1. Go to: https://sheets.google.com
2. Click "+ Blank" to create new sheet
3. Name it: "TGL Suppliers Bookings"
4. Leave it as is (headers will be added automatically)

### B. Set Up Apps Script

1. In your sheet, click **Extensions** → **Apps Script**
2. Delete all existing code
3. Open the file `google-apps-script.js`
4. Copy ALL the code from that file
5. Paste it in Apps Script editor
6. **IMPORTANT**: Change this line:
   ```javascript
   const ownerEmail = 'your-email@example.com';
   ```
   Replace with YOUR real email address

7. Click **Save** (disk icon)
8. Click **Deploy** → **New deployment**
9. Click gear icon ⚙️ → Select **Web app**
10. Set:
    - Execute as: **Me**
    - Who has access: **Anyone**
11. Click **Deploy**
12. Click **Authorize access** → Select your Google account → Allow all permissions
13. **COPY THE WEB APP URL** - You'll need this!

### C. Update the Website Code

1. Open the file `script.js`
2. Find line 6:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace the text with YOUR Web App URL (keep the quotes!)
4. Save the file

---

## STEP 2: PREPARE YOUR IMAGES (5 minutes)

### Required Images:

1. **Logo** (`tgl-logo.png`)
   - Your company logo
   - Size: 200x80 pixels recommended
   - Format: PNG with transparent background

2. **Social Media Image** (`tgl-og-image.jpg`)
   - Preview image for Facebook/WhatsApp sharing
   - Size: 1200x630 pixels
   - Format: JPG

3. **Favicon** (`favicon.png`)
   - Browser tab icon
   - Size: 32x32 or 64x64 pixels
   - Format: PNG

### Where to Place Images:

1. Create a folder named `images` in the same folder as `index.html`
2. Put all three images in this folder
3. Make sure file names match exactly as shown above

---

## STEP 3: UPLOAD TO HOSTING (15 minutes)

### OPTION A: Netlify (Easiest - FREE)

1. Go to: https://www.netlify.com
2. Sign up (free account)
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your entire website folder
5. Done! Your site is live instantly!
6. Netlify gives you a free URL like: `tgl-suppliers.netlify.app`
7. You can add your own domain later in Netlify settings

### OPTION B: Traditional Hosting

If you have hosting (like Hostinger, Bluehost, etc.):

1. Log in to your hosting control panel (cPanel)
2. Open File Manager
3. Go to `public_html` folder
4. Upload all files:
   - index.html
   - styles.css
   - script.js
   - robots.txt
   - sitemap.xml
   - images folder (with all images inside)
5. Your site is live at your domain!

---

## STEP 4: TEST EVERYTHING (5 minutes)

### ✅ Checklist:

- [ ] Open website in browser
- [ ] Click all navigation links
- [ ] Test mobile view (use phone or Chrome DevTools)
- [ ] Fill and submit the booking form
- [ ] Check if booking appears in Google Sheet
- [ ] Check if you received email notification
- [ ] Test "Call Now" button
- [ ] Test WhatsApp button
- [ ] Check all service area links
- [ ] Verify images load correctly

---

## 🎯 POST-LAUNCH TASKS

### Submit to Google (Important for SEO!)

1. Go to: https://search.google.com/search-console
2. Add your website
3. Submit your sitemap: `https://yourwebsite.com/sitemap.xml`

### Share Your Website

- Post on Facebook with your services
- Share on WhatsApp Status
- Add to Google My Business
- Share with friends and family

---

## 🆘 TROUBLESHOOTING

### Booking Form Not Working?

**Problem**: Form submits but nothing in Google Sheet

**Solutions**:
1. Check Web App URL in `script.js` is correct
2. Verify you authorized Apps Script (Step 1B, point 12)
3. Open browser console (F12) to see errors
4. Check sheet name matches in Apps Script code

### Images Not Showing?

**Problem**: Broken image icons

**Solutions**:
1. Verify `images` folder exists in same location as `index.html`
2. Check image file names match exactly (case-sensitive!)
3. Ensure images are in correct format (PNG for logo/favicon, JPG for social)

### Website Not Loading?

**Problem**: 404 error or blank page

**Solutions**:
1. Check all files uploaded to correct folder
2. Ensure `index.html` is in root/public_html folder
3. Clear browser cache (Ctrl+Shift+Delete)
4. Contact your hosting support

### Email Notifications Not Received?

**Problem**: Bookings saved but no email

**Solutions**:
1. Check spam/junk folder
2. Verify email address in `google-apps-script.js` is correct
3. Make sure you authorized email permissions in Apps Script
4. Check Apps Script execution logs for errors

---

## 📞 NEED HELP?

### Quick Fixes:

**Can't log in to Google?**
- Make sure you're using the Google account that owns the Sheet

**Website looks broken on mobile?**
- Clear browser cache on phone
- Try a different browser

**Form validation errors?**
- All fields with * are required
- Phone must be 10 digits
- Date must be today or future
- Select at least one service

---

## 🎉 YOU'RE ALL SET!

Your website is now live with:
✅ Professional design
✅ Automatic booking system
✅ WhatsApp integration
✅ Call functionality
✅ Email notifications
✅ Mobile-friendly
✅ SEO optimized

### Share your website:
📱 WhatsApp: Share link with customers
📘 Facebook: Post about your new website
📧 Email: Add link to email signature
📋 Print: Add QR code to business cards

---

## 💡 TIPS FOR SUCCESS

1. **Update regularly**: Add new photos to gallery monthly
2. **Check bookings**: Review Google Sheet daily
3. **Respond fast**: Call customers within 1 hour
4. **Ask for reviews**: Request happy customers to review online
5. **Share events**: Post event photos on social media

---

## 📈 GROW YOUR BUSINESS

1. **Google My Business**: Create a listing (free!)
2. **Facebook Page**: Share your website link
3. **Instagram**: Post event photos with website link
4. **WhatsApp Status**: Share special offers
5. **Word of Mouth**: Best advertising!

---

**Website Ready! Start Getting Bookings! 🎊**

For support, call: 9585684616
