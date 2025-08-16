# Storybook Setup & Deployment Guide

## ✅ Complete Installation

Storybook has been successfully set up with:

- **Storybook 8.6.14** with TypeScript support
- **CSF3 format** for modern story writing
- **TailwindCSS integration** with proper styling
- **Comprehensive stories** for InputField and DataTable components
- **Theme support** with light/dark mode toggle

## 🚀 Local Development Commands

### Start Storybook Development Server
```bash
cd client
npm run storybook
```
This will start Storybook on `http://localhost:6006`

### Build Storybook for Production
```bash
cd client
npm run build-storybook
```
This creates a `storybook-static/` directory with the static files.

### Preview Built Storybook Locally
```bash
cd client
npx http-server storybook-static -p 8080
```
View at `http://localhost:8080`

## 📚 Available Stories

### InputField Component
- **Basic States**: Default, WithLabel, WithHelperText, ErrorState, Disabled, Loading
- **Interactive Features**: PasswordWithToggle, WithClearButton
- **Variants**: FilledVariant, OutlinedVariant, GhostVariant  
- **Sizes**: SmallSize, MediumSize, LargeSize
- **Showcases**: AllVariantsSizes, InteractiveStates

### DataTable Component
- **Basic Views**: Default, SortableColumns, SelectableRows
- **States**: LoadingState, EmptyState, FullFeatured
- **Data Handling**: LargeDataset, StateShowcase

## 🌐 Vercel Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Storybook setup with comprehensive stories"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Use these settings:
     - **Root Directory**: `client`
     - **Framework Preset**: `Other`
     - **Build Command**: `npm run build-storybook`
     - **Output Directory**: `storybook-static`
     - **Install Command**: `npm install`

3. **Deploy**: Click Deploy and get your public Storybook URL!

### Option 2: Manual Upload

1. **Build locally**:
   ```bash
   cd client
   npm run build-storybook
   ```

2. **Upload `storybook-static/` folder** to any static hosting service.

## 🔧 Configuration Files

### Storybook Configuration
- `client/.storybook/main.ts` - Main Storybook configuration
- `client/.storybook/preview.ts` - Global preview settings and decorators
- `client/vercel-storybook.json` - Vercel deployment configuration

### Story Files
- `client/src/components/InputField.stories.tsx` - InputField component stories
- `client/src/components/DataTable.stories.tsx` - DataTable component stories

## ✨ Features

### Design System Integration
- **TailwindCSS**: All styling loads correctly in Storybook
- **Theme Toggle**: Switch between light and dark modes
- **Component Variants**: Comprehensive coverage of all component states
- **Interactive Controls**: Real-time property editing in Storybook UI

### Documentation
- **Auto-generated docs**: Component props and descriptions
- **Live examples**: Interactive component playground
- **Code examples**: Copy-paste ready component usage

## 🎯 Next Steps After Deployment

1. **Share the Storybook URL** with your team for component review
2. **Use as design system documentation** for consistent component usage
3. **Reference for development** when implementing new features
4. **Component testing** with all states and variants

Your Storybook is production-ready and includes comprehensive documentation for the entire Storyfreak component library! 🎉