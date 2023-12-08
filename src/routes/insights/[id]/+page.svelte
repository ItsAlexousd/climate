<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="bg-secondary p-16">
  <article class="prose">
    <h1>{data.title}</h1>
    <p>{data.longDescription}</p>
  </article>
</div>
