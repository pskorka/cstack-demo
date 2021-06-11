import {writable} from "svelte/store"

export let Language = writable('en-us')
export let HeaderData = writable([]);
export let PostsData = writable([]);
export let HomeData = writable([]);
export let CategoriesData = writable([]);
export let GalleryData = writable([]);
export let ContactData = writable([]);
export let TranslationsData = writable([]);
