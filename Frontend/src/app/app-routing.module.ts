import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './components/bemvindo/bemvindo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthGuard } from './guards/auth-guards.guard';

const routes: Routes = [
  {path: '', component: BemvindoComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
