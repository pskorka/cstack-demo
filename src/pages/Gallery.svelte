<script lang="ts">
  import { FrameGrid } from "@egjs/svelte-grid";
  import { get } from "svelte/store";
  import { GalleryData } from "../stores/store";
  import PageTitle from "../components/PageTitle.svelte"
  export let currentRoute: any;
  export let params: any;
  let galleryPage: any = get(GalleryData);
  $: galleryItems = galleryPage[0].images;
  
  const gap = 5;
  const defaultDirection = "end";
  const frame = [[1,1,2,2],[3,3,2,2],[4,4,4,5]];
  const rectSize = 0;
  const useFrameFill = true;
</script>

<PageTitle title={ galleryPage[0].title }/>

<FrameGrid
  class="container"
  {defaultDirection}
  {gap}
  {frame}
  {rectSize}
  {useFrameFill}
>

{#each galleryItems as image}
  <div class="item" style="background-image: url('{image.url}')"></div>
{/each }

</FrameGrid>

<style>

  .item {
    position: absolute;
    width: 100px;
    color: white;
    text-align: center;
    background-size: cover;
    background-position: center center;
  }
  
  .item:nth-child(6n + 1) {
    height: 200px;
  }
  
  .item:nth-child(6n + 2) {
    height: 300px;
  }
  
  .item:nth-child(6n + 3) {
    height: 200px;
  }
  
  .item:nth-child(6n + 4) {
    height: 100px;
  }
  
  .item:nth-child(6n + 5) {
    height: 150px;
  }
  
  .item:nth-child(6n + 6) {
    height: 130px;
  }
  
  </style>