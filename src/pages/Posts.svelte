<script lang="ts">
  import { Nav, NavItem, NavLink } from "sveltestrap";
  import { navigateTo } from "svelte-router-spa";
  import { CategoriesData, PostsData } from "../stores/store";
  import { get } from "svelte/store";
  import Time from "svelte-time";
  export let currentRoute: any;
  export let params: any;
  let posts: any = get(PostsData);
  let filtred: any = posts;
  let categories: any = get(CategoriesData);
  let activeCategory: number = -1;

  PostsData.subscribe(() => {
    posts = get(PostsData);
    filtred = posts;
  });
  CategoriesData.subscribe(() => {
    categories = get(CategoriesData);
  });

  const filterPosts = (uid: string, idx: number) => (event: any) => {
    activeCategory = idx;
    filtred = posts.filter((post: any) => {
      const hasItem = post.reference.find((category: any) => category.uid === uid);
      if (hasItem) {
        return post;
      }
    });
  };

  const goToPost = (uid: string) => (event: any) => {
    navigateTo(`post/${uid}`);
  };
</script>

<Nav tabs>
  {#each categories as { title, uid }, index}
    <NavItem>
      <NavLink on:click={filterPosts(uid, index)} active={index === activeCategory}>{title}</NavLink>
    </NavItem>
  {/each}
</Nav>

<div class="row row-cols-1 row-cols-md-3 g-4 p-3">
  {#each filtred as { uid, title, short_description, image, updated_at }}
  <div class="col">
    <div class="card h-100" on:click={goToPost(uid)}>
      <div class="post-img" style="background-image: url('{image.url}')"></div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{short_description}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><Time timestamp={updated_at} format="hh:mm / D MMMM YYYY" /></small>
      </div>
    </div>
  </div>
  {/each}

</div>

<style>
  .post-img{
    height: 280px;
    background-size: cover;
    background-position: center center;
  }
</style>
