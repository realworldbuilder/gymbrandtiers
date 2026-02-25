# Product Tier List

A modern, drag-and-drop tier list application for ranking products. Built specifically for fitness/gym products but can be used for any type of products.

## Features

- 🎯 **Drag & Drop Tier List** - SS, S, A+, A, B+, B, C tiers + Unranked section
- 🔗 **Add Products via URL** - Paste any product URL to automatically extract name and image
- 🎨 **Clean Dark UI** - Modern M2M theme with dark background
- 💾 **Local Storage** - Rankings persist between sessions
- 📱 **Responsive Design** - Works on desktop and mobile
- 🖼️ **PNG Export** - Export your tier list as an image
- 📋 **Preset Lists** - Fitness Apps, Pre-Workouts, Gym Apparel presets included
- ❌ **Delete Items** - Remove products with click-to-delete

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **@hello-pangea/dnd** (drag and drop)
- **html-to-image** (PNG export)
- **Cheerio** (URL scraping)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

## Deployment

### GitHub Pages
The app is configured for GitHub Pages deployment:

1. Push to a GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. The app will be available at `https://yourusername.github.io/product-tiers/`

### Vercel
Simply connect your repository to Vercel for automatic deployments.

## How to Use

1. **Select a Preset** - Choose from Fitness Apps, Pre-Workouts, Gym Apparel, or start with Blank
2. **Add Products** - Paste product URLs in the input field to automatically add them
3. **Drag to Rank** - Drag products between tiers to rank them
4. **Export** - Click "Export PNG" to save your tier list as an image
5. **Delete** - Hover over products and click the X to remove them

Your rankings are automatically saved and will be restored when you return to the app.

## Preset Data

### Fitness Apps
- Strong, Hevy, Fitbod, JEFIT, Setgraph, GymGod, Mind2Muscle

### Pre-Workouts  
- Gorilla Mode, Total War, Bucked Up, C4, Ghost Legend, Transparent Labs Bulk

### Gym Apparel
- YoungLA, Darc Sport, Gymshark, DFYNE, Alphalete, Raw Gear

## License

MIT