#!/bin/bash

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Product Tier List web app

- Drag-and-drop tier list with SS, S, A+, A, B+, B, C tiers
- Add products via URL with automatic scraping
- Export as PNG functionality
- Preset lists: Fitness Apps, Pre-Workouts, Gym Apparel
- Dark M2M theme with clean UI
- Local storage for persistence
- Delete items on hover
- GitHub Pages deployment ready"

echo "Git repository initialized!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Add it as remote: git remote add origin <your-repo-url>"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"
echo "5. Your app will be available at: https://yourusername.github.io/product-tiers/"