<script lang="ts">
  import { get } from "svelte/store";
  import { PostsData, CategoriesData} from "../stores/store";
  import TextEntry from "../components/Article/TextEntry.svelte";
  import QuoteEntry from "../components/Article/QuoteEntry.svelte";
  import ImageEntry from "../components/Article/ImageEntry.svelte";
  import Carousel from "../components/Carousel.svelte";
  export let currentRoute: any;
  export let params: any;

  const getPost = (id)=>{
    return posts.filter((post) => post.uid === id);
  }

  const getCategoryName = (uid)=>{
    let usedCategories = []
    categories.filter(category=>{
      if(category.uid === uid){
        usedCategories.push(category.title)
      }
    })
    return usedCategories
  }

  let uid: string = currentRoute.namedParams.id
  let posts: any = get(PostsData);
  let post: any = getPost(uid)
  let categories: any = get(CategoriesData);
  let sliderItems: any = post[0].slider.slides
  
  PostsData.subscribe(() => {
    posts = get(PostsData);
    post = getPost(currentRoute.namedParams.id)
    sliderItems = post[0].slider.slides
  });

  CategoriesData.subscribe(() => {
    categories = get(CategoriesData);
  });
  
</script>

<section class="section">
  <div>
    <a class="btn btn-outline-secondary mb-3" href="/posts" role="button">
      <i class="bi bi-chevron-left"></i>
    </a>
  </div>
  
  <img class="img-fluid" src={post[0].image.url} alt=""/>
  {#each post[0].reference as item}
    {#if getCategoryName(item.uid) !== 'undefined' }
      <span class="badge rounded-pill bg-secondary my-3 me-2">{getCategoryName(item.uid)}</span>
    {/if }
  {/each}
  <h1 class="mb-5 display-2">{post[0].title}</h1>
  {#each post[0].article as entry}
    {#if entry["text_entry"]}
      <TextEntry {entry} />
    {:else if entry["quote_entry"]}
      <QuoteEntry {entry} />
    {:else if entry["image_entry"]}
      <ImageEntry {entry} />
    {/if}
    <hr />
  {/each}
  {#if post[0].slider.slides.length > 0}
    <Carousel items={sliderItems} />
  {/if}
</section>
