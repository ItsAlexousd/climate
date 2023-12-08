<script lang="ts">
  import type { SubmitFunction } from './$types';
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
  import { getInsightsByCategory } from '$lib/insights';

  const submitUpdateTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  const themes = ['ocean', 'deforestation', 'globalWarming'];

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
  {#each getInsightsByCategory(themes[theme]) as { id, image, title, description }}
    <Card {id} {image} {title} {description}></Card>
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
    top: 75%;
    left: 100%;
    width: 35em;
    height: 35em;
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
    height: auto; /* Hauteur pour occuper toute la page */
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
