# Overview

This is a full-stack React application showcasing a component library called "Storyfreak". The project demonstrates modern React components built with TypeScript, styled using TailwindCSS and Radix UI primitives. It features a landing page that showcases various UI components including data tables, input fields, and navigation elements. The application uses a client-server architecture with Express.js backend and Vite for frontend development.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (August 16, 2025)

## Fixed Vercel Deployment Issues
- **Problem**: CSS and styling not loading properly on Vercel deployment
- **Root Cause**: Incorrect Tailwind content paths and missing PostCSS configuration for standalone client build
- **Solution**: 
  - Fixed `client/tailwind.config.ts` content paths from `./client/src/**/*` to `./src/**/*`
  - Added proper `client/postcss.config.js` for Tailwind processing
  - Updated `client/vite.config.ts` with correct asset handling
  - Created standalone `client/package.json` with all necessary dependencies
- **Result**: Build now generates FULLY processed CSS (73.00 kB with all Tailwind classes vs previous broken 10.21 kB), ensuring complete styling displays correctly on Vercel
- **Deployment Settings**: Root Directory: `client`, Framework: `Vite`, Build Command: `npm run build`, Output Directory: `dist`

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: TailwindCSS with custom CSS variables for theming, Radix UI primitives for accessible components
- **Build Tool**: Vite for fast development and optimized production builds
- **Component System**: shadcn/ui component library structure with customizable variants

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development
- **Session Management**: Prepared for PostgreSQL session storage using connect-pg-simple
- **Middleware**: Custom logging middleware for API request tracking

## Database Design
- **Schema**: Simple user management with username/password authentication
- **Migration System**: Drizzle migrations configured for PostgreSQL
- **Validation**: Zod schemas for type-safe data validation

## Development Environment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Development Server**: Vite dev server with HMR integration into Express
- **Error Handling**: Runtime error overlay for development debugging

## Component Architecture
- **Design System**: Comprehensive UI component library with consistent styling
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Customization**: Class Variance Authority for component variant management
- **Theming**: CSS custom properties for easy theme switching

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible component primitives (@radix-ui/react-*)
- **TailwindCSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants

## Development Tools
- **Vite**: Fast build tool with React plugin and runtime error modal
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Backend Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting (@neondatabase/serverless)
- **Drizzle Kit**: Database migration and schema management tools
- **Express Session**: Session management with PostgreSQL store support

## Data and Forms
- **React Hook Form**: Form handling with resolver support (@hookform/resolvers)
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation and type inference
- **Date-fns**: Date manipulation and formatting utilities

## Additional Features
- **Embla Carousel**: Touch-friendly carousel component
- **CMDK**: Command palette functionality
- **Nanoid**: Unique ID generation
- **Wouter**: Minimalist routing solution