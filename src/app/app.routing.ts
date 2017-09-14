import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsComponent } from './components/pages/subjects/subjects.component';
import { UsersComponent } from './components/pages/users/users.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'subjects',
        component: SubjectsComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);