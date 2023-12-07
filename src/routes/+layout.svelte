<script lang="ts">
  import '../app.css';
  import logo from '$lib/assets/logo.png';
</script>

<div class="h-screen flex flex-col">
  <div class="navbar bg-base-100">
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

  <div class="flex flex-1 m-6">
    <slot />
  </div>

  <footer class="footer footer-center p-10 bg-base-200 text-primary-content">
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
</div>
