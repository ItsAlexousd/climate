<script lang="ts">
  export let image: string;
  export let title: string;
  export let description: string;
</script>

<div class="card w-1/3 bg-secondary shadow-3xl shadow-secondary">
  <div class="card-body">
    <img class="w-1/2" src={image} alt="Description" />
    <h2 class="card-title pb-4">{title}</h2>
    <p>{description}</p>
  </div>
</div>
