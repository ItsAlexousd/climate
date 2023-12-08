<script lang="ts">
  import '../app.css';
  import logo from '$lib/assets/logo.png';
  import { slide,fade } from 'svelte/transition';
  import Blueboxes from './BlueBoxes.svelte';
  import RedBoxes from './RedBoxes.svelte';
  import GreenBoxes from './GreenBoxes.svelte';
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
  export 

  let theme = 0;
  let page = 0;
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

  function accueilLink() {
    page = 0;
  }

  function geoDataLink() {
    page = 1;
  }


  $: primaryColor = getPrimaryColor(theme);
  $: secondaryColor = getSecondaryColor(theme);
  $: thirdColor = getThirdColor(theme);
  $: fourthColor = getFourthColor(theme);

  setContext('primaryColor', primaryColor);
  setContext('secondaryColor', secondaryColor);
  setContext('thirdColor', thirdColor);
  setContext('fourthColor', fourthColor);

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

<div class="scroll-content responsive-text" style="background-color: {thirdColor}; transition: background-color 2.25s">
  <div class="scroll-content-box">
    &emsp; Bienvenue sur notre plateforme dédiée à la préservation de notre planète, où les défis environnementaux cruciaux prennent vie. Explorez avec nous la complexité et l'urgence de trois enjeux majeurs : la déforestation, la pollution des océans et le réchauffement climatique.
    <br><br>&emsp; Découvrez le monde complexe de la déforestation, où la perte d'arbres va au-delà de la surface, touchant nos écosystèmes forestiers et menaçant la biodiversité. Plongez dans les profondeurs des océans, témoins de la variété de pollutions, des contaminants chimiques aux déchets plastiques, mettant en péril la vie marine. Explorez le réchauffement climatique, une menace globale nécessitant des solutions immédiates pour contrer les émissions de gaz à effet de serre et assurer un avenir durable.
    <br><br>&emsp; Chaque visite sur notre site contribue à sensibiliser et à agir en faveur d'un monde où la nature et l'humanité coexistent harmonieusement. Ensemble, nous pouvons faire la différence. Bienvenue dans notre communauté dédiée à la préservation de notre précieux héritage planétaire.
    <br><br>&emsp;Chaque clic sur le soleil ouvre une porte vers un monde d'informations inexplorées. Découvrez un nouvel horizon à chaque clic, où des détails fascinants sur l'environnement vous attendent. Que vous soyez investis dans l'écologie, curieux des impacts sur les océans, ou concerné par le réchauffement climatique.
  </div>
</div>

<div class="circle" on:click={changeTheme} style="background-color: {fourthColor}; box-shadow: 0 0 100em 4em {fourthColor};"></div>
  
{#if circleVisible}
  <div class="circle-animation" style="border-color: {fourthColor};"></div>
{/if}
<!-- Nouvelle div au-dessus du cercle mais en dessous du reste lors du défilement -->
<div class="above-circle" style="background-color: {primaryColor}; transition: background-color 2.25s;">
  {#if theme===0}
  <div class="boxInside" transition:slide={{ duration: 300 }}>
    <Blueboxes />
  </div>
  {:else if theme===1}
  <div class="boxInside" transition:slide={{ duration: 300 }}>
    <GreenBoxes />
  </div>
  {:else if theme===2}
  <div class="boxInside" transition:slide={{ duration: 300 }}>
    <RedBoxes />
  </div>
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    height: 200vh; /* Hauteur totale pour permettre le défilement vertical */
    overflow-x: hidden; /* Cache le défilement horizontal */
    transition: background-color 2s;
    scroll-behavior: auto;
    background-color: rgb(62, 62, 62);
  }

  .boxInside {
    width: 100%;
    height: 100%;
    display: flex; /* Utilise Flexbox pour aligner les enfants */
    justify-content: space-around;
  }

  .circle {
    width: 30%;
    height: 60%;
    border-radius: 50%;
    position: absolute;
    top: 10%;
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
    top: 10%;
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