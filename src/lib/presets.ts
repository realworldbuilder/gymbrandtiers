import { PresetData } from '@/types';

// Brandfetch CDN icon - uses brandId for reliable icons
const bf = (brandId: string) =>
  `https://cdn.brandfetch.io/${brandId}/w/400/h/400/theme/dark/icon.jpeg`;
const fav = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const PRESETS: Record<string, PresetData> = {
  'fitness-apps': {
    name: 'Fitness Apps',
    products: [
      { id: 'hevy', name: 'Hevy', image: bf('idfZFb9cZa'), url: 'https://hevyapp.com' },
      { id: 'jefit', name: 'Jefit', image: bf('id3a8cyHAM'), url: 'https://jefit.com' },
      { id: 'setgraph', name: 'Setgraph', image: bf('id_WMHZ6eh'), url: 'https://setgraph.app' },
      { id: 'gymgod', name: 'GYMGOD', image: bf('idVs2QeIHO'), url: 'https://thegymgod.com' },
      { id: 'myfitnesspal', name: 'MyFitnessPal', image: bf('id__ZAzBVM'), url: 'https://myfitnesspal.com' },
      { id: 'strava', name: 'Strava', image: bf('idTLzKLmej'), url: 'https://strava.com' },
      { id: 'strong', name: 'Strong', image: fav('strong.app'), url: 'https://strong.app' },
      { id: 'fitbod', name: 'Fitbod', image: fav('fitbod.me'), url: 'https://fitbod.me' },
      { id: 'mind2muscle', name: 'Mind2Muscle', image: fav('mind2muscle.app'), url: 'https://mind2muscle.app' },
    ],
    tierPositions: {
      'SS': [{ id: 'mind2muscle', name: 'Mind2Muscle', image: fav('mind2muscle.app'), url: 'https://mind2muscle.app' }]
    }
  },
  'pre-workouts': {
    name: 'Pre-Workouts',
    products: [
      { id: 'gorilla-mode', name: 'Gorilla Mind', image: bf('idOUW3W0RF'), url: 'https://gorillamind.com' },
      { id: 'total-war', name: 'REDCON1', image: bf('idflo2qGrI'), url: 'https://redcon1.com' },
      { id: 'bucked-up', name: 'Bucked Up', image: bf('id6itHK-SF'), url: 'https://buckedup.com' },
      { id: 'c4', name: 'C4 Energy', image: bf('idO0FO3NCo'), url: 'https://cellucor.com' },
      { id: 'transparent-labs', name: 'Transparent Labs', image: bf('idFod0y-jJ'), url: 'https://transparentlabs.com' },
      { id: 'ryse', name: 'RYSE Supplements', image: bf('idXKaSU2qc'), url: 'https://rysesupplements.com' },
      { id: 'raw-nutrition', name: 'Raw Nutrition', image: bf('idiwyW79a_'), url: 'https://getrawnutrition.com' },
      { id: 'ghost', name: 'Ghost', image: fav('ghostlifestyle.com'), url: 'https://ghostlifestyle.com' },
    ]
  },
  'gym-apparel': {
    name: 'Gym Apparel',
    products: [
      { id: 'youngla', name: 'YoungLA', image: bf('idHdc2miof'), url: 'https://youngla.com' },
      { id: 'darc-sport', name: 'Darc Sport', image: bf('id39XINMHV'), url: 'https://darcsport.com' },
      { id: 'gymshark', name: 'Gymshark', image: bf('idm2qgZM-w'), url: 'https://gymshark.com' },
      { id: 'dfyne', name: 'DFYNE', image: bf('idtjLp_VYk'), url: 'https://dfyne.com' },
      { id: 'alphalete', name: 'Alphalete', image: bf('idt_lIytzb'), url: 'https://alphaleteathletics.com' },
      { id: 'vuori', name: 'Vuori', image: bf('idCoBHZ2C0'), url: 'https://vuoriclothing.com' },
      { id: 'lululemon', name: 'lululemon', image: bf('idPjBRPVWS'), url: 'https://lululemon.com' },
      { id: 'raw-gear', name: 'Raw Gear', image: fav('rawgear.com'), url: 'https://rawgear.com' },
    ]
  },
  'gym-chains': {
    name: 'Gym Chains',
    products: [
      { id: 'planet-fitness', name: 'Planet Fitness', image: bf('id9lBr9vPH'), url: 'https://planetfitness.com' },
      { id: 'lifetime', name: 'Life Time Fitness', image: bf('idE7a2OoRM'), url: 'https://lifetimefitness.com' },
      { id: 'golds-gym', name: "Gold's Gym", image: bf('idKjOyAbnC'), url: 'https://goldsgym.com' },
      { id: 'la-fitness', name: 'LA Fitness', image: bf('idA1E39IGN'), url: 'https://lafitness.com' },
      { id: 'anytime-fitness', name: 'Anytime Fitness', image: bf('idu5CJ3KDC'), url: 'https://anytimefitness.com' },
      { id: 'crunch', name: 'Crunch Fitness', image: bf('idZH4LxygF'), url: 'https://crunch.com' },
      { id: 'orangetheory', name: 'Orangetheory', image: bf('idlSYV9VLj'), url: 'https://orangetheory.com' },
      { id: 'crossfit', name: 'CrossFit', image: bf('idBwNUsVWB'), url: 'https://crossfit.com' },
      { id: 'f45', name: 'F45 Training', image: bf('idLWyl6tyb'), url: 'https://f45training.com' },
      { id: 'barrys', name: "Barry's", image: bf('id2KqtxxKv'), url: 'https://barrysbootcamp.com' },
      { id: 'equinox', name: 'Equinox', image: fav('equinox.com'), url: 'https://equinox.com' },
      { id: 'zoo-culture', name: 'Zoo Culture', image: fav('zooculturegym.com'), url: 'https://zooculturegym.com' },
    ]
  },
  'blank': {
    name: 'Blank',
    products: []
  }
};
