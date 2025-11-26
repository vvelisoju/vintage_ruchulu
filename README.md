# Vintage Ruchulu - Online Food Ordering App

## Overview

Vintage Ruchulu is a static React-based online food ordering application for a homemade pickle business based in Warangal, India. The application enables customers to browse authentic non-vegetarian pickles, add items to their cart, and place orders via WhatsApp. The system is designed as a fully static frontend with no backend infrastructure, optimized for mobile-first usage with fast deployment capabilities.

## Features

- **Product Catalog**: Browse authentic non-vegetarian pickles with detailed descriptions, pricing, and spice levels
- **Shopping Cart**: Add/remove items with persistent cart state using localStorage
- **WhatsApp Ordering**: Direct WhatsApp integration for order placement without backend complexity
- **Mobile-First Design**: Fully responsive interface optimized for mobile devices
- **Product Details**: View ingredients, shelf life, and spice indicators
- **Customer Information**: Save customer details locally for repeat orders
- **Order Tracking**: Unique order ID generation for easy order management

## Technology Stack

### Frontend
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR
- **Wouter** for lightweight client-side routing
- **TailwindCSS** for utility-first styling
- **Shadcn/ui** component library with Radix UI primitives

### State Management
- React hooks for local component state
- TanStack Query (React Query) for server state management (prepared for future API integration)
- Custom hooks: `useCart`, `useLocalStorage`, `useToast`

### Data Persistence
- LocalStorage for cart state persistence
- LocalStorage for customer details
- Static product data from TypeScript modules

## Project Structure

```
vintage-ruchulu/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── data/          # Static data (products, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── types/         # TypeScript type definitions
│   │   └── config.ts      # Application configuration
│   └── public/            # Static assets
├── attached_assets/       # Product images and media
├── server/               # Backend (prepared for future use)
└── shared/               # Shared utilities
```

## Key Components

- **Header**: Sticky navigation with cart counter and WhatsApp contact
- **Hero**: Full-width banner with call-to-action
- **ProductGrid**: Responsive grid for product catalog
- **ProductCard**: Individual product display with image, pricing, spice level
- **CartDrawer**: Slide-out panel for cart management
- **CheckoutModal**: Customer details form with WhatsApp integration
- **ProductDetailModal**: Expanded product information view

## Order Processing Flow

1. **Browse Products**: Customers browse the pickle catalog
2. **Add to Cart**: Items are added to the persistent shopping cart
3. **Checkout**: Customer fills in delivery details
4. **WhatsApp Order**: System generates formatted WhatsApp message with:
   - Unique order ID (VR + timestamp)
   - Customer information
   - Order items and quantities
   - Total amount
5. **Direct Communication**: Customer sends order via WhatsApp

## Product Categories

Currently featuring authentic non-vegetarian pickles:
- Gongura Chicken Pickle (200g) - ₹320
- Nellore Fish Pickle (200g) - ₹280
- Prawn Pickle (200g) - ₹380
- Andhra Chicken Pickle (250g) - ₹350
- Mutton Pickle (200g) - ₹420
- Royyala Avakaya Pickle (200g) - ₹400

## Design System

### Color Palette
- **Primary**: Orange/amber tones (hsl(27 96% 45%)) for brand warmth
- **Neutral**: Grays for backgrounds and text hierarchy
- **Destructive**: Red for spice indicators and warnings

### Typography
- **Fonts**: Poppins/Inter
- **Hierarchy**: Hero titles, product names, body text, CTAs

### Visual Elements
- Product images with 1:1 or 4:3 aspect ratios
- Spice level indicators using flame icons (1-5 scale)
- Trust badges: Homemade, Authentic, Location, Fresh
- Rounded corners and hover states for interactive elements

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vintage-ruchulu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Configuration

### Business Information
Update brand details in `client/src/config.ts`:
- Business name and tagline
- Contact information (WhatsApp number)
- Location and description

### Product Management
Products are managed in `client/src/data/products.ts`:
- Add new products with details
- Update pricing and inventory
- Modify product images and descriptions

## Deployment

### Static Hosting
The application is designed for static hosting and can be deployed to:
- Vercel (configuration included)
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Variables
No environment variables required for basic functionality.
Future backend integration may require database connection strings.

## Future Extensibility

The architecture is prepared for:
- **Backend Integration**: Express server with PostgreSQL (Drizzle ORM)
- **Authentication**: User accounts and login system
- **Payment Gateway**: Online payment processing
- **Order Management**: Database-driven order tracking
- **Analytics**: Customer behavior and sales analytics

## Contact

- **Business**: Vintage Ruchulu
- **Location**: Warangal, India
- **WhatsApp**: +91 8500154848
- **Specialty**: Authentic homemade non-vegetarian pickles

## License

MIT License - Feel free to use this template for your own food ordering business.

---

Built with ❤️ for traditional homemade food businesses.
