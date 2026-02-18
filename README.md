# Nishesh's Creative Space ✨

A modern, interactive, and creative personal blog website with animations, sound effects, and multiple pages.

## 📁 Files Included

- **index.html** - Home page with creative showcase
- **posts.html** - Blog posts listing with category filters
- **about.html** - About page with social links and skills
- **archive.html** - Inspiring quotes archive (15+ quotes)
- **subscribe.html** - Newsletter subscription page
- **blog.html** - Individual blog post template
- **styles.css** - Complete styling for all pages
- **script.js** - JavaScript for animations and interactivity

## 🚀 Features

### ✨ Interactive Elements
- **Cursor trail effect** - Colorful particles follow your mouse
- **Sound effects** - Click and hover sounds on buttons and cards
- **Smooth scrolling** - Animated page navigation
- **Floating shapes** - Animated background emojis
- **Category filters** - Filter blog posts by topic
- **Reading progress bar** - Track progress on blog posts
- **Back to top button** - Quick navigation to top

### 🎨 Design Features
- Gradient purple/pink theme
- Animated cards with hover effects
- Responsive design for all devices
- Clean, modern UI with emojis
- Professional typography
- Smooth animations throughout

### 📱 Pages

1. **Home (index.html)**
   - Hero section with call-to-action
   - Creative showcase (4 unique features)
   - Skills displayed as interactive orbs
   - Recent highlights
   - Daily quote
   - Newsletter CTA

2. **Posts (posts.html)**
   - 9 blog posts with different categories
   - Category filter buttons
   - Each post has unique icon and styling
   - Featured post section
   - Newsletter CTA

3. **About (about.html)**
   - Profile card with stats
   - Detailed bio
   - Social media links (GitHub, YouTube, ORCID, Google Scholar)
   - Skills & expertise with progress bars
   - Contact CTAs

4. **Archive (archive.html)**
   - 15 inspiring quotes
   - Each quote has an avatar/emoji
   - Author name and title
   - Hover effects
   - Submit quote section

5. **Subscribe (subscribe.html)**
   - Benefits grid
   - Subscription form with checkboxes
   - Social proof
   - Testimonials from readers
   - Professional design

6. **Blog (blog.html)**
   - Template for individual blog posts
   - Back button
   - Author bio
   - Share buttons
   - Related posts
   - Newsletter CTA

## 🛠️ How to Use

### Basic Setup
1. Extract all files to a folder
2. Open `index.html` in your web browser
3. Navigate through pages using the menu

### Customization

#### Update Content
- Open any `.html` file in a text editor
- Find the content you want to change
- Replace with your own text
- Save and refresh browser

#### Add Your Photo
Replace the emoji placeholders with your actual photos:
```html
<!-- Find this in about.html -->
<div class="profile-placeholder">
    <span class="profile-emoji">👨‍💼</span>
</div>

<!-- Replace with -->
<img src="your-photo.jpg" alt="Your Name" style="width: 100%; border-radius: 50%;">
```

#### Add New Blog Posts
1. Open `posts.html`
2. Copy an existing post card structure
3. Change the title, description, icon, and category
4. Update the link to `blog.html?post=your-post-name`

#### Update Social Links
In `about.html`, find the social-grid section:
```html
<a href="YOUR_LINK_HERE" target="_blank" class="social-card">
```

#### Change Colors
In `styles.css`, modify the color variables:
```css
:root {
    --purple: #8b5cf6;
    --pink: #ec4899;
    /* Change these to your preferred colors */
}
```

## 📝 Adding Content to Blog Posts

When you're ready to add actual content to blog posts:

1. Create a new `.html` file for each post (e.g., `psychology-entrepreneurs.html`)
2. Copy the structure from `blog.html`
3. Replace the title, content, and metadata
4. Update links in `posts.html` to point to your new files

## 🎯 Next Steps

### To Make It Live:
1. **Get hosting** - Use services like:
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)
   - Traditional web hosting

2. **Upload files** - Upload all HTML, CSS, and JS files

3. **Connect domain** (optional)
   - Purchase domain (e.g., nisheshthapa.com)
   - Connect to your hosting

### To Add More Features:
- Connect a real newsletter service (Mailchimp, ConvertKit)
- Add a contact form backend
- Integrate analytics (Google Analytics)
- Add a blog CMS (like WordPress or headless CMS)
- Connect to a database for dynamic content

## 💡 Tips

- Test on different browsers (Chrome, Firefox, Safari)
- Check mobile responsiveness
- Optimize images before uploading (compress for web)
- Keep file names lowercase and use hyphens
- Backup your files regularly

## 🐛 Troubleshooting

**Styles not loading?**
- Make sure `styles.css` is in the same folder as HTML files
- Check file names match exactly (case-sensitive)

**JavaScript not working?**
- Ensure `script.js` is in the same folder
- Check browser console for errors (F12)

**Pages not linking correctly?**
- Verify all filenames match the links
- Use relative paths (e.g., `about.html` not `/about.html`)

## 📧 Support

For questions or issues:
- Email: contact@nisheshthapa.com.np
- GitHub: https://github.com/nisheshthapa

## 🎉 Credits

Created with ❤️ by Nishesh Thapa
Designed for creativity, built for impact!

---

**Version 1.0** - February 2026
