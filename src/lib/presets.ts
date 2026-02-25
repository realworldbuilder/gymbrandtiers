import { PresetData } from '@/types';

export const PRESETS: Record<string, PresetData> = {
  'fitness-apps': {
    name: 'Fitness Apps',
    products: [
      { id: 'strong', name: 'Strong', image: 'https://logo.clearbit.com/strong.app', url: 'https://strong.app' },
      { id: 'hevy', name: 'Hevy', image: 'https://logo.clearbit.com/hevy.com', url: 'https://hevy.com' },
      { id: 'fitbod', name: 'Fitbod', image: 'https://logo.clearbit.com/fitbod.me', url: 'https://fitbod.me' },
      { id: 'jefit', name: 'JEFIT', image: 'https://logo.clearbit.com/jefit.com', url: 'https://jefit.com' },
      { id: 'setgraph', name: 'Setgraph', image: 'https://www.google.com/s2/favicons?domain=setgraph.com&sz=128', url: 'https://setgraph.com' },
      { id: 'gymgod', name: 'GymGod', image: 'https://www.google.com/s2/favicons?domain=gymgod.com&sz=128', url: 'https://gymgod.com' },
      { id: 'mind2muscle', name: 'Mind2Muscle', image: 'https://logo.clearbit.com/mind2muscle.app', url: 'https://mind2muscle.app' },
      { id: 'myfitnesspal', name: 'MyFitnessPal', image: 'https://logo.clearbit.com/myfitnesspal.com', url: 'https://myfitnesspal.com' },
      { id: 'strava', name: 'Strava', image: 'https://logo.clearbit.com/strava.com', url: 'https://strava.com' },
    ],
    tierPositions: {
      'SS': [{ id: 'mind2muscle', name: 'Mind2Muscle', image: 'https://logo.clearbit.com/mind2muscle.app', url: 'https://mind2muscle.app' }]
    }
  },
  'pre-workouts': {
    name: 'Pre-Workouts',
    products: [
      { id: 'gorilla-mode', name: 'Gorilla Mode', image: 'https://logo.clearbit.com/gorillamind.com', url: 'https://gorillamind.com' },
      { id: 'total-war', name: 'Total War', image: 'https://logo.clearbit.com/redcon1.com', url: 'https://redcon1.com' },
      { id: 'bucked-up', name: 'Bucked Up', image: 'https://logo.clearbit.com/buckedup.com', url: 'https://buckedup.com' },
      { id: 'c4', name: 'C4', image: 'https://logo.clearbit.com/cellucor.com', url: 'https://cellucor.com' },
      { id: 'ghost-legend', name: 'Ghost Legend', image: 'https://logo.clearbit.com/ghostlifestyle.com', url: 'https://ghostlifestyle.com' },
      { id: 'transparent-labs', name: 'Transparent Labs', image: 'https://logo.clearbit.com/transparentlabs.com', url: 'https://transparentlabs.com' },
      { id: 'ryse', name: 'RYSE', image: 'https://logo.clearbit.com/rysesupps.com', url: 'https://rysesupps.com' },
      { id: 'raw-nutrition', name: 'Raw Nutrition', image: 'https://logo.clearbit.com/getrawnutrition.com', url: 'https://getrawnutrition.com' },
    ]
  },
  'gym-apparel': {
    name: 'Gym Apparel',
    products: [
      { id: 'youngla', name: 'YoungLA', image: 'https://logo.clearbit.com/youngla.com', url: 'https://youngla.com' },
      { id: 'darc-sport', name: 'Darc Sport', image: 'https://logo.clearbit.com/darcsport.com', url: 'https://darcsport.com' },
      { id: 'gymshark', name: 'Gymshark', image: 'https://logo.clearbit.com/gymshark.com', url: 'https://gymshark.com' },
      { id: 'dfyne', name: 'DFYNE', image: 'https://logo.clearbit.com/dfyne.com', url: 'https://dfyne.com' },
      { id: 'alphalete', name: 'Alphalete', image: 'https://logo.clearbit.com/alphaleteathletics.com', url: 'https://alphaleteathletics.com' },
      { id: 'raw-gear', name: 'Raw Gear', image: 'https://logo.clearbit.com/rawgear.com', url: 'https://rawgear.com' },
      { id: 'vuori', name: 'Vuori', image: 'https://logo.clearbit.com/vuoriclothing.com', url: 'https://vuoriclothing.com' },
      { id: 'lululemon', name: 'Lululemon', image: 'https://logo.clearbit.com/lululemon.com', url: 'https://lululemon.com' },
    ]
  },
  'gym-chains': {
    name: 'Gym Chains',
    products: [
      { id: 'planet-fitness', name: 'Planet Fitness', image: 'https://logo.clearbit.com/planetfitness.com', url: 'https://planetfitness.com' },
      { id: 'equinox', name: 'Equinox', image: 'https://logo.clearbit.com/equinox.com', url: 'https://equinox.com' },
      { id: 'lifetime', name: 'Life Time', image: 'https://logo.clearbit.com/lifetime.life', url: 'https://lifetime.life' },
      { id: 'golds-gym', name: "Gold's Gym", image: 'https://logo.clearbit.com/goldsgym.com', url: 'https://goldsgym.com' },
      { id: 'la-fitness', name: 'LA Fitness', image: 'https://logo.clearbit.com/lafitness.com', url: 'https://lafitness.com' },
      { id: 'anytime-fitness', name: 'Anytime Fitness', image: 'https://logo.clearbit.com/anytimefitness.com', url: 'https://anytimefitness.com' },
      { id: 'crunch', name: 'Crunch Fitness', image: 'https://logo.clearbit.com/crunch.com', url: 'https://crunch.com' },
      { id: 'orangetheory', name: 'Orangetheory', image: 'https://logo.clearbit.com/orangetheory.com', url: 'https://orangetheory.com' },
      { id: 'crossfit', name: 'CrossFit', image: 'https://logo.clearbit.com/crossfit.com', url: 'https://crossfit.com' },
      { id: 'f45', name: 'F45', image: 'https://logo.clearbit.com/f45training.com', url: 'https://f45training.com' },
      { id: 'barry', name: "Barry's", image: 'https://logo.clearbit.com/barrys.com', url: 'https://barrys.com' },
      { id: 'zoo-culture', name: 'Zoo Culture', image: 'https://www.google.com/s2/favicons?domain=zooculturegym.com&sz=128', url: 'https://zooculturegym.com' },
    ]
  },
  'blank': {
    name: 'Blank',
    products: []
  }
};
