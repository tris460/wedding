import { Routes } from '@angular/router';
import { SaveTheDate } from './components/save-the-date/save-the-date';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'save-the-date', component: SaveTheDate },
    { path: '**', redirectTo: '' }
];
