<script lang="ts">
  import { Styles, Spinner } from "sveltestrap";
  import { Router } from "svelte-router-spa";
  import routes from "./routes";
  import Header from "./components/Header.svelte";
  import getAllData from "./controllers/controller";

  let promise = getAllData();
</script>

<Styles />

{#await promise}
<div class="d-flex justify-content-center align-items-center w-100 h-100">
  <Spinner color="primary" />
</div>
{:then}
  <div class="container">
    <Header />
    <main>
      <Router {routes} />
    </main>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

