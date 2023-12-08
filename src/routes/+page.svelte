<script lang="ts">
  import type { SubmitFunction } from './$types';
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
  import blue1 from '$lib/assets/1-blue.png';
  import blue2 from '$lib/assets/2-blue.png';
  import blue3 from '$lib/assets/3-blue.png';
  import green1 from '$lib/assets/1-green.png';
  import green2 from '$lib/assets/2-green.png';
  import green3 from '$lib/assets/3-green.png';
  import text1 from '$lib/assets/1erTexte-removebg-preview.png';
  import text2 from '$lib/assets/texte_2-removebg-preview.png';
  import text3 from '$lib/assets/texte_3-removebg-preview.png';

  const submitUpdateTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  const themes = ['theme1', 'theme2', 'theme3'];
  const cards = [
    [
      {
        image: blue1,
        title: 'Contaminants Nocifs Menacent la Vie Marine',
        description:
          "La pollution chimique, comprenant des contaminants tels que pesticides, herbicides, engrais, pétrole, produits chimiques industriels, et eaux usées, pose une menace grave à la faune marine. Ces substances toxiques affectent la qualité de l'eau, mettant en danger la santé des écosystèmes marins. Chaque année, des milliers de tonnes de produits chimiques nocifs sont déversés dans les océans, impactant la vie marine et créant des déséquilibres écologiques préoccupants."
      },
      {
        image: blue2,
        title: 'Rythmes Naturels Perturbés par la Pollution Lumineuse',
        description:
          "La pollution lumineuse, résultant de la propagation de la lumière artificielle, perturbe profondément les rythmes circadiens des organismes marins. La migration, la reproduction, la prédation et d'autres comportements naturels sont altérés par l'éclairage artificiel des zones côtières. Cette perturbation a des conséquences néfastes sur la biodiversité marine, entraînant des changements comportementaux qui peuvent affaiblir les populations et déstabiliser les écosystèmes côtiers."
      },
      {
        image: blue3,
        title: 'Le Bruit Sous-marin Perturbe la Vie Marine',
        description:
          'La pollution sonore, émanant de navires, de sonars, et de plates-formes pétrolières, crée un environnement acoustique hostile pour la vie marine. Ces bruits perturbent la communication entre les espèces, altèrent les schémas de vie, et peuvent même entraîner des dommages physiologiques. Les mammifères marins, tels que les baleines et les dauphins, sont particulièrement vulnérables, car la pollution sonore peut interférer avec leurs activités essentielles, de la recherche de nourriture à la reproduction. La gestion de la pollution sonore sous-marine devient cruciale pour la préservation des écosystèmes marins sensibles.'
      }
    ],
    [
      {
        image: green1,
        title: 'Biodiversité Menacée',
        description:
          "La déforestation constitue une menace majeure pour la biodiversité planétaire. Selon des études récentes, chaque année, environ 15 millions d'hectares de forêts disparaissent, entraînant la perte d'environ 10 000 espèces animales et végétales. La fragmentation des habitats forestiers met en péril la survie de nombreuses espèces, contribuant ainsi à la sixième extinction de masse."
      },
      {
        image: green2,
        title: 'Conséquences Climatiques Alarmantes',
        description:
          "La déforestation est directement liée aux changements climatiques. Chaque année, la déforestation contribue à libérer environ 1,5 milliard de tonnes de dioxyde de carbone dans l'atmosphère. Ces émissions représentent près de 20% du total mondial. En plus de l'effet de serre, la perte d'arbres réduit la capacité de la planète à absorber le CO2, exacerbant ainsi le réchauffement climatique."
      },
      {
        image: green3,
        title: 'Dégradation des Services Écosystémiques',
        description:
          "La déforestation altère les services écosystémiques cruciaux fournis par les forêts. Chaque année, près de 13 millions d'hectares de forêts tropicales disparaissent, compromettant la capacité des écosystèmes forestiers à purifier l'air, à réguler les cycles hydrologiques et à protéger les sols. Cette dégradation impacte directement les communautés locales en réduisant les ressources naturelles vitales dont elles dépendent pour leur sécurité alimentaire et leur bien-être."
      }
    ],
    [
      {
        image: text1,
        title: 'Émissions Massives Aggravant le Réchauffement',
        description:
          "La pollution atmosphérique résultant des activités humaines libère d'énormes quantités de gaz à effet de serre dans l'atmosphère. Chaque année, environ 36 milliards de tonnes de dioxyde de carbone (CO2), principalement issus de la combustion de combustibles fossiles, contribuent de manière significative à l'effet de serre. Ces émissions massives intensifient le réchauffement climatique en augmentant la concentration de ces gaz, amplifiant ainsi les changements climatiques rapides."
      },
      {
        image: text2,
        title: 'Polluants Atmosphériques et Modèles Climatiques Altérés',
        description:
          "La pollution atmosphérique, en plus des gaz à effet de serre, engendre la formation de nuages polluants. Les particules fines et les aérosols émis par les activités industrielles et les transports peuvent modifier les modèles climatiques. Ces nuages ont des impacts complexes sur la réflexion et l'absorption de la lumière solaire, entraînant des variations locales et globales des conditions climatiques."
      },
      {
        image: text3,
        title: 'Réduction Cruciale des Émissions pour Protéger le Climat',
        description:
          "La nécessité de réduire la pollution, en particulier les émissions de gaz à effet de serre, devient impérative pour atténuer les impacts du réchauffement climatique. Des efforts mondiaux coordonnés visant à adopter des sources d'énergie propres, à accroître l'efficacité énergétique et à promouvoir des pratiques durables sont essentiels. La stabilisation du climat et la préservation de notre planète exigent une action immédiate pour minimiser notre empreinte carbone et construire un avenir plus durable."
      }
    ]
  ];

  let theme = 0;
  let circleVisible = false;

  function changeTheme() {
    theme = (theme + 1) % 3;
    triggerCircleAnimation();
  }

  function triggerCircleAnimation() {
    setTimeout(() => {
      circleVisible = true;
      setTimeout(() => {
        circleVisible = false;
      }, 1500);
    }, 500);
  }
