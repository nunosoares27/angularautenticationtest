import {Routes} from '@angular/router';

import {homeComponent} from './home/home.component';
import {entrarComponent} from './entrar/entrar';
import { registarComponent} from './registrar/registo';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: homeComponent},
    { path: 'login', component: entrarComponent},
    { path: 'registrar', component: registarComponent},
];
