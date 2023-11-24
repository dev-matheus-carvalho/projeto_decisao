import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BemvindoComponent } from './components/bemvindo/bemvindo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guards.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/bemvindo/bemvindo.module')
  .then(m => m.BemVindoModule), canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