</script>

<div class="bg-secondary responsive-text p-16" style="transition: background-color 2.25s">
  <article class="prose">
    <h1>Bienvenue sur notre plateforme</h1>
    <p>
      Elle est dédiée à la sensibilisation environnementale, où les défis cruciaux que pose la
      pollution prennent vie à travers trois prismes distincts : les impacts sur les océans, la
      déforestation et le réchauffement climatique. En explorant ces thèmes, vous plongerez dans la
      complexité des dégâts causés par la pollution.
    </p>
    <p>
      Plongez dans les profondeurs des océans, témoins de diverses pollutions, des contaminants
      chimiques aux déchets plastiques, mettant en péril la vie marine. Découvrez la déforestation,
      où la perte d'arbres transcende la surface, menaçant nos écosystèmes et la biodiversité.
      Explorez le réchauffement climatique, une menace globale nécessitant des solutions immédiates
      pour contrer les émissions de gaz à effet de serre et assurer un avenir durable.
    </p>
    <p>
      Un simple clic sur le soleil vous réserve une surprise qui ne manquera pas de vous apporter de
      nouvelles informations enrichissantes. Ne manquez pas cette opportunité de découvrir des
      connaissances renouvelées et stimulantes.
    </p>
  </article>
</div>

<form method="POST" use:enhance={submitUpdateTheme}>
  <button
    class="circle bg-primary shadow-primary shadow-6xl"
    formaction="/?/setTheme&theme={themes[theme]}&redirectTo={$page.url.pathname}"
    on:click={changeTheme}
  >
  </button>
</form>

{#if circleVisible}
  <div class="circle-animation border-35 border-solid border-primary"></div>
{/if}

<!-- Nouvelle div au-dessus du cercle mais en dessous du reste lors du défilement -->
<div
  class="bg-base-100 p-16 flex space-x-12 above-circle"
  style="transition: background-color 2.25s;"
>
  {#each cards[theme] as { image, title, description }}
    <Card {image} {title} {description}></Card>
  {/each}
</div>

<style>
  .circle {
    width: 35em;
    height: 35em;
    border-radius: 50%;
    position: absolute;
    top: 75%;
    left: 100%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition:
      background-color 2s,
      box-shadow 2s,
      transform 1s;
    z-index: 1000; /* Assurez-vous que ce z-index est supérieur à celui de .above-circle */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .circle-animation {
    position: absolute;
    top: 80%;
    left: 100%;
    width: 60%;
    height: 76%;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      background-color 2s,
      box-shadow 1s;
    animation: expandCircle 1.5s ease-out forwards;
    opacity: 1;
    z-index: 3000; /* Même z-index que .circle pour être au même niveau */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .above-circle {
    padding-top: 5%;
    transition: box-shadow 1s;
    height: 100vh; /* Hauteur pour occuper toute la page */
    z-index: 3500; /* z-index inférieur à celui de .circle */
    position: relative;
    display: flex; /* Utilise Flexbox pour aligner les enfants */
    justify-content: space-around;
  }

  @keyframes expandCircle {
    to {
      width: 400vw;
      height: 400vw;
      opacity: 1;
    }
  }
</style>
