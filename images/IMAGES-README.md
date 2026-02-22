# 📸 TGL Suppliers - Images Guide

## ✅ Images Included

All images are provided in **WebP format** for optimal web performance and faster loading times.

### 🎨 Branding Images

1. **tgl-logo.webp** (300x120px)
   - Company logo with "TGL Suppliers" branding
   - Orange and dark gray color scheme
   - Use in header and footer

2. **tgl-logo.png** (300x120px)
   - PNG version of logo (for compatibility)
   - Transparent background

3. **favicon.png** (32x32px)
   - Browser tab icon
   - Shows "TGL" text on orange background
   - Keep as PNG (browsers prefer PNG for favicons)

4. **tgl-og-image.webp** (1200x630px)
   - Social media preview image
   - Used when sharing on Facebook, WhatsApp, LinkedIn
   - Shows company name, services, and contact info

5. **tgl-og-image.jpg** (1200x630px)
   - JPG version for compatibility

### 🖼️ Gallery Images

Professional placeholder images for your gallery section:

1. **gallery-1.webp** - Wedding Shamiyana
2. **gallery-2.webp** - Charminar Pandal
3. **gallery-3.webp** - Chair Setup
4. **gallery-4.webp** - Cooking Vessels
5. **gallery-5.webp** - Housewarming
6. **gallery-6.webp** - Corporate Event

**Note:** These are placeholder images. Replace them with your actual event photos for best results!

---

## 🔄 How to Replace with Your Real Photos

### Step 1: Take High-Quality Photos
- Use good lighting
- Take photos from multiple angles
- Show your best setups
- Include happy customers (with permission)

### Step 2: Recommended Photo Types
📸 **Shamiyana/Pandal Setups:**
- Wide-angle shots showing full setup
- Close-ups of decorations
- Different pandal styles you offer
- Day and night shots

📸 **Chair & Table Arrangements:**
- Organized seating layouts
- Different chair types (plastic, steel)
- Table setups with decorations

📸 **Cooking Vessels:**
- Clean, organized vessel arrangements
- Different sizes available
- Cooking in progress (if appropriate)

📸 **Complete Events:**
- Before and after shots
- Happy customers
- Special decorations

### Step 3: Convert Your Photos to WebP

**Option A: Online Converter (Easiest)**
1. Go to: https://cloudconvert.com/jpg-to-webp
2. Upload your JPG/PNG photos
3. Download WebP files
4. Rename them to gallery-1.webp, gallery-2.webp, etc.

**Option B: Using Software**
- Use GIMP (free): File → Export As → Select WebP
- Use Photoshop: Save As → WebP format
- Use XnConvert (free batch converter)

### Step 4: Replace Images
1. Delete the placeholder gallery images
2. Add your converted WebP images
3. Name them: gallery-1.webp, gallery-2.webp, etc.
4. Ensure they're in the `/images` folder

---

## 📐 Recommended Image Sizes

| Image Type | Recommended Size | Format |
|------------|-----------------|--------|
| Logo | 300x120px | PNG + WebP |
| Favicon | 32x32px | PNG only |
| OG Image | 1200x630px | JPG + WebP |
| Gallery | 1200x800px | WebP |
| Service Icons | 800x600px | WebP |

---

## 🎨 Image Optimization Tips

### For Best Performance:
1. **Compress images** before converting to WebP
2. **Use WebP format** for all website images (except favicon)
3. **Keep file sizes** under 500KB each
4. **Maintain aspect ratio** 4:3 or 16:9 for gallery images

### Color & Quality:
- **Brightness:** Ensure good lighting in photos
- **Contrast:** Clear distinction between elements
- **Focus:** Sharp, not blurry
- **Background:** Clean, uncluttered

---

## 📱 Testing Images

After adding your images:

1. **Check on Mobile:**
   - Open website on phone
   - Verify images load quickly
   - Check if they look good on small screens

2. **Check on Desktop:**
   - Test in Chrome, Firefox, Safari
   - Verify images are sharp and clear
   - Check loading speed

3. **Test Social Sharing:**
   - Share website link on WhatsApp
   - Check if OG image appears correctly
   - Verify preview looks professional

---

## 🔧 Updating Images in HTML

If you want to change image filenames, update these sections in `index.html`:

### Logo (Line ~68):
```html
<div class="logo">
    <img src="images/tgl-logo.webp" alt="TGL Suppliers Logo">
</div>
```

### Favicon (Line ~54):
```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### OG Image (Line ~14):
```html
<meta property="og:image" content="images/tgl-og-image.webp">
```

### Gallery Images (Lines ~450-550):
```html
<img src="images/gallery-1.webp" alt="Wedding Shamiyana Setup">
```

---

## 📂 Folder Structure

```
your-website/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── tgl-logo.png
    ├── tgl-logo.webp
    ├── favicon.png
    ├── tgl-og-image.jpg
    ├── tgl-og-image.webp
    ├── gallery-1.webp
    ├── gallery-2.webp
    ├── gallery-3.webp
    ├── gallery-4.webp
    ├── gallery-5.webp
    └── gallery-6.webp
```

---

## ❗ Important Notes

1. **Keep favicon as PNG** - Browsers prefer PNG format for favicons
2. **Use WebP for all other images** - Better compression, faster loading
3. **Backup original photos** - Keep high-res originals before converting
4. **Update alt text** - Describe what's in each image for SEO
5. **Test before going live** - Check all images display correctly

---

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify images are in `/images` folder
- Clear browser cache (Ctrl+Shift+Delete)
- Check file permissions (should be readable)

**Images too large/slow?**
- Compress images before uploading
- Use online tools like TinyPNG or Squoosh
- Aim for under 500KB per image

**WebP not supported?**
- Very old browsers don't support WebP
- Keep JPG/PNG backups for fallback
- Most modern browsers (Chrome, Firefox, Edge, Safari) support WebP

---

## 📸 Where to Get Professional Photos

### Option 1: Your Own Photos
- Take photos at your events
- Use smartphone camera (ensure good lighting)
- Get customer permission for photos

### Option 2: Stock Photos (Temporary)
- Unsplash.com (free)
- Pexels.com (free)
- Search: "Indian wedding", "shamiyana", "pandal", "event setup"

### Option 3: Professional Photography
- Hire local photographer for a day
- Photograph your best setups
- Create before/after showcases

---

## ✅ Image Checklist

Before going live, verify:
- [ ] All images load correctly
- [ ] Images are optimized (under 500KB each)
- [ ] Alt text is descriptive and includes keywords
- [ ] Mobile view looks good
- [ ] Social sharing preview shows correct image
- [ ] Logo is clear and professional
- [ ] Gallery shows your actual work (not placeholders)

---

**🎉 Your website now has all the images needed to launch!**

*Replace placeholder gallery images with your real event photos for maximum impact.*

---

**Need Help?**
- Image conversion issues? Use online converters
- File too large? Use compression tools
- Questions? Check the main README.md file
