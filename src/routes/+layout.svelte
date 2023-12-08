<script lang="ts">
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
      <li><a href="/geoData">geoData</a></li>
    </ul>
  </div>
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
