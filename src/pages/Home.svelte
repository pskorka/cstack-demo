<script lang="ts">
  import { get } from "svelte/store";
  import { navigateTo } from "svelte-router-spa";
  import { HomeData, PostsData, TranslationsData } from "../stores/store";
  import Carousel from "../components/Carousel.svelte";
  import PageTitle from "../components/PageTitle.svelte"
  export let currentRoute: any;
  export let params: any;
  let homepage: any = get(HomeData);
  let posts: any = get(PostsData);
  let translations: any = get(TranslationsData);
  $: sliderItems = homepage[0].slider.slides
  
  HomeData.subscribe(() => {
    homepage = get(HomeData);
  });
  
  PostsData.subscribe(() => {
    posts = get(PostsData);
  });

  TranslationsData.subscribe(() => {
    translations = get(TranslationsData);
  });

  const goToPost = (uid: string) => (event: any) => {
    navigateTo(`post/${uid}`);
  };

</script>

<PageTitle title={translations.welcome}/>

<div class="row justify-content-evenly">
  <div class="col-4">
    <h2>{translations.popular}</h2>
    <Carousel items={sliderItems} />
  </div>
  <div class="col-8">
    <h2>{translations.latest_articles}</h2>
    <ol class="list-group list-group-numbered">
      {#each posts as { uid, title, short_description, image, updated_at }}
      <li class="list-group-item d-flex justify-content-between align-items-start" on:click={goToPost(uid)}>
        <div class="ms-2 me-auto">
          <div class="fw-bold">{title}</div>
          {short_description}
        </div>
        <span class="badge bg-primary rounded-pill"></span>
      </li>
      {/each}
    </ol>

  </div>
</div>


<style>
.list-group{
  cursor: pointer;
}
</style>
