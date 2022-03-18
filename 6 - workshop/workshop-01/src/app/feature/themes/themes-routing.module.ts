import { RouterModule, Routes } from "@angular/router";
import { ThemesPageComponent } from "./themes-page/themes-page.component";

const routes: Routes = [
    {
        path: 'themes',
        component: ThemesPageComponent,
    }
];

export const ThemesRoutingModule = RouterModule.forChild(routes);