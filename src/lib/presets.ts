import { PresetData } from '@/types';

const bf = (brandId: string) =>
  `https://cdn.brandfetch.io/${brandId}/w/400/h/400/theme/dark/icon.jpeg`;

export const PRESETS: Record<string, PresetData> = {
  'gym-apparel': {
    name: 'Gym Apparel',
    products: [
      { id: 'gymshark', name: 'Gymshark', image: bf('idm2qgZM-w'), url: 'https://gymshark.com' },
      { id: 'youngla', name: 'YoungLA', image: bf('idHdc2miof'), url: 'https://youngla.com' },
      { id: 'alphalete', name: 'Alphalete', image: bf('idt_lIytzb'), url: 'https://alphaleteathletics.com' },
      { id: 'darc-sport', name: 'Darc Sport', image: bf('id39XINMHV'), url: 'https://darcsport.com' },
      { id: 'oner-active', name: 'Oner Active', image: bf('idOJBfvee0'), url: 'https://oneractive.com' },
      { id: 'nvgtn', name: 'NVGTN', image: bf('idmocyzRPj'), url: 'https://nvgtn.com' },
      { id: 'buffbunny', name: 'Buffbunny', image: bf('idn6F4ZDsM'), url: 'https://buffbunny.com' },
      { id: 'lululemon', name: 'lululemon', image: bf('idPjBRPVWS'), url: 'https://lululemon.com' },
      { id: 'vuori', name: 'Vuori', image: bf('idCoBHZ2C0'), url: 'https://vuoriclothing.com' },
      { id: 'nike', name: 'Nike', image: bf('id_0dwKPKT'), url: 'https://nike.com' },
      { id: 'dfyne', name: 'DFYNE', image: bf('idtjLp_VYk'), url: 'https://dfyne.com' },
      { id: 'fabletics', name: 'Fabletics', image: bf('idwYE-y42K'), url: 'https://fabletics.com' },
      { id: 'alo-yoga', name: 'Alo Yoga', image: bf('ide6WhLtKC'), url: 'https://aloyoga.com' },
      { id: 'nobull', name: 'NOBULL', image: bf('idzM66VVpw'), url: 'https://nobullproject.com' },
      { id: 'under-armour', name: 'Under Armour', image: bf('idu8xi0DFE'), url: 'https://underarmour.com' },
      { id: 'set-active', name: 'SET ACTIVE', image: bf('id_alz5gL_'), url: 'https://setactive.com' },
      { id: 'ptula', name: 'PTULA', image: bf('idySlY1sRS'), url: 'https://ptula.com' },
      { id: 'botee', name: 'Bo+Tee', image: bf('idlntvk1il'), url: 'https://boandtee.com' },
      { id: 'puma', name: 'PUMA', image: bf('idDV9AjI6R'), url: 'https://puma.com' },
      { id: 'adidas', name: 'adidas', image: bf('idyqQWKFVE'), url: 'https://adidas.com' },
    ]
  },
  'supplements': {
    name: 'Supplements',
    products: [
      { id: 'gorilla-mode', name: 'Gorilla Mind', image: bf('idOUW3W0RF'), url: 'https://gorillamind.com' },
      { id: 'total-war', name: 'REDCON1', image: bf('idflo2qGrI'), url: 'https://redcon1.com' },
      { id: 'bucked-up', name: 'Bucked Up', image: bf('id6itHK-SF'), url: 'https://buckedup.com' },
      { id: 'c4', name: 'C4 Energy', image: bf('idO0FO3NCo'), url: 'https://cellucor.com' },
      { id: 'transparent-labs', name: 'Transparent Labs', image: bf('idFod0y-jJ'), url: 'https://transparentlabs.com' },
      { id: 'ryse', name: 'RYSE', image: bf('idXKaSU2qc'), url: 'https://rysesupplements.com' },
      { id: 'raw-nutrition', name: 'Raw Nutrition', image: bf('idiwyW79a_'), url: 'https://getrawnutrition.com' },
      { id: 'bloom', name: 'Bloom Nutrition', image: bf('idZJgxJOSV'), url: 'https://bloomnu.com' },
      { id: 'alani-nu', name: 'Alani Nu', image: bf('idlkk5tKea'), url: 'https://alaninu.com' },
      { id: '1st-phorm', name: '1st Phorm', image: bf('idaER50trU'), url: 'https://1stphorm.com' },
      { id: 'celsius', name: 'CELSIUS', image: bf('id_cHpgHRY'), url: 'https://celsius.com' },
      { id: 'myprotein', name: 'Myprotein', image: bf('id9V60az2k'), url: 'https://myprotein.com' },
      { id: 'optimum-nutrition', name: 'Optimum Nutrition', image: bf('idYBgD5cKw'), url: 'https://optimumnutrition.com' },
      { id: 'muscletech', name: 'MuscleTech', image: bf('idBkPP8ZCu'), url: 'https://muscletech.com' },
      { id: 'dymatize', name: 'Dymatize', image: bf('idVsYyiqH-'), url: 'https://dymatize.com' },
      { id: 'huge-supplements', name: 'Huge Supplements', image: bf('idZiqeYggz'), url: 'https://hugesupplements.com' },
      { id: 'jacked-factory', name: 'Jacked Factory', image: bf('idZs3GOBnp'), url: 'https://jackedfactory.com' },
      { id: 'morphogen', name: 'Morphogen', image: bf('idmrhPG7EI'), url: 'https://morphogennutrition.com' },
      { id: 'muscle-milk', name: 'Muscle Milk', image: bf('idxegzBjAW'), url: 'https://musclemilk.com' },
      { id: 'rule-one', name: 'Rule One', image: bf('idufz-Dt0p'), url: 'https://ruleoneproteins.com' },
    ]
  },
  'gym-chains': {
    name: 'Gym Chains',
    products: [
      { id: 'planet-fitness', name: 'Planet Fitness', image: bf('id9lBr9vPH'), url: 'https://planetfitness.com' },
      { id: 'lifetime', name: 'Life Time', image: bf('idE7a2OoRM'), url: 'https://lifetimefitness.com' },
      { id: 'golds-gym', name: "Gold's Gym", image: bf('idKjOyAbnC'), url: 'https://goldsgym.com' },
      { id: 'la-fitness', name: 'LA Fitness', image: bf('idA1E39IGN'), url: 'https://lafitness.com' },
      { id: 'anytime-fitness', name: 'Anytime Fitness', image: bf('idu5CJ3KDC'), url: 'https://anytimefitness.com' },
      { id: 'crunch', name: 'Crunch Fitness', image: bf('idZH4LxygF'), url: 'https://crunch.com' },
      { id: 'orangetheory', name: 'Orangetheory', image: bf('idlSYV9VLj'), url: 'https://orangetheory.com' },
      { id: 'crossfit', name: 'CrossFit', image: bf('idBwNUsVWB'), url: 'https://crossfit.com' },
      { id: 'f45', name: 'F45 Training', image: bf('idLWyl6tyb'), url: 'https://f45training.com' },
      { id: 'barrys', name: "Barry's", image: bf('id2KqtxxKv'), url: 'https://barrysbootcamp.com' },
    ]
  },
  'fitness-apps': {
    name: 'Apps',
    products: [
      { id: 'hevy', name: 'Hevy', image: bf('idfZFb9cZa'), url: 'https://hevyapp.com' },
      { id: 'jefit', name: 'Jefit', image: bf('id3a8cyHAM'), url: 'https://jefit.com' },
      { id: 'myfitnesspal', name: 'MyFitnessPal', image: bf('id__ZAzBVM'), url: 'https://myfitnesspal.com' },
      { id: 'strava', name: 'Strava', image: bf('idTLzKLmej'), url: 'https://strava.com' },
      { id: 'setgraph', name: 'Setgraph', image: bf('id_WMHZ6eh'), url: 'https://setgraph.app' },
      { id: 'gymgod', name: 'GYMGOD', image: bf('idVs2QeIHO'), url: 'https://thegymgod.com' },
    ]
  },
  'blank': {
    name: 'Blank',
    products: []
  }
};
