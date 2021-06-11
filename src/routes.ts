import Home from "./pages/Home.svelte";
import Post from "./pages/Post.svelte";
import Posts from "./pages/Posts.svelte";
import Gallery from "./pages/Gallery.svelte"
import Contact from "./pages/Contact.svelte";
import NotFound from "./pages/NotFound.svelte";

const routes = [
    {
        name: '/',
        redirectTo: '/home'
    },
    {
        name: '/home',
        component: Home
    },
    {
        name: '/posts',
        component: Posts
    },
    {
        name: '/post/:id',
        component: Post
    },
    {
        name: '/gallery',
        component: Gallery
    },
    {
        name: '/contact',
        component: Contact
    },
    {
        name: '404',
        path: '404',
        component: NotFound
    }
  ]

export default routes;