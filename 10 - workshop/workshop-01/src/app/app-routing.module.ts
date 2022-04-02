import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./feature/pages/home-page/home-page.component";
import { PageNotFoundPageComponent } from "./feature/pages/page-not-found-page/page-not-found-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'user',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'themes',
        loadChildren: () => import('./feature/themes/themes.module').then(m => m.ThemesModule)
    },
    {
        path: '**',
        component: PageNotFoundPageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);