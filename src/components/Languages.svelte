<script lang="ts">
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "sveltestrap";
  import { Language } from "../stores/store";
  import getAllData from "../controllers/controller";
  import { get } from "svelte/store";

  export let languages;

  const getLanguageNameByCode = (langs: Array<any>, code: string) => {
    const result = langs.find((item) => {
      if (item.language.code === code) {
        return item.language.name;
      }
    });
    return result.language.name;
  };

  const changeLanguage = (lang: string) => (event: any) => {
    Language.set(lang);
    getAllData();
  };

  $: activeLangName = getLanguageNameByCode(languages, get(Language));
</script>

<Dropdown>
  <DropdownToggle caret>{activeLangName}</DropdownToggle>
  <DropdownMenu>
    {#each languages as { language }}
      <DropdownItem on:click={changeLanguage(language.code)}>{language.name}</DropdownItem>
    {/each}
  </DropdownMenu>
</Dropdown>
