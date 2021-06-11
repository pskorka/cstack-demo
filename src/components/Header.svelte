<script lang="ts">
  import { HeaderData } from "../stores/store";
  import { get } from "svelte/store";

  import Languages from "../components/Languages.svelte";

  let headerData: any = get(HeaderData);

  HeaderData.subscribe(() => {
    headerData = get(HeaderData);
  });
</script>

<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
    <img class="logo" src={headerData.logo_image.url} alt="" />
  </a>

  <ul class="nav nav-pills">
    {#each headerData.navigation as { item }}
      {#if !item.disabled}
        <li class="nav-item"><a href={`/${item.action}`} class="nav-link">{item.link_text}</a></li>
      {/if}
    {/each}
    <li>
      <Languages languages={headerData.lang} />
    </li>
  </ul>
</header>

<style>
  .logo {
    max-height: 40px;
  }
</style>
