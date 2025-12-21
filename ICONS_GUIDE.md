# React Icons Guide 🎨

## ✅ What Was Fixed

### 1. **Navbar Overflow** ✅
- Added `max-width: 100vw` to prevent spanning outside screen
- Added `overflow: hidden` to contain content
- Navigation now stays within viewport on all devices

### 2. **CTA Button Hover** ✅
- Changed hover text color to `var(--primary-color)` (dark green)
- Changed hover background to `var(--light-accent)` (cream)
- Now has excellent contrast and readability
- Applied to both homepage and about page CTA buttons

### 3. **Social Media Icons** ✅
- Installed **React Icons** package
- Added Font Awesome icons for Facebook, Instagram, Pinterest
- Icons now render perfectly without needing image files
- Better performance and accessibility

---

## 🎨 Using React Icons

React Icons includes **thousands of free icons** from popular icon libraries:
- **Font Awesome** (fa)
- **Material Design** (md)
- **Bootstrap** (bs)
- **Heroicons** (hi)
- **Feather** (fi)
- And many more!

### How to Use Icons

**1. Import the icons you need:**
```tsx
import { FaHeart, FaLeaf, FaStar } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
```

**2. Use them like regular React components:**
```tsx
<FaHeart />
<FaLeaf size={24} />
<FaStar color="#FFD700" />
```

### Icon Libraries Available

```tsx
// Font Awesome
import { FaHeart, FaUser, FaHome } from 'react-icons/fa'

// Material Design
import { MdEmail, MdPhone, MdHome } from 'react-icons/md'

// Bootstrap Icons
import { BsHeart, BsCart, BsSearch } from 'react-icons/bs'

// Heroicons
import { HiMail, HiUser, HiHome } from 'react-icons/hi'

// Feather Icons
import { FiHeart, FiMail, FiUser } from 'react-icons/fi'
```

---

## 📚 Popular Icons for Your Site

### Sustainability & Nature
```tsx
import { 
  FaLeaf,           // 🍃 Leaf
  FaSeedling,       // 🌱 Seedling
  FaRecycle,        // ♻️ Recycle
  FaTree,           // 🌳 Tree
  FaSun,            // ☀️ Sun
  FaWater           // 💧 Water
} from 'react-icons/fa'
```

### Wellness & Health
```tsx
import { 
  FaHeart,          // ❤️ Heart
  FaHeartbeat,      // 💓 Heartbeat
  FaSpa,            // 🧘 Spa/Meditation
  FaYinYang,        // ☯️ Yin Yang
  FaAppleAlt        // 🍎 Apple/Health
} from 'react-icons/fa'
```

### Social Media
```tsx
import { 
  FaFacebook,       // Facebook
  FaInstagram,      // Instagram
  FaPinterest,      // Pinterest
  FaTwitter,        // Twitter
  FaYoutube,        // YouTube
  FaLinkedin        // LinkedIn
} from 'react-icons/fa'
```

### E-commerce (for Shop page)
```tsx
import { 
  FaShoppingCart,   // 🛒 Shopping Cart
  FaShoppingBag,    // 🛍️ Shopping Bag
  FaHeart,          // ❤️ Wishlist
  FaStar,           // ⭐ Rating
  FaTruck,          // 🚚 Delivery
  FaCreditCard      // 💳 Payment
} from 'react-icons/fa'
```

### UI Elements
```tsx
import { 
  FaSearch,         // 🔍 Search
  FaBars,           // ☰ Menu
  FaTimes,          // ✕ Close
  FaChevronDown,    // ▼ Down Arrow
  FaChevronRight,   // ▶ Right Arrow
  FaCheck           // ✓ Checkmark
} from 'react-icons/fa'
```

---

## 🎨 Styling Icons

### Size
```tsx
<FaHeart size={16} />   // Small
<FaHeart size={24} />   // Medium (default)
<FaHeart size={32} />   // Large
<FaHeart size={48} />   // Extra Large
```

### Color
```tsx
<FaHeart color="red" />
<FaHeart color="#4a5d3f" />
<FaHeart style={{ color: 'var(--primary-color)' }} />
```

### With CSS Classes
```tsx
<FaHeart className={styles.myIcon} />
```

```css
.myIcon {
  color: var(--primary-color);
  font-size: 24px;
  transition: all 0.3s ease;
}

.myIcon:hover {
  color: var(--secondary-color);
  transform: scale(1.1);
}
```

---

## 💡 Example Uses in Your Site

### Adding Icons to Feature Cards

**Homepage Feature Cards:**
```tsx
import { FaHome, FaSpa, FaRecycle } from 'react-icons/fa'

<div className={styles.featureCard}>
  <div className={styles.featureIcon}>
    <FaHome size={48} />
  </div>
  <h3>Self-Sufficiency</h3>
  <p>Learn practical skills...</p>
</div>
```

### Shop Page Product Card
```tsx
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa'

<div className={styles.productCard}>
  <div className={styles.rating}>
    <FaStar color="#FFD700" />
    <FaStar color="#FFD700" />
    <FaStar color="#FFD700" />
  </div>
  <button>
    <FaShoppingCart /> Add to Cart
  </button>
  <button>
    <FaHeart /> Wishlist
  </button>
</div>
```

### Blog Post with Icons
```tsx
import { FaClock, FaUser, FaTag } from 'react-icons/fa'

<div className={styles.postMeta}>
  <span><FaClock /> 5 min read</span>
  <span><FaUser /> Ronin Mom</span>
  <span><FaTag /> Sustainability</span>
</div>
```

### Contact Section
```tsx
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

<div className={styles.contact}>
  <div><FaEnvelope /> info@roninmom.com</div>
  <div><FaPhone /> (555) 123-4567</div>
  <div><FaMapMarkerAlt /> Your Location</div>
</div>
```

---

## 🔍 Finding Icons

**Browse all available icons:**
https://react-icons.github.io/react-icons/

Search by:
- Name (e.g., "heart", "leaf", "cart")
- Library (Font Awesome, Material Design, etc.)
- Category (Social, UI, Nature, etc.)

---

## 📦 What's Installed

Package: `react-icons`  
Size: Lightweight (tree-shakeable - only imports what you use)  
Icons: 20,000+ from 20+ popular icon libraries  
Cost: **100% Free**  

---

## ✨ Your Current Icons

**Footer Social Icons:**
- `<FaFacebook />` - Facebook icon
- `<FaInstagram />` - Instagram icon
- `<FaPinterest />` - Pinterest icon

These are now rendering perfectly in your footer with:
- White color
- Circular backgrounds
- Smooth hover effects
- Proper sizing

---

## 🚀 Next Steps

Consider adding icons to:
1. **Feature cards** - Replace emojis with styled icons
2. **Blog metadata** - Date, author, category icons
3. **Shop page** - Product features, ratings, cart
4. **Contact info** - Email, phone, location
5. **Navigation** - Menu icon for mobile
6. **Buttons** - CTAs with arrow or plus icons

---

**Need help finding a specific icon?** Just ask! I can help you find the perfect icons for any purpose.

Happy icon hunting! 🎨✨



