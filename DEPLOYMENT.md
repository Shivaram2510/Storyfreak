# Deployment Guide for Vercel

This project is a full-stack application with React frontend and Express backend. For Vercel deployment, you need to deploy **only the frontend** as a static site.

## Option 1: Deploy from client folder (Recommended)

1. In Vercel dashboard, create a new project
2. Connect your repository
3. **Important**: Set the Root Directory to `client` 
4. Vercel will automatically detect it's a Vite project
5. Use these settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## Option 2: Deploy from root with custom settings

If you must deploy from the repository root:

1. Use the root `vercel.json` configuration (already configured)
2. Set these custom settings in Vercel:
   - **Build Command**: `cd client && npm install && npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `cd client && npm install`

## Troubleshooting

If CSS/styling is not loading:
- Ensure Vercel is building from the correct directory
- Check that the build process completed successfully
- Verify the output directory contains `index.html` and asset files
- Make sure the `client/vite.config.ts` has correct asset paths

## What's included in the static build

The frontend includes:
- Complete React component showcase
- TailwindCSS styling
- Radix UI components
- Theme switching capability
- All interactive demos (input fields, data tables, etc.)

Note: The backend API functionality will not be available in the static deployment, but all UI components and demos will work perfectly.