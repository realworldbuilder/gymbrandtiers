#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

// Exercise mapping from your list
const exercises = [
  { id: 'cable-fly', search: 'cable fly', alternativeSearch: 'cable chest fly' },
  { id: 'dips', search: 'dips' },
  { id: 'chest-press', search: 'chest press' },
  { id: 'deadlift', search: 'deadlift' },
  { id: 'barbell-row', search: 'barbell row' },
  { id: 'lat-pulldown', search: 'lat pulldown' },
  { id: 'cable-row', search: 'cable row', alternativeSearch: 'seated row' },
  { id: 'pull-ups', search: 'pull ups' },
  { id: 'ohp', search: 'overhead press', alternativeSearch: 'shoulder press' },
  { id: 'lateral-raise', search: 'lateral raise' },
  { id: 'arnold-press', search: 'arnold press' },
  { id: 'reverse-fly', search: 'reverse fly' },
  { id: 'squat', search: 'barbell squat' },
  { id: 'hack-squat', search: 'hack squat' },
  { id: 'rdl', search: 'romanian deadlift' },
  { id: 'lunges', search: 'lunges' },
  { id: 'leg-curl', search: 'leg curl' },
  { id: 'leg-extension', search: 'leg extension' },
  { id: 'calf-raises', search: 'calf raises' },
  { id: 'barbell-curl', search: 'barbell curl' },
  { id: 'hammer-curl', search: 'hammer curl' },
  { id: 'tricep-pushdown', search: 'tricep pushdown' },
  { id: 'skull-crusher', search: 'skull crusher' },
  { id: 'hanging-leg-raise', search: 'hanging leg raise' },
  { id: 'cable-crunch', search: 'cable crunch' },
  { id: 'ab-wheel', search: 'ab wheel' }
];

// Known exercise URLs from the initial search results
const knownUrls = {
  'dips': 'https://www.skimble.com/exercises/2276-bench-dips-how-to-do-exercise', // We can use bench dips
  'chest-press': 'https://www.skimble.com/exercises/975-dumbbell-chest-press-how-to-do-exercise',
  'lat-pulldown': 'https://www.skimble.com/exercises/559-leg-press-how-to-do-exercise', // Will need to search for this
  'pull-ups': 'https://www.skimble.com/exercises/2452-inverted-rows-how-to-do-exercise', // May need alternative
  'ohp': 'https://www.skimble.com/exercises/689-dumbbell-overhead-presses-how-to-do-exercise',
  'lateral-raise': 'https://www.skimble.com/exercises/5848-barbell-shoulder-press-how-to-do-exercise', // Need to search
  'arnold-press': 'https://www.skimble.com/exercises/835-push-presses-how-to-do-exercise', // Need to search
  'reverse-fly': 'https://www.skimble.com/exercises/2336-rotational-shoulder-presses-how-to-do-exercise', // Need to search
  'barbell-curl': 'https://www.skimble.com/exercises/2437-bicep-curls-how-to-do-exercise' // Similar
};

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filename)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file async if it exists
      console.error(`✗ Failed to download ${path.basename(filename)}: ${err.message}`);
      reject(err);
    });
  });
}

// For now, let's just create a manual mapping for exercises we can easily find
console.log('Manual exercise image fetcher');
console.log('You will need to manually find the exercise URLs and image URLs from Skimble');
console.log('');
console.log('Exercises still needed:');
exercises.forEach(ex => {
  console.log(`${ex.id} → search "${ex.search}"${ex.alternativeSearch ? ` or "${ex.alternativeSearch}"` : ''}`);
});