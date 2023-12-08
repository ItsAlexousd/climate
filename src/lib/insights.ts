import blue1 from '$lib/assets/1-blue.png';
import blue2 from '$lib/assets/2-blue.png';
import blue3 from '$lib/assets/3-blue.png';
import green1 from '$lib/assets/1-green.png';
import green2 from '$lib/assets/2-green.png';
import green3 from '$lib/assets/3-green.png';
import text1 from '$lib/assets/1erTexte-removebg-preview.png';
import text2 from '$lib/assets/texte_2-removebg-preview.png';
import text3 from '$lib/assets/texte_3-removebg-preview.png';

export function getInsights() {
  return insights;
}

export function getInsightsByCategory(category: string) {
  return insights.filter((insight) => insight.category === category);
}

export function getInsight(id: string) {
  return insights.find((insight) => insight.id === id);
}

export interface Insight {
  id: string;
  category: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
}

const insights: Insight[] = [
  {
    id: '1',
    category: 'ocean',
    image: blue1,
    title: 'Contaminants Nocifs Menacent la Vie Marine',
    description:
      "La pollution chimique, comprenant des contaminants tels que pesticides, herbicides, engrais, pétrole, produits chimiques industriels, et eaux usées, pose une menace grave à la faune marine. Ces substances toxiques affectent la qualité de l'eau, mettant en danger la santé des écosystèmes marins. Chaque année, des milliers de tonnes de produits chimiques nocifs sont déversés dans les océans, impactant la vie marine et créant des déséquilibres écologiques préoccupants.",
    longDescription:
      "La déforestation constitue une menace majeure pour la biodiversité planétaire. Selon des études récentes, chaque année, environ 15 millions d'hectares de forêts disparaissent, entraînant la perte d'environ 10 000 espèces animales et végétales. La fragmentation des habitats forestiers met en péril la survie de nombreuses espèces, contribuant ainsi à la sixième extinction de masse."
  },
  {
    id: '2',
    category: 'ocean',
    image: blue2,
    title: 'Rythmes Naturels Perturbés par la Pollution Lumineuse',
    description:
      "La pollution lumineuse, résultant de la propagation de la lumière artificielle, perturbe profondément les rythmes circadiens des organismes marins. La migration, la reproduction, la prédation et d'autres comportements naturels sont altérés par l'éclairage artificiel des zones côtières. Cette perturbation a des conséquences néfastes sur la biodiversité marine, entraînant des changements comportementaux qui peuvent affaiblir les populations et déstabiliser les écosystèmes côtiers.",
    longDescription:
      "La déforestation est directement liée aux changements climatiques. Chaque année, la déforestation contribue à libérer environ 1,5 milliard de tonnes de dioxyde de carbone dans l'atmosphère. Ces émissions représentent près de 20% du total mondial. En plus de l'effet de serre, la perte d'arbres réduit la capacité de la planète à absorber le CO2, exacerbant ainsi le réchauffement climatique."
  },
  {
    id: '3',
    category: 'ocean',
    image: blue3,
    title: 'Le Bruit Sous-marin Perturbe la Vie Marine',
    description:
      'La pollution sonore, émanant de navires, de sonars, et de plates-formes pétrolières, crée un environnement acoustique hostile pour la vie marine. Ces bruits perturbent la communication entre les espèces, altèrent les schémas de vie, et peuvent même entraîner des dommages physiologiques. Les mammifères marins, tels que les baleines et les dauphins, sont particulièrement vulnérables, car la pollution sonore peut interférer avec leurs activités essentielles, de la recherche de nourriture à la reproduction. La gestion de la pollution sonore sous-marine devient cruciale pour la préservation des écosystèmes marins sensibles.',
    longDescription:
      "La déforestation altère les services écosystémiques cruciaux fournis par les forêts. Chaque année, près de 13 millions d'hectares de forêts tropicales disparaissent, compromettant la capacité des écosystèmes forestiers à purifier l'air, à réguler les cycles hydrologiques et à protéger les sols. Cette dégradation impacte directement les communautés locales en réduisant les ressources naturelles vitales dont elles dépendent pour leur sécurité alimentaire et leur bien-être."
  },
  {
    id: '4',
    category: 'deforestation',
    image: green1,
    title: 'Biodiversité Menacée',
    description:
      "La déforestation constitue une menace majeure pour la biodiversité planétaire. Selon des études récentes, chaque année, environ 15 millions d'hectares de forêts disparaissent, entraînant la perte d'environ 10 000 espèces animales et végétales. La fragmentation des habitats forestiers met en péril la survie de nombreuses espèces, contribuant ainsi à la sixième extinction de masse.",
    longDescription:
      "La pollution atmosphérique résultant des activités humaines libère d'énormes quantités de gaz à effet de serre dans l'atmosphère. Chaque année, environ 36 milliards de tonnes de dioxyde de carbone (CO2), principalement issus de la combustion de combustibles fossiles, contribuent de manière significative à l'effet de serre. Ces émissions massives intensifient le réchauffement climatique en augmentant la concentration de ces gaz, amplifiant ainsi les changements climatiques rapides."
  },
  {
    id: '5',
    category: 'deforestation',
    image: green2,
    title: 'Conséquences Climatiques Alarmantes',
    description:
      "La déforestation est directement liée aux changements climatiques. Chaque année, la déforestation contribue à libérer environ 1,5 milliard de tonnes de dioxyde de carbone dans l'atmosphère. Ces émissions représentent près de 20% du total mondial. En plus de l'effet de serre, la perte d'arbres réduit la capacité de la planète à absorber le CO2, exacerbant ainsi le réchauffement climatique.",
    longDescription:
      "La pollution atmosphérique, en plus des gaz à effet de serre, engendre la formation de nuages polluants. Les particules fines et les aérosols émis par les activités industrielles et les transports peuvent modifier les modèles climatiques. Ces nuages ont des impacts complexes sur la réflexion et l'absorption de la lumière solaire, entraînant des variations locales et globales des conditions climatiques."
  },
  {
    id: '6',
    category: 'deforestation',
    image: green3,
    title: 'Dégradation des Services Écosystémiques',
    description:
      "La déforestation altère les services écosystémiques cruciaux fournis par les forêts. Chaque année, près de 13 millions d'hectares de forêts tropicales disparaissent, compromettant la capacité des écosystèmes forestiers à purifier l'air, à réguler les cycles hydrologiques et à protéger les sols. Cette dégradation impacte directement les communautés locales en réduisant les ressources naturelles vitales dont elles dépendent pour leur sécurité alimentaire et leur bien-être.",
    longDescription:
      "La nécessité de réduire la pollution, en particulier les émissions de gaz à effet de serre, devient impérative pour atténuer les impacts du réchauffement climatique. Des efforts mondiaux coordonnés visant à adopter des sources d'énergie propres, à accroître l'efficacité énergétique et à promouvoir des pratiques durables sont essentiels. La stabilisation du climat et la préservation de notre planète exigent une action immédiate pour minimiser notre empreinte carbone et construire un avenir plus durable."
  },
  {
    id: '7',
    category: 'globalWarming',
    image: text1,
    title: 'Émissions Massives Aggravant le Réchauffement',
    description:
      "La pollution atmosphérique résultant des activités humaines libère d'énormes quantités de gaz à effet de serre dans l'atmosphère. Chaque année, environ 36 milliards de tonnes de dioxyde de carbone (CO2), principalement issus de la combustion de combustibles fossiles, contribuent de manière significative à l'effet de serre. Ces émissions massives intensifient le réchauffement climatique en augmentant la concentration de ces gaz, amplifiant ainsi les changements climatiques rapides.",
    longDescription:
      "La pollution chimique, comprenant des contaminants tels que pesticides, herbicides, engrais, pétrole, produits chimiques industriels, et eaux usées, pose une menace grave à la faune marine. Ces substances toxiques affectent la qualité de l'eau, mettant en danger la santé des écosystèmes marins. Chaque année, des milliers de tonnes de produits chimiques nocifs sont déversés dans les océans, impactant la vie marine et créant des déséquilibres écologiques préoccupants."
  },
  {
    id: '8',
    category: 'globalWarming',
    image: text2,
    title: 'Polluants Atmosphériques et Modèles Climatiques Altérés',
    description:
      "La pollution atmosphérique, en plus des gaz à effet de serre, engendre la formation de nuages polluants. Les particules fines et les aérosols émis par les activités industrielles et les transports peuvent modifier les modèles climatiques. Ces nuages ont des impacts complexes sur la réflexion et l'absorption de la lumière solaire, entraînant des variations locales et globales des conditions climatiques.",
    longDescription:
      "La pollution lumineuse, résultant de la propagation de la lumière artificielle, perturbe profondément les rythmes circadiens des organismes marins. La migration, la reproduction, la prédation et d'autres comportements naturels sont altérés par l'éclairage artificiel des zones côtières. Cette perturbation a des conséquences néfastes sur la biodiversité marine, entraînant des changements comportementaux qui peuvent affaiblir les populations et déstabiliser les écosystèmes côtiers."
  },
  {
    id: '9',
    category: 'globalWarming',
    image: text3,
    title: 'Réduction Cruciale des Émissions pour Protéger le Climat',
    description:
      "La nécessité de réduire la pollution, en particulier les émissions de gaz à effet de serre, devient impérative pour atténuer les impacts du réchauffement climatique. Des efforts mondiaux coordonnés visant à adopter des sources d'énergie propres, à accroître l'efficacité énergétique et à promouvoir des pratiques durables sont essentiels. La stabilisation du climat et la préservation de notre planète exigent une action immédiate pour minimiser notre empreinte carbone et construire un avenir plus durable.",
    longDescription:
      'La pollution sonore, émanant de navires, de sonars, et de plates-formes pétrolières, crée un environnement acoustique hostile pour la vie marine. Ces bruits perturbent la communication entre les espèces, altèrent les schémas de vie, et peuvent même entraîner des dommages physiologiques. Les mammifères marins, tels que les baleines et les dauphins, sont particulièrement vulnérables, car la pollution sonore peut interférer avec leurs activités essentielles, de la recherche de nourriture à la reproduction. La gestion de la pollution sonore sous-marine devient cruciale pour la préservation des écosystèmes marins sensibles.'
  }
];
