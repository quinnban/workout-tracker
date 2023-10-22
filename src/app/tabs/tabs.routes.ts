import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'workout',
        loadComponent: () =>
          import('../pages/workout/workout.page').then((m) => m.Tab1Page),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('../pages/progress/progress.page').then((m) => m.Tab2Page),
      },
      {
        path: '',
        redirectTo: '/tabs/workout',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/workout',
    pathMatch: 'full',
  },
];
