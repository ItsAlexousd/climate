<script lang="ts">
  import '../app.css';
  import logo from '$lib/assets/logo.png';
  import Blueboxes from './BlueBoxes.svelte';
  import RedBoxes from './RedBoxes.svelte';
  import GreenBoxes from './GreenBoxes.svelte';
  export 

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

  $: primaryColor = getPrimaryColor(theme);
  $: secondaryColor = getSecondaryColor(theme);
  $: thirdColor = getThirdColor(theme);
  $: fourthColor = getFourthColor(theme);

  function getPrimaryColor(theme) {
    switch (theme) {
      case 0: return '#000C17';
      case 1: return '#010D00';
      case 2: return '#2E0D0D';
      default: return '#000C17';
    }
  }
  function getSecondaryColor(theme) {
    switch (theme) {
      case 0: return '#01182B';
      case 1: return '#071C05';
      case 2: return '#621919';
      default: return '#01182B';
    }
  }
  function getThirdColor(theme) {
    switch (theme) {
      case 0: return '#003562';
      case 1: return '#255522';
      case 2: return '#802525';
      default: return '#003562';
    }
  }
  function getFourthColor(theme) {
    switch (theme) {
      case 0: return '#0082f2';
      case 1: return '#61915E';
      case 2: return '#ed6034';
      default: return '#0082f2';
    }
  }
</script>

<div class="navbar bg-base-100" style="background-color: {primaryColor}; transition: background-color 2.25s">
  <div class="flex-1">
    <a class="btn btn-link" href="/">
      <img src={logo} alt="Climate Logo" width="150" />
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Agir</a></li>
    </ul>
  </div>
</div>

<div class="scroll-content responsive-text" style="background-color: {thirdColor}; transition: background-color 2.25s">
  <div class="scroll-content-box">
    &emsp; Bienvenue sur notre plateforme dédiée à la préservation de notre planète, où les défis environnementaux cruciaux prennent vie. Explorez avec nous la complexité et l'urgence de trois enjeux majeurs : la déforestation, la pollution des océans et le réchauffement climatique.
    <br><br>&emsp; Découvrez le monde complexe de la déforestation, où la perte d'arbres va au-delà de la surface, touchant nos écosystèmes forestiers et menaçant la biodiversité. Plongez dans les profondeurs des océans, témoins de la variété de pollutions, des contaminants chimiques aux déchets plastiques, mettant en péril la vie marine. Explorez le réchauffement climatique, une menace globale nécessitant des solutions immédiates pour contrer les émissions de gaz à effet de serre et assurer un avenir durable.
    <br><br>&emsp; Chaque visite sur notre site contribue à sensibiliser et à agir en faveur d'un monde où la nature et l'humanité coexistent harmonieusement. Ensemble, nous pouvons faire la différence. Bienvenue dans notre communauté dédiée à la préservation de notre précieux héritage planétaire.
    <br><br>&emsp;Chaque clic sur le soleil ouvre une porte vers un monde d'informations inexplorées. Découvrez un nouvel horizon à chaque clic, où des détails fascinants sur l'environnement vous attendent. Que vous soyez passionné par la déforestation, curieux des mystères des océans, ou concerné par le réchauffement climatique
  </div>
</div>

<div class="circle" on:click={changeTheme} style="background-color: {fourthColor}; box-shadow: 0 0 100em 4em {fourthColor};"></div>
  
{#if circleVisible}
  <div class="circle-animation" style="border-color: {fourthColor};"></div>
{/if}
<!-- Nouvelle div au-dessus du cercle mais en dessous du reste lors du défilement -->
<div class="above-circle" style="background-color: {primaryColor}; transition: background-color 2.25s;">
  {#if theme===0}
  <Blueboxes />
  {:else if theme===1}
  <GreenBoxes />
  {:else if theme===2}
  <RedBoxes />
  {/if}
</div>

<footer class="footer footer-center p-10 bg-base-200 text-primary-content" style="background-color: {primaryColor}; transition: background-color 2.25s;">
  <aside>
    <img src={logo} alt="Climate Logo" width="150" />
    <p class="font-bold">
      4A FIESTA PROD <br />La Nuit de l'Info (2023)
    </p>
    <p>
      Sujet proposé par <a
        class="link link-hover"
        href="https://reseauactionclimat.org/association/"
        target="_blank">Réseau Action Climat</a
      >
    </p>
  </aside>
</footer>

<style>
  :global(body) {
    margin: 0;
    height: 200vh; /* Hauteur totale pour permettre le défilement vertical */
    overflow-x: hidden; /* Cache le défilement horizontal */
    transition: background-color 2s;
    scroll-behavior: auto;
    background-color: rgb(62, 62, 62);
  }

  .circle {
    width: 30%;
    height: 60%;
    border-radius: 50%;
    position: absolute;
    top: 95%;
    left: 100%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: background-color 2s, box-shadow 2s, transform 1s;
    z-index: 1000; /* Assurez-vous que ce z-index est supérieur à celui de .above-circle */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .circle-animation {
    position: absolute;
    top: 95%;
    left: 100%;
    width: 30%;
    height: 76%;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 35px solid;
    transition: background-color 2s, box-shadow 1s;
    animation: expandCircle 1.5s ease-out forwards;
    opacity: 1;
    z-index: 3000; /* Même z-index que .circle pour être au même niveau */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .navbar {
    position: fixed;
    z-index: 5000;
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

  .scroll-content {
    padding-top:9em;
    padding-left:1em;
    transition: box-shadow 1s;
    height: 100vh; /* Hauteur pour occuper toute la page */
    background-color: rgb(62, 62, 62); /* Couleur de fond pour la visibilité */
    z-index: 1000; /* z-index élevé pour être au-dessus des autres éléments */
    position: relative; /* Nécessaire pour que z-index fonctionne */
  }

  .scroll-content-box {
    font-size: 2vm;
    text-align: justify;
    width:60%;
  }

  .footer {
    position: relative; /* Fixe le footer en bas de la fenêtre du navigateur */
    bottom: 0; /* Positionne le footer en bas */
    width: 100%;
    z-index: 5000;
  }

  @keyframes expandCircle {
    to {
      width: 400vw;
      height: 400vw;
      opacity: 1;
    }
  }
</style>