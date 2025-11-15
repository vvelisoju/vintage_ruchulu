# Vintage Ruchulu - Online Food Ordering App

## Overview

Vintage Ruchulu is a static React-based online food ordering application for a homemade pickle business based in Warangal, India. The application enables customers to browse authentic non-vegetarian pickles, add items to their cart, and place orders via WhatsApp. The system is designed as a fully static frontend with no backend infrastructure, optimized for mobile-first usage with fast deployment capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application)
- Mobile-first responsive design approach

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- TailwindCSS for utility-first styling with custom design tokens
- Custom color system supporting light/dark modes through CSS variables
- Typography system using Poppins/Inter fonts with defined hierarchy (hero, product names, body text, CTAs)

**State Management**
- React hooks for local component state
- TanStack Query (React Query) for server state management and caching (prepared for future API integration)
- Custom hooks pattern:
  - `useCart`: Shopping cart operations with localStorage persistence
  - `useLocalStorage`: Generic localStorage synchronization
  - `useToast`: Toast notification system

**Data Persistence Strategy**
- LocalStorage for cart state persistence across sessions
- LocalStorage for customer details to enable repeat orders
- Static product data imported from TypeScript modules (no database)
- Product images stored in `attached_assets/generated_images/` directory

**Component Architecture**
- Atomic design pattern with reusable UI components
- Key components:
  - **Header**: Sticky navigation with cart counter and WhatsApp contact
  - **Hero**: Full-width banner with call-to-action
  - **ProductGrid**: Responsive grid (1/2/3 columns) for product catalog
  - **ProductCard**: Individual product display with image, pricing, spice level
  - **CartDrawer**: Slide-out panel for cart management
  - **CheckoutModal**: Customer details form with WhatsApp integration
  - **ProductDetailModal**: Expanded product information view

### Order Processing Flow

**WhatsApp Integration (No Backend)**
- Cart checkout generates formatted WhatsApp message with order details
- Customer details form validates and stores information locally
- Order message includes: order ID, customer info, line items, quantities, total
- Direct link to WhatsApp web/app with pre-filled message
- Order ID generation uses prefix "VR" + timestamp for uniqueness

### Design System

**Color Palette**
- Primary: Orange/amber tones (hsl(27 96% 45%)) for brand warmth
- Neutral grays for backgrounds and text hierarchy
- Destructive red for spice indicators and warnings
- Custom CSS variables for theme flexibility

**Spacing & Layout**
- Tailwind spacing scale (2, 4, 6, 8, 12, 16)
- Container padding: 4 (mobile), 8 (desktop)
- Maximum container width: 7xl (80rem)
- Grid breakpoints: sm (640px), md (768px), lg (1024px)

**Visual Elements**
- Product images with 1:1 or 4:3 aspect ratios
- Rounded corners (lg: 9px, md: 6px, sm: 3px)
- Spice level indicators using flame icons (1-5 scale)
- Trust badges: Homemade, Authentic, Location, Fresh
- Hover and active state elevations for interactive elements

### Performance Optimizations

**Static Asset Strategy**
- Product images pre-generated and stored locally
- No runtime image processing
- Vite code splitting and tree shaking for minimal bundle size
- Path aliases for clean imports (@/, @shared/, @assets/)

**Development Features**
- Replit-specific plugins for error overlay and development tools
- Hot module replacement for rapid iteration
- TypeScript strict mode for compile-time error detection

### Future Extensibility

**Prepared Architecture**
- Drizzle ORM configuration for PostgreSQL integration (currently unused)
- Database schema defined for users table (prepared for authentication)
- Express server routes placeholder for REST API endpoints
- Session storage configuration with connect-pg-simple
- React Query setup ready for API calls with error handling

**Scalability Considerations**
- Modular product data structure supports easy category expansion
- Form validation with Zod schemas for consistent data handling
- Separation of concerns: data, components, hooks, utilities
- Configuration centralized in `client/src/config.ts`

## External Dependencies

### Core Runtime Dependencies
- **@tanstack/react-query**: Client-side data fetching and caching
- **react-hook-form**: Form state management with validation
- **zod**: Schema validation for forms and data structures
- **wouter**: Lightweight routing library

### UI Component Libraries
- **@radix-ui/**: Headless UI primitives (dialogs, dropdowns, sheets, tooltips, etc.)
- **class-variance-authority**: CSS-in-JS variant management
- **clsx & tailwind-merge**: Conditional className composition
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel/slider component
- **cmdk**: Command palette component

### Styling
- **tailwindcss**: Utility-first CSS framework
- **postcss & autoprefixer**: CSS processing

### Development Tools
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React integration for Vite
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Backend (Prepared but Inactive)
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM
- **drizzle-kit**: Schema migrations tool
- **@neondatabase/serverless**: Serverless Postgres client
- **connect-pg-simple**: PostgreSQL session store

### Form & Validation
- **@hookform/resolvers**: React Hook Form + Zod integration
- **drizzle-zod**: Drizzle schema to Zod conversion

### Third-Party Services
- **WhatsApp Business API**: Order communication channel (via URL scheme)
- No payment gateway integration (cash/UPI handled offline)
- No email service (communication via WhatsApp only)
- No analytics or tracking services currently integrated