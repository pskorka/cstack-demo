<script lang="ts">
  import { Splide, SplideSlide } from "svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  const options = {
      arrows: true,
      pagination: false,
      autoWidth: false,
      rewind: true,
      gap: 50
    };
  export let items;
</script>

<Splide {options} >
  {#each items as { slide }}
  <SplideSlide>
    <div class="card" style="width: 18rem;">
      <img src={slide.file.url} class="card-img-top img-fluid" alt={slide.heading} />
      <div class="card-body">
        <h5 class="card-title">{slide.heading}</h5>
      </div>
    </div>
  </SplideSlide>
  {/each}

</Splide>


<style>
  .card{
    margin: 0 auto;
  }
  .card-title {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
</style>
