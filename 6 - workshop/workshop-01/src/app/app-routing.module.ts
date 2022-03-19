import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./feature/pages/home-page/home-page.component";
import { PageNotFoundPageComponent } from "./feature/pages/page-not-found-page/page-not-found-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: '**',
        component: PageNotFoundPageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);