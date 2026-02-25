import { PresetData } from '@/types';

// Brandfetch CDN icon helper
const bf = (brandId: string) =>
  `https://cdn.brandfetch.io/${brandId}/w/128/h/128/fallback/lettermark/icon.webp`;
const fav = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const PRESETS: Record<string, PresetData> = {
  'fitness-apps': {
    name: 'Fitness Apps',
    products: [
      { id: 'strong', name: 'Strong', image: fav('strong.app'), url: 'https://strong.app' },
      { id: 'hevy', name: 'Hevy', image: fav('hevy.com'), url: 'https://hevy.com' },
      { id: 'fitbod', name: 'Fitbod', image: fav('fitbod.me'), url: 'https://fitbod.me' },
      { id: 'jefit', name: 'JEFIT', image: fav('jefit.com'), url: 'https://jefit.com' },
      { id: 'setgraph', name: 'Setgraph', image: fav('setgraph.com'), url: 'https://setgraph.com' },
      { id: 'gymgod', name: 'GymGod', image: fav('gymgod.com'), url: 'https://gymgod.com' },
      { id: 'mind2muscle', name: 'Mind2Muscle', image: fav('mind2muscle.app'), url: 'https://mind2muscle.app' },
      { id: 'myfitnesspal', name: 'MyFitnessPal', image: bf('idT6j3LOjl'), url: 'https://myfitnesspal.com' },
      { id: 'strava', name: 'Strava', image: bf('idP2K9i7jj'), url: 'https://strava.com' },
    ],
    tierPositions: {
      'SS': [{ id: 'mind2muscle', name: 'Mind2Muscle', image: fav('mind2muscle.app'), url: 'https://mind2muscle.app' }]
    }
  },
  'pre-workouts': {
    name: 'Pre-Workouts',
    products: [
      { id: 'gorilla-mode', name: 'Gorilla Mode', image: fav('gorillamind.com'), url: 'https://gorillamind.com' },
      { id: 'total-war', name: 'Total War', image: fav('redcon1.com'), url: 'https://redcon1.com' },
      { id: 'bucked-up', name: 'Bucked Up', image: fav('buckedup.com'), url: 'https://buckedup.com' },
      { id: 'c4', name: 'C4', image: fav('cellucor.com'), url: 'https://cellucor.com' },
      { id: 'ghost-legend', name: 'Ghost Legend', image: fav('ghostlifestyle.com'), url: 'https://ghostlifestyle.com' },
      { id: 'transparent-labs', name: 'Transparent Labs', image: fav('transparentlabs.com'), url: 'https://transparentlabs.com' },
      { id: 'ryse', name: 'RYSE', image: fav('rysesupps.com'), url: 'https://rysesupps.com' },
      { id: 'raw-nutrition', name: 'Raw Nutrition', image: fav('getrawnutrition.com'), url: 'https://getrawnutrition.com' },
    ]
  },
  'gym-apparel': {
    name: 'Gym Apparel',
    products: [
      { id: 'youngla', name: 'YoungLA', image: fav('youngla.com'), url: 'https://youngla.com' },
      { id: 'darc-sport', name: 'Darc Sport', image: fav('darcsport.com'), url: 'https://darcsport.com' },
      { id: 'gymshark', name: 'Gymshark', image: bf('idm2qgZM-w'), url: 'https://gymshark.com' },
      { id: 'dfyne', name: 'DFYNE', image: fav('dfyne.com'), url: 'https://dfyne.com' },
      { id: 'alphalete', name: 'Alphalete', image: fav('alphaleteathletics.com'), url: 'https://alphaleteathletics.com' },
      { id: 'raw-gear', name: 'Raw Gear', image: fav('rawgear.com'), url: 'https://rawgear.com' },
      { id: 'vuori', name: 'Vuori', image: bf('id1pWgqSDQ'), url: 'https://vuoriclothing.com' },
      { id: 'lululemon', name: 'Lululemon', image: bf('idCUBqFYba'), url: 'https://lululemon.com' },
    ]
  },
  'gym-chains': {
    name: 'Gym Chains',
    products: [
      { id: 'planet-fitness', name: 'Planet Fitness', image: bf('id9lBr9vPH'), url: 'https://planetfitness.com' },
      { id: 'equinox', name: 'Equinox', image: bf('idzC2sJNKz'), url: 'https://equinox.com' },
      { id: 'lifetime', name: 'Life Time', image: fav('lifetime.life'), url: 'https://lifetime.life' },
      { id: 'golds-gym', name: "Gold's Gym", image: bf('idSHI6cH5S'), url: 'https://goldsgym.com' },
      { id: 'la-fitness', name: 'LA Fitness', image: fav('lafitness.com'), url: 'https://lafitness.com' },
      { id: 'anytime-fitness', name: 'Anytime Fitness', image: bf('idfKM5EBYG'), url: 'https://anytimefitness.com' },
      { id: 'crunch', name: 'Crunch Fitness', image: bf('iddJi3a_c3'), url: 'https://crunch.com' },
      { id: 'orangetheory', name: 'Orangetheory', image: bf('idQ4HU1gJe'), url: 'https://orangetheory.com' },
      { id: 'crossfit', name: 'CrossFit', image: bf('idj-wJlfOb'), url: 'https://crossfit.com' },
      { id: 'f45', name: 'F45', image: bf('id7LwEt_Ql'), url: 'https://f45training.com' },
      { id: 'barrys', name: "Barry's", image: bf('idq5lIY1S1'), url: 'https://barrys.com' },
      { id: 'zoo-culture', name: 'Zoo Culture', image: fav('zooculturegym.com'), url: 'https://zooculturegym.com' },
    ]
  },
  'blank': {
    name: 'Blank',
    products: []
  }
};
