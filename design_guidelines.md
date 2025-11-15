# Design Guidelines: Vintage Ruchulu Online Food Ordering App

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from Swiggy's food-first visual hierarchy, Etsy's artisanal product presentation, and Instagram's image-centric layouts. This creates an appetizing, trust-building experience for a homemade food brand targeting local customers.

**Core Principle**: Create a warm, inviting digital storefront that makes homemade pickles look irresistible while maintaining simple, fast mobile ordering.

---

## Typography System

**Primary Font**: Inter or Poppins (Google Fonts)
- **Hero/Brand**: 2xl to 4xl, semibold (600)
- **Product Names**: lg to xl, medium (500)
- **Body/Descriptions**: base, regular (400)
- **Prices**: xl, bold (700) - make pricing prominent
- **CTAs**: base to lg, semibold (600)

**Secondary Font**: System default for UI elements
- Use sparingly for labels, metadata, small text

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Container padding: px-4 (mobile), px-8 (desktop)
- Section spacing: py-8 to py-12
- Component gaps: gap-4 to gap-6
- Card padding: p-4 to p-6

**Grid Strategy**:
- **Mobile**: Single column (grid-cols-1)
- **Tablet**: 2 columns for products (grid-cols-2)
- **Desktop**: 3 columns for catalog (grid-cols-3)
- Maximum container width: max-w-7xl

---

## Component Library

### Header
- Sticky navigation with brand name and tagline
- Shopping cart icon with badge counter (top-right)
- WhatsApp contact button (floating on mobile)
- Height: h-16 to h-20

### Product Cards
- **Image**: Aspect ratio 4:3 or 1:1, rounded corners (rounded-lg)
- **Content**: Product name, weight, price stacked vertically
- **Spice indicator**: Small badge with chili icons (🌶️)
- **Add to Cart button**: Full width at card bottom
- **Hover state**: Subtle lift effect (shadow-md to shadow-lg)
- Card structure: Compact, scannable, image-dominant

### Shopping Cart
- **Cart Drawer/Page**: Full product thumbnails with quantity controls
- **Quantity Controls**: Minus/Plus buttons flanking number (w-8 h-8)
- **Item Layout**: Horizontal flex with image-left, details-center, price-right
- **Cart Summary**: Sticky bottom bar on mobile showing subtotal and checkout CTA
- **Empty State**: Friendly illustration with "Start adding delicious pickles!"

### Checkout Modal
- **Form Fields**: Large touch targets (h-12), clear labels above inputs
- **Input spacing**: space-y-4
- **WhatsApp CTA**: Large button (h-14) with WhatsApp green accent and icon
- **Modal**: Full-screen on mobile, centered card on desktop (max-w-md)

### Footer
- **Contact Section**: WhatsApp number prominently displayed with icon
- **Location Badge**: "📍 Warangal" with subtle background
- **Social Icons**: Instagram/Facebook links (if applicable)
- **Copyright**: Small text, low contrast

---

## Page Layouts

### Home/Products Page
1. **Hero Section** (h-48 to h-64):
   - Brand name with tagline overlay on appetizing food background image
   - Subtle gradient overlay for text readability
   - Primary CTA: "Browse Our Pickles" button (blurred background, no hover states)

2. **Trust Banner** (py-4):
   - Row of 3-4 trust indicators: "🏠 Homemade", "✨ Authentic", "📍 Warangal", "🌶️ Fresh"
   - Horizontal scroll on mobile, grid on desktop

3. **Product Catalog** (py-8):
   - Grid layout (responsive columns as specified)
   - Filter/sort options minimal or absent (simple catalog)
   - Products load immediately (no lazy loading complexity for V1)

4. **About Section** (py-12):
   - Split layout: Image of preparation/kitchen (left), story text (right)
   - Desktop: 2-column, Mobile: stacked
   - Builds trust through authenticity narrative

5. **CTA Footer Section** (py-8):
   - Large WhatsApp order button
   - Contact information repeated
   - Social proof if available ("Serving Warangal since...")

---

## Images

**Hero Image**: Wide shot of colorful pickle jars arranged appetizingly, warm natural lighting. Dimensions: 1920x800px, optimized to <150KB.

**Product Images**: High-quality, consistent lighting for each pickle variety. Show jar with visible product, clean white/light background. Square format: 600x600px, optimized to <100KB each.

**About Section Image**: Authentic preparation scene or founder photo to build personal connection. Landscape: 800x600px, <120KB.

**Empty States**: Friendly illustration or simple icon for empty cart state.

---

## Key Design Principles

1. **Image-First**: Every product must have appetizing photography - this is food, visual appeal drives sales
2. **Mobile Gesture-Friendly**: All interactive elements minimum 44x44px touch targets
3. **Fast Loading**: Optimize all images, minimize font weights, use system fonts as fallback
4. **WhatsApp Integration**: Green accent (#25D366) for all WhatsApp-related CTAs, use official icon
5. **Trust Signals**: Prominently display location, "homemade" messaging, contact visibility
6. **Price Clarity**: Prices always bold and prominent, no hidden costs
7. **One-Tap Actions**: Minimize steps from browse to WhatsApp order (< 5 taps)

---

## Animation Philosophy

**Minimal Animations**: Use sparingly for performance
- Cart badge: Quick scale animation on item add (100ms)
- Product cards: Subtle hover lift (200ms ease)
- Modal entry: Simple fade-in (150ms)
- No scroll-triggered animations, no complex transitions

---

## Responsive Breakpoints

- **Mobile**: < 640px (base styles)
- **Tablet**: 640px - 1024px (md:)
- **Desktop**: > 1024px (lg:)

All layouts collapse to single-column below 640px with increased padding and touch-friendly sizing.