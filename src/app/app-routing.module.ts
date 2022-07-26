import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { Full_ROUTES } from './_route/fullroute';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{
  path: '',
  component: MasterComponent,
  children: Full_ROUTES,
  // canActivate: [AuthGuard] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
