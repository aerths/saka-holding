import {
    createRouter,
    createWebHistory
} from "vue-router"

import HomePage from "../pages/HomePage.vue"
import CatalogPage from "../pages/CatalogPage.vue"
import CompanyPage from "../pages/CompanyPage.vue"

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomePage},
        { path: '/about', component: CompanyPage},
        { path: '/catalog', component: CatalogPage},
    ]
})
