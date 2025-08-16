# Quick Setup Guide

## 🚀 Get Started in 3 Minutes

### 1. Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5000
```

### 2. Deploy to Vercel
```bash
# Option A: Deploy entire frontend (Recommended)
# In Vercel dashboard:
# - Root Directory: client
# - Framework: Vite  
# - Build Command: npm run build
# - Output Directory: dist

# Option B: Build locally first
cd client
npm run build
# Upload dist/ folder to any static host
```

### 3. Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Route pages
│   │   └── lib/           # Utilities
│   ├── dist/              # Built assets
│   └── package.json       # Frontend dependencies
├── server/                # Express backend
├── shared/                # Shared types
└── package.json           # Full-stack dependencies
```

### 4. Key Features
- ✅ **Component Library**: Input fields, data tables, navigation
- ✅ **Theme Support**: Light/dark mode with persistence  
- ✅ **TypeScript**: Full type safety across the stack
- ✅ **Responsive**: Mobile-first design approach
- ✅ **Accessible**: WCAG compliant components

### 5. Common Commands
```bash
npm run dev          # Development server
npm run build        # Production build  
npm run check        # TypeScript checking
cd client && npm run build  # Frontend only build
```

That's it! Your modern React component library is ready to use. 🎉