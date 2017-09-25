import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsComponent } from './components/pages/subjects/subjects.component';
import { UsersComponent } from './components/pages/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserDetailGuard } from './user-detail-guard.service';
import { RestrictedAccessComponent } from './components/restricted-access/restricted-access.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';

const appRoutes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        canActivateChild: [UserDetailGuard],
        children: [
            {
                path: 'restricted_access',
                component: RestrictedAccessComponent
            },
            {
                path: '',
                component: NotSelectedComponent
            },
            {
                path: ':id',
                component: UserDetailComponent
            }
        ]
    },
    {
        path: 'subjects',
        component: SubjectsComponent
    },
    {
        path: '**',
        redirectTo: '/users'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);