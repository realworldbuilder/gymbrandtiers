# Project Structure

```
product-tiers/
├── .github/workflows/
│   └── deploy.yml                 # GitHub Actions deployment
├── public/
│   ├── .nojekyll                 # GitHub Pages compatibility
│   └── index.html                # Redirect file
├── src/
│   ├── app/
│   │   ├── api/scrape/
│   │   │   └── route.ts          # URL scraping API endpoint
│   │   ├── globals.css           # Global styles and Tailwind
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── AddProductForm.tsx   # URL input form
│   │   ├── PresetSelector.tsx   # Preset category buttons
│   │   ├── ProductItem.tsx      # Individual product component
│   │   ├── TierList.tsx         # Main tier list container
│   │   └── TierRow.tsx          # Individual tier row
│   ├── lib/
│   │   ├── presets.ts           # Preset data (Fitness, Pre-workouts, etc.)
│   │   └── storage.ts           # Local storage utilities
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── .gitignore                   # Git ignore rules
├── README.md                    # Documentation
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── setup-git.sh                # Git initialization script
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Key Features Implemented

✅ **Drag & Drop Tier List** - SS, S, A+, A, B+, B, C + Unranked
✅ **URL Scraping** - Add products by pasting URLs
✅ **PNG Export** - Export tier lists as images
✅ **Preset Lists** - Fitness Apps, Pre-Workouts, Gym Apparel
✅ **Dark M2M Theme** - Clean, modern dark UI
✅ **Local Storage** - Persist rankings between sessions
✅ **Delete on Hover** - Remove products with X button
✅ **Responsive Design** - Works on desktop and mobile
✅ **GitHub Pages Ready** - Automated deployment configured