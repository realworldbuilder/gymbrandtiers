import { PresetData } from '@/types';
import { BASE_PATH } from './config';

const bf = (brandId: string) =>
  `https://cdn.brandfetch.io/${brandId}/w/400/h/400/theme/dark/icon.jpeg`;

// Static IG profile pic from /public/influencers/
const pfp = (handle: string) =>
  `${BASE_PATH}/influencers/${handle}.jpg`;

// Helper function to create initials-based SVG data URI for non-brand items
const initials = (name: string, color: string) => {
  const words = name.split(' ');
  const initialsText = words.length === 1 
    ? name.charAt(0) 
    : words.map(word => word.charAt(0)).join('').substring(0, 2);
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="200" fill="${color}"/>
      <text x="200" y="200" text-anchor="middle" dominant-baseline="central" 
            fill="white" font-family="monospace" font-size="120" font-weight="bold">
        ${initialsText.toUpperCase()}
      </text>
    </svg>
  `)}`; 
};

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
  'energy-drinks': {
    name: 'Energy Drinks',
    products: [
      { id: 'celsius', name: 'CELSIUS', image: bf('id_cHpgHRY'), url: 'https://celsius.com' },
      { id: 'ghost-energy', name: 'Ghost Energy', image: bf('id9q10t_4q'), url: 'https://ghostenergy.com' },
      { id: 'monster', name: 'Monster Energy', image: bf('id7YmyJiwi'), url: 'https://monsterbevcorp.com' },
      { id: 'reign', name: 'Reign', image: bf('idaweN-aAH'), url: 'https://reignbodyfuel.com' },
      { id: 'bang-energy', name: 'Bang Energy', image: bf('idDYqkRqO8'), url: 'https://bangenergy.com' },
      { id: 'alani-nu-energy', name: 'Alani Nu Energy', image: bf('idlkk5tKea'), url: 'https://alaninu.com' },
      { id: '3d-energy', name: '3D Energy', image: bf('idGXcUGRjR'), url: 'https://3denergy.com' },
      { id: 'zoa-energy', name: 'ZOA Energy', image: bf('id9MjBKIxp'), url: 'https://zoaenergy.com' },
      { id: 'prime-energy', name: 'Prime', image: bf('idsl6X_7VY'), url: 'https://drinkprime.com' },
      { id: 'c4-energy', name: 'C4 Energy', image: bf('idO0FO3NCo'), url: 'https://cellucor.com' },
      { id: 'rockstar', name: 'Rockstar', image: bf('idDC70pV-h'), url: 'https://rockstarenergy.com' },
      { id: 'red-bull', name: 'Red Bull', image: bf('iddByYpFsc'), url: 'https://redbull.com' },
      { id: 'ghost-brand', name: 'GHOST Lifestyle', image: bf('idsxS0sH2O'), url: 'https://ghostlifestyle.com' },
      { id: 'bucked-up-energy', name: 'Bucked Up Energy', image: bf('id6itHK-SF'), url: 'https://buckedup.com' },
      { id: 'kill-cliff', name: 'Kill Cliff', image: bf('idq9oJnFPF'), url: 'https://killcliff.com' },
    ]
  },
  'protein-bars': {
    name: 'Protein Bars',
    products: [
      { id: 'quest', name: 'Quest', image: bf('idG7pTDTVO'), url: 'https://questnutrition.com' },
      { id: 'barebells', name: 'Barebells', image: bf('idsAOeP2aS'), url: 'https://barebells.com' },
      { id: 'built-bar', name: 'Built Bar', image: bf('idcdD5QV_A'), url: 'https://builtbar.com' },
      { id: 'rxbar', name: 'RXBar', image: bf('idAe_b0Q2G'), url: 'https://rxbar.com' },
      { id: 'one-bar', name: 'ONE Bar', image: bf('idumq3KE49'), url: 'https://one1brands.com' },
      { id: 'fulfil', name: 'Fulfil', image: bf('idkvlP3h7D'), url: 'https://fulfil.com' },
      { id: 'perfect-bar', name: 'Perfect Bar', image: bf('id1hyAwyWO'), url: 'https://perfectsnacks.com' },
      { id: 'kind', name: 'KIND', image: bf('id-X_uEUtG'), url: 'https://kindsnacks.com' },
      { id: 'clif-bar', name: 'Clif Bar', image: bf('idHMxCJh7A'), url: 'https://clifbar.com' },
      { id: 'think', name: 'Think!', image: bf('idZOJUvbuR'), url: 'https://thinkproducts.com' },
      { id: 'pure-protein', name: 'Pure Protein', image: bf('idIdPu6Lxx'), url: 'https://pureprotein.com' },
      { id: 'fitcrunch', name: 'FitCrunch', image: bf('idPuitwlAK'), url: 'https://fitcrunchbars.com' },
      { id: 'grenade', name: 'Grenade', image: bf('idhJxlkW2k'), url: 'https://grenade.com' },
      { id: 'musclePharm-combat', name: 'MusclePharm Combat', image: bf('id9dGSDIvf'), url: 'https://musclepharm.com' },
      { id: 'powerbar', name: 'PowerBar', image: bf('idiR4WZ284'), url: 'https://powerbar.com' },
    ]
  },
  'gym-influencers': {
    name: 'Gym Influencers',
    products: [
      // Male bodybuilding / physique
      { id: 'cbum', name: '@cbum (Chris Bumstead)', image: pfp('cbum'), url: 'https://instagram.com/cbum' },
      { id: 'sam-sulek', name: '@sam_sulek', image: pfp('sam_sulek'), url: 'https://instagram.com/sam_sulek' },
      { id: 'noel-deyzel', name: '@noeldeyzel_ (Noel Deyzel)', image: pfp('noeldeyzel_'), url: 'https://instagram.com/noeldeyzel_' },
      { id: 'jeff-nippard', name: '@jeffnippard', image: pfp('jeffnippard'), url: 'https://instagram.com/jeffnippard' },
      { id: 'will-tennyson', name: '@willtenny (Will Tennyson)', image: pfp('willtenny'), url: 'https://instagram.com/willtenny' },
      { id: 'jesse-james-west', name: '@jessejameswest', image: pfp('jessejameswest'), url: 'https://instagram.com/jessejameswest' },
      { id: 'alex-eubank', name: '@alexeubank', image: pfp('alexeubank'), url: 'https://instagram.com/alexeubank' },
      { id: 'david-laid', name: '@davidlaid', image: pfp('davidlaid'), url: 'https://instagram.com/davidlaid' },
      { id: 'lexx-little', name: '@lexx_little', image: pfp('lexx_little'), url: 'https://instagram.com/lexx_little' },
      { id: 'nick-walker', name: '@nick_walker39 (Nick Walker)', image: pfp('nick_walker39'), url: 'https://instagram.com/nick_walker39' },
      { id: 'larry-wheels', name: '@larrywheels', image: pfp('larrywheels'), url: 'https://instagram.com/larrywheels' },
      { id: 'mike-ohearn', name: '@mikeohearn', image: pfp('mikeohearn'), url: 'https://instagram.com/mikeohearn' },
      { id: 'ryan-humiston', name: '@ryanhumiston', image: pfp('ryanhumiston'), url: 'https://instagram.com/ryanhumiston' },
      // Female fitness
      { id: 'whitney-simmons', name: '@whitneyysimmons', image: pfp('whitneyysimmons'), url: 'https://instagram.com/whitneyysimmons' },
      { id: 'krissy-cela', name: '@krissycela', image: pfp('krissycela'), url: 'https://instagram.com/krissycela' },
      { id: 'stephanie-buttermore', name: '@stephanie_buttermore', image: pfp('stephanie_buttermore'), url: 'https://instagram.com/stephanie_buttermore' },
      { id: 'natacha-oceane', name: '@natacha.oceane', image: pfp('natacha.oceane'), url: 'https://instagram.com/natacha.oceane' },
      { id: 'robin-gallant', name: '@robingallant', image: pfp('robingallant'), url: 'https://instagram.com/robingallant' },
      // Science / coaching
      { id: 'mike-israetel', name: '@rpstrength (Mike Israetel)', image: pfp('rpstrength'), url: 'https://instagram.com/rpstrength' },
      { id: 'layne-norton', name: '@biolayne (Layne Norton)', image: pfp('biolayne'), url: 'https://instagram.com/biolayne' },
      { id: 'john-meadows', name: '@mountaindog1 (John Meadows)', image: pfp('mountaindog1'), url: 'https://instagram.com/mountaindog1' },
    ]
  },
  'gym-shoes': {
    name: 'Gym Shoes',
    products: [
      { id: 'nike-metcon', name: 'Nike Metcon', image: bf('id_0dwKPKT'), url: 'https://nike.com' },
      { id: 'converse-chuck', name: 'Converse Chuck Taylor', image: bf('idDFGP8t3W'), url: 'https://converse.com' },
      { id: 'adidas-adipower', name: 'adidas Adipower', image: bf('idyqQWKFVE'), url: 'https://adidas.com' },
      { id: 'reebok-nano', name: 'Reebok Nano', image: bf('idpEk3GaAN'), url: 'https://reebok.com' },
      { id: 'nike-romaleos', name: 'Nike Romaleos', image: bf('id_0dwKPKT'), url: 'https://nike.com' },
      { id: 'nobull-trainer', name: 'NOBULL Trainer', image: bf('idzM66VVpw'), url: 'https://nobullproject.com' },
      { id: 'nb-minimus', name: 'New Balance Minimus', image: bf('idjR6yqXUb'), url: 'https://newbalance.com' },
      { id: 'vans-old-skool', name: 'Vans Old Skool', image: bf('id4pDar7o9'), url: 'https://vans.com' },
      { id: 'vivobarefoot', name: 'Vivobarefoot', image: bf('idH284EQ59'), url: 'https://vivobarefoot.com' },
      { id: 'inov8', name: 'Inov-8', image: bf('id3GObTkox'), url: 'https://inov-8.com' },
      { id: 'ua-tribase', name: 'Under Armour TriBase', image: bf('idu8xi0DFE'), url: 'https://underarmour.com' },
      { id: 'puma-fuse', name: 'Puma Fuse', image: bf('idDV9AjI6R'), url: 'https://puma.com' },
      { id: 'tyr', name: 'TYR', image: bf('idndLPT79a'), url: 'https://tyr.com' },
      { id: 'hylete', name: 'Hylete', image: bf('id2sXSEAxX'), url: 'https://hylete.com' },
      { id: 'xero-shoes', name: 'Xero Shoes', image: bf('idfq6RpVLP'), url: 'https://xeroshoes.com' },
    ]
  },
  'exercises': {
    name: 'Exercises',
    products: [
      // Chest (red)
      { id: 'bench-press', name: 'Bench Press', image: initials('BP', '#e74c3c'), url: 'https://training.fit/exercise/benchpress/' },
      { id: 'incline-bench', name: 'Incline Bench Press', image: initials('IB', '#e74c3c'), url: 'https://training.fit/exercise/incline-bench-press/' },
      { id: 'cable-fly', name: 'Cable Fly', image: initials('CF', '#e74c3c'), url: 'https://training.fit/exercise/cable-chest-fly/' },
      { id: 'dips', name: 'Dips', image: initials('DI', '#e74c3c'), url: 'https://training.fit/exercise/dips/' },
      { id: 'chest-press', name: 'Chest Press Machine', image: initials('CP', '#e74c3c'), url: 'https://training.fit/exercise/chest-press/' },
      // Back (blue)
      { id: 'deadlift', name: 'Deadlift', image: initials('DL', '#3498db'), url: 'https://training.fit/exercise/deadlift/' },
      { id: 'barbell-row', name: 'Barbell Row', image: initials('BR', '#3498db'), url: 'https://training.fit/exercise/barbell-row/' },
      { id: 'lat-pulldown', name: 'Lat Pulldown', image: initials('LP', '#3498db'), url: 'https://training.fit/exercise/cable-lat-pulldown/' },
      { id: 'cable-row', name: 'Cable Row', image: initials('CR', '#3498db'), url: 'https://training.fit/exercise/cable-row/' },
      { id: 'pull-ups', name: 'Pull-Ups', image: initials('PU', '#3498db'), url: 'https://training.fit/exercise/pull-ups/' },
      // Shoulders (orange)
      { id: 'ohp', name: 'Overhead Press', image: initials('OP', '#e67e22'), url: 'https://training.fit/exercise/overhead-press/' },
      { id: 'lateral-raise', name: 'Lateral Raise', image: initials('LR', '#e67e22'), url: 'https://training.fit/exercise/lateral-raise/' },
      { id: 'face-pull', name: 'Face Pull', image: initials('FP', '#e67e22'), url: 'https://training.fit/exercise/face-pull/' },
      { id: 'arnold-press', name: 'Arnold Press', image: initials('AP', '#e67e22'), url: 'https://training.fit/exercise/arnold-press/' },
      { id: 'reverse-fly', name: 'Reverse Fly', image: initials('RF', '#e67e22'), url: 'https://training.fit/exercise/band-reverse-fly/' },
      // Legs (green)
      { id: 'squat', name: 'Barbell Squat', image: initials('SQ', '#2ecc71'), url: 'https://training.fit/exercise/barbell-squats/' },
      { id: 'leg-press', name: 'Leg Press', image: initials('LP', '#2ecc71'), url: 'https://training.fit/exercise/leg-press/' },
      { id: 'rdl', name: 'Romanian Deadlift', image: initials('RD', '#2ecc71'), url: 'https://training.fit/exercise/romanian-deadlift/' },
      { id: 'lunges', name: 'Lunges', image: initials('LU', '#2ecc71'), url: 'https://training.fit/exercise/barbell-lunges/' },
      { id: 'leg-curl', name: 'Leg Curl', image: initials('LC', '#2ecc71'), url: 'https://training.fit/exercise/leg-curl/' },
      { id: 'leg-extension', name: 'Leg Extension', image: initials('LE', '#2ecc71'), url: 'https://training.fit/exercise/leg-extension/' },
      { id: 'hip-thrust', name: 'Hip Thrust', image: initials('HT', '#2ecc71'), url: 'https://training.fit/exercise/hip-thrust/' },
      { id: 'calf-raises', name: 'Calf Raises', image: initials('CA', '#2ecc71'), url: 'https://training.fit/exercise/calf-raises/' },
      // Arms (purple)
      { id: 'barbell-curl', name: 'Barbell Curl', image: initials('BC', '#9b59b6'), url: 'https://training.fit/exercise/barbell-curls/' },
      { id: 'hammer-curl', name: 'Hammer Curl', image: initials('HC', '#9b59b6'), url: 'https://training.fit/exercise/hammer-curls/' },
      { id: 'tricep-pushdown', name: 'Tricep Pushdown', image: initials('TP', '#9b59b6'), url: 'https://training.fit/exercise/cable-tricep-pushdowns/' },
      { id: 'skull-crusher', name: 'Skull Crusher', image: initials('SC', '#9b59b6'), url: 'https://training.fit/exercise/barbell-skull-crusher/' },
      // Core (teal)
      { id: 'hanging-leg-raise', name: 'Hanging Leg Raise', image: initials('HR', '#1abc9c'), url: 'https://training.fit/exercise/hanging-leg-raise/' },
      { id: 'cable-crunch', name: 'Cable Crunch', image: initials('CC', '#1abc9c'), url: 'https://training.fit/exercise/cable-crunch/' },
      { id: 'ab-wheel', name: 'Ab Wheel Rollout', image: initials('AW', '#1abc9c'), url: 'https://training.fit/exercise/ab-wheel-rollout/' },
    ]
  },
  'blank': {
    name: 'Blank',
    products: []
  }
};
