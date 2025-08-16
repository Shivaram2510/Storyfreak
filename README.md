# Storyfreak - Modern React Component Library

A beautifully designed, fully accessible React component library built with TypeScript, TailwindCSS, and Radix UI primitives. Storyfreak showcases modern UI components with comprehensive examples and interactive demonstrations.

![Storyfreak Component Library](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue) ![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-green)

## ✨ Features

- **Modern Component Architecture**: Built with React 18 and TypeScript for type safety
- **Accessible by Design**: All components built on Radix UI primitives ensuring WCAG compliance
- **Beautiful Styling**: TailwindCSS with custom design tokens and CSS variables
- **Dark/Light Theme Support**: Complete theme switching with persistent preferences
- **Interactive Demos**: Live component showcases with real-time state management
- **Responsive Design**: Mobile-first approach with perfect cross-device compatibility
- **Developer Experience**: Hot reload, TypeScript intellisense, and comprehensive tooling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd storyfreak
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` to see the application running.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🏗️ Technical Architecture

### Frontend Architecture

**Framework & Language**
- **React 18** with modern hooks and concurrent features
- **TypeScript 5.6** for comprehensive type safety and developer experience
- **Vite** as the build tool for lightning-fast development and optimized production builds

**Styling & Design System**
- **TailwindCSS 3.4** with custom design tokens and utility-first approach
- **Radix UI** primitives for accessible, unstyled component foundations
- **CSS Custom Properties** for dynamic theming and consistent design tokens
- **Class Variance Authority** for systematic component variant management

**State Management & Data**
- **TanStack Query (React Query)** for server state management and caching
- **Wouter** for lightweight, zero-dependency client-side routing
- **React Hook Form** with Zod validation for type-safe form handling
- **LocalStorage utilities** for persistent user preferences

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for robust API development
- **Custom middleware** for request logging and error handling
- **Session management** with PostgreSQL store support

**Database & ORM**
- **Drizzle ORM** with PostgreSQL for type-safe database operations
- **Migration system** for version-controlled schema changes
- **Zod schemas** for runtime validation and type inference

**Development Environment**
- **Monorepo structure** with shared types between client and server
- **Path aliases** (@/, @shared/) for clean imports
- **HMR integration** between Vite and Express for seamless development

### Component Architecture

**Design System Principles**
- **Atomic design** methodology with composable components
- **Consistent API patterns** across all component interfaces
- **Prop-based customization** with sensible defaults
- **Accessibility-first** approach using ARIA patterns and keyboard navigation

**Key Components**
- **InputField**: Flexible input component with validation states and multiple variants
- **DataTable**: Feature-rich table with sorting, selection, and responsive design
- **Theme Toggle**: Smooth theme switching with system preference detection
- **Navigation**: Responsive header with mobile-optimized menu

## 🎨 Design System

### Color Palette
The design system uses HSL-based color tokens for precise control and easy theme variants:

- **Primary**: Blue-based accent colors for interactive elements
- **Secondary**: Neutral grays for backgrounds and subtle elements  
- **Semantic Colors**: Success, warning, error states with proper contrast ratios
- **Theme Support**: Complete light/dark mode with CSS custom properties

### Typography
- **Font Stack**: Inter for UI text, system fonts as fallbacks
- **Scale**: Modular typography scale with consistent line heights
- **Weight Hierarchy**: Strategic use of font weights for information hierarchy

### Spacing & Layout
- **8px Grid System**: Consistent spacing using Tailwind's spacing scale
- **Container Queries**: Responsive design with mobile-first approach
- **Flexbox & Grid**: Modern layout techniques for complex UIs

## 🛠️ Development Approach

### Code Quality & Standards
- **TypeScript Strict Mode**: Comprehensive type checking and inference
- **ESLint & Prettier**: Automated code formatting and linting
- **Component Documentation**: Props interface documentation with examples
- **Test-Driven Development**: Component testing with realistic user interactions

### Performance Optimizations
- **Code Splitting**: Automatic chunk optimization with Vite
- **Tree Shaking**: Dead code elimination for minimal bundle sizes
- **Asset Optimization**: Image optimization and efficient font loading
- **Caching Strategies**: Intelligent caching with React Query

### Accessibility Standards
- **WCAG 2.1 AA Compliance**: Meeting international accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order

## 📦 Deployment

### Static Deployment (Vercel/Netlify)

For frontend-only deployment, use the client directory:

```bash
# Build the client
cd client
npm install
npm run build
```

**Vercel Configuration:**
- Root Directory: `client`
- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

### Full-Stack Deployment

For complete application deployment:

```bash
# Build both client and server
npm run build
npm start
```

The application serves on port 5000 with the client and API on the same origin.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode requirements
- Add proper prop types and documentation
- Include accessibility considerations
- Test components across different screen sizes
- Maintain consistent code style with Prettier

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **TailwindCSS** for the utility-first CSS framework
- **Vercel** for seamless deployment and hosting
- **React Team** for the amazing framework and ecosystem

---

Built with ❤️ using modern web technologies. Ready to create beautiful, accessible user interfaces.