import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/welcome/welcome.module')
      .then(m => m.WelcomeModule)
  },

  {
    path: 'clients', loadChildren: () => import('./components/clients/clients.module')
      .then(m => m.ClientsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
