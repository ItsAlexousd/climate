<script lang="ts">
  import '../app.css';
  import logo from '$lib/assets/logo.png';

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
      case 0: return '#004A89';
      case 1: return '#61915E';
      case 2: return '#ed6034';
      default: return '#004A89';
    }
  }
</script>

<div class="navbar bg-base-100" style="background-color: {secondaryColor}; transition: background-color 2.25s">
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

<div class="scroll-content" style="background-color: {thirdColor}; transition: background-color 2.25s"></div>

<div class="circle" on:click={changeTheme} style="background-color: {fourthColor}; box-shadow: 0 0 100em 4em {fourthColor};"></div>
  
{#if circleVisible}
  <div class="circle-animation" style="border-color: {fourthColor};"></div>
{/if}
<!-- Nouvelle div au-dessus du cercle mais en dessous du reste lors du défilement -->
<div class="above-circle" style="background-color: {secondaryColor}; transition: background-color 2.25s; box-shadow: 0 0 75px 50px var({secondaryColor});"></div>

<footer class="footer footer-center p-10 bg-base-200 text-primary-content" style="background-color: {secondaryColor}">
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
    transition: background-color 1s;
    scroll-behavior: auto;
    background-color: rgb(62, 62, 62);
  }

  .circle {
    width: 30em;
    height: 30em;
    border-radius: 50%;
    position: absolute;
    top: 85%;
    left: 100%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: background-color 1s, box-shadow 1s, transform 1s;
    z-index: 1000; /* Assurez-vous que ce z-index est supérieur à celui de .above-circle */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .circle-animation {
    position: absolute;
    top: 85%;
    left: 100%;
    width: 30em;
    height: 30em;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 35px solid;
    animation: expandCircle 1.5s ease-out forwards;
    opacity: 1;
    z-index: 3000; /* Même z-index que .circle pour être au même niveau */
  }

  .circle:hover {
    transform: translate(-50%, -50%) scale(1.3); /* Agrandit le cercle de 10% */
  }

  .navbar {
    position: fixed;
    z-index: 2500;
  }

  .above-circle {
    height: 100vh; /* Hauteur pour occuper toute la page */
    z-index: 3500; /* z-index inférieur à celui de .circle */
    position: relative;
  }

  .scroll-content {
    height: 85vh; /* Hauteur pour occuper toute la page */
    background-color: rgb(62, 62, 62); /* Couleur de fond pour la visibilité */
    z-index: 1000; /* z-index élevé pour être au-dessus des autres éléments */
    position: relative; /* Nécessaire pour que z-index fonctionne */
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