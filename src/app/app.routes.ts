import { Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { DetalhaEventoComponent } from './components/detalha-evento/detalha-evento.component';
import { IncluiEventoComponent } from './components/inclui-evento/inclui-evento.component';

import { LoginComponent } from './components/login/login.component';
import { authGuard } from './interceptor/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: EventosComponent
    },
    {
        path: 'eventos',
        component: EventosComponent
    },
    {
        path: 'incluirEvento',
        component: IncluiEventoComponent
    },
    {
        path: 'eventos/detalhe/:id',
        component: DetalhaEventoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '', 
        component: EventosComponent, canActivate: [authGuard],
    }
];
