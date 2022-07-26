import { Routes } from '@angular/router';
import { MovieCatalogComponent } from '../movie-catalog/movie-catalog.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuardService } from '../_service/authguard.service';

export const Full_ROUTES: Routes = [
    {
        path: 'MovieCatalog',
         canActivate: [AuthGuardService],
        component: MovieCatalogComponent,
    },
    {
        path: 'Profile',
         canActivate: [AuthGuardService],
        component: ProfileComponent,
    }
]