import API from "../services/api"
import {CategoriesData, HeaderData, Language, PostsData, HomeData, GalleryData, ContactData, TranslationsData} from '../stores/store'
import { get } from 'svelte/store'

const generateJSON = (data: any): any => {

        const obj = {};
        for(let i = 0; i < data.length; i++){
           const { key, title } = data[i];
           obj[key] = title;
        };
     return obj
}



const getAllData = () => {
    const lang = get(Language)
    const headerPromise = API.getData("header", lang)
    const postsPromise = API.getData("catalog", lang)
    const homePromise = API.getData("home_page", lang)
    const categoriesPromise = API.getData("categories", lang)
    const galleryPromise = API.getData("gallery_page", lang)
    const contactPromise = API.getData("contact_page", lang)
    const translationsPromise = API.getData("translations", lang)

    return Promise.all([headerPromise, postsPromise, homePromise, categoriesPromise, galleryPromise, contactPromise, translationsPromise]).then((values) => {
        HeaderData.set(values[0][0]);
        PostsData.set(values[1]);
        HomeData.set(values[2]);
        CategoriesData.set(values[3]);
        GalleryData.set(values[4]);
        ContactData.set(values[5][0]);
        TranslationsData.set(generateJSON(values[6]))
    });

}


export default getAllData