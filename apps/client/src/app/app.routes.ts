import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '', loadChildren: () => import('@vef/website').then((m) => m.WebsiteModule)
    }
];
