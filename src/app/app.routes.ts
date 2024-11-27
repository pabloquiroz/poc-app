import { Routes } from '@angular/router';
import { PostComponent } from './views/posts.component';
import { PageNotFoundComponent } from './views/page-not-found.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostComponent },
    { path: '**', component: PageNotFoundComponent },
];
