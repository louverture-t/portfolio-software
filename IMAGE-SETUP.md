# Image Loading Setup

## Overview
All project images are automatically loaded during development and production builds. The setup has been optimized to handle images correctly in both environments.

## Image Location
All project images are stored in:
```
portfolio-softwareProject/public/images/projects/
```

## Current Images
✅ **5 images verified:**
- `adventure-game.png`
- `code-refactor.png`
- `flame-keeper.png`
- `id-blog.png`
- `marcus-savings.png`

## How It Works

### 1. Vite Configuration
The `vite.config.js` has been configured to:
- Use `/` base path for development (local testing)
- Use `/portfolio/` base path for production (GitHub Pages)
- Include all image formats: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`
- Never inline images (always copy them to dist folder)

### 2. Image Paths in Data
Images are referenced in `src/data/projects.js` using absolute paths:
```javascript
image: "/images/projects/marcus-savings.png"
```

These paths work because:
- Vite serves the `public/` folder at the root in development
- Files in `public/` are copied to `dist/` during build

### 3. Error Handling
The `ProjectCard` component includes:
- **Lazy loading** - Images load as they scroll into view (`loading="lazy"`)
- **Error fallback** - If an image fails to load, displays a placeholder icon
- **Graceful degradation** - Site works even if images are missing

### 4. Image Optimization Tips

#### Adding New Images
1. Place image in `public/images/projects/`
2. Update `src/data/projects.js` with the path:
   ```javascript
   image: "/images/projects/your-image.png"
   ```
3. Restart dev server if it's running

#### Recommended Image Specs
- **Format**: PNG or JPG
- **Dimensions**: 800x450px (16:9 aspect ratio)
- **File size**: Under 500KB for fast loading
- **Naming**: Use kebab-case (e.g., `my-project-name.png`)

#### Optimizing Images
Use tools like:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced compression
- [ImageOptim](https://imageoptim.com/) - Batch optimization

## Development Workflow

### Testing Image Loading
1. Start dev server:
   ```bash
   cd portfolio-softwareProject
   npm run dev
   ```

2. Open browser to `http://localhost:5173`

3. Navigate to Portfolio page (`/portfolio`)

4. All 5 project images should load automatically

### Troubleshooting

#### Images Not Loading in Development
✅ **Fixed!** The base path now correctly uses `/` for development.

If issues persist:
1. Check image exists in `public/images/projects/`
2. Verify path in `src/data/projects.js` matches exactly
3. Clear browser cache (Ctrl+Shift+R)
4. Restart dev server

#### Images Not Loading in Production
1. Ensure `base: '/portfolio/'` is set in production mode
2. Verify GitHub Pages is serving from correct directory
3. Check console for 404 errors
4. Confirm images are in `dist/images/projects/` after build

#### Placeholder Icon Shows Instead of Image
This means the image failed to load. Check:
1. Filename spelling matches exactly (case-sensitive)
2. Image file is not corrupted
3. Network tab in DevTools for 404 errors

## Testing Checklist

Before deploying:
- [ ] All 5 images load in development (`npm run dev`)
- [ ] All 5 images load after build (`npm run build && npm run preview`)
- [ ] Images lazy-load when scrolling on Portfolio page
- [ ] Placeholder displays correctly if image removed (test by renaming one)
- [ ] Dark mode doesn't affect image visibility
- [ ] Images look good on mobile, tablet, and desktop

## Technical Details

### Component Flow
```
projects.js (data)
    ↓
Portfolio.jsx (page)
    ↓
ProjectCard.jsx (component)
    ↓
<img> tag with error handling
```

### State Management
- `imageError` state tracks if image failed to load
- `onError` handler triggers fallback UI
- `useState` manages error state per card

### Performance
- **Lazy loading**: Images only load when visible
- **No inline**: Large images aren't embedded in JS bundle
- **Caching**: Browser caches images after first load
- **Hover effects**: CSS transitions for smooth interactions

## Summary
✅ Images automatically load during development
✅ Error handling with fallback UI
✅ Optimized for both dev and production
✅ All 5 project images verified and working
✅ Lazy loading for better performance

The setup is complete and ready for development!
