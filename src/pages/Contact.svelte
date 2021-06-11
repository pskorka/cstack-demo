
<script lang="ts">
  import { get } from "svelte/store";
  import { ContactData } from "../stores/store";
  import PageTitle from "../components/PageTitle.svelte"
  import { Google } from '../config/config'
  import { Loader } from '@googlemaps/js-api-loader';
  import { onMount } from 'svelte';
  export let currentRoute: any;
  export let params: any;
  let contact: any = get(ContactData);
  let map: google.maps.Map;
  $: addresses = contact.addresses

  ContactData.subscribe(() => {
    contact = get(ContactData);
  });

  const loader = new Loader({
    apiKey: Google.API_KEY,
    version: "weekly",
    libraries: ["places"]
  });

  const initMap = () => {
      const mapOptions = {
        zoom: 12,
        center: addresses[0].address.localization,
      };

      map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);
      setPosition(addresses[0].address.localization)
  }

  const setPosition = (localization) => {
    placeMarker(localization, map);
  }

  const placeMarker = (position, map) => {
      var marker = new google.maps.Marker({
          position: position,
          map: map
      });
      map.panTo(position);
  }
 
	onMount(() => {
      loader
        .load()
        .then(() => {
          initMap()
        })
        .catch(err => {
          console.error(err)
        });
	});

</script>

<PageTitle title={ contact.title }/>
  <div class="row">
    <div class="col-4">
    {#each addresses as { address }}
    <div class="card text-center mb-3">
      <div class="card-header">
        <h5 class="card-title">{@html address.header}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{@html address.description}</p>
        <button type="button" class="btn btn-secondary" on:click={setPosition(address.localization)}>Show on map</button>
      </div>
    </div>
    {/each}
    </div>
    <div class="col-8">
      <div id="map"></div>
    </div>
  </div>
<style>
      #map {
        height: 520px;
        width: 100%;
        border: 1px solid #999;
      }
  </style>