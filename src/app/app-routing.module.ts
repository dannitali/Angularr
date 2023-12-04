import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarcontrComponent } from './recuperarcontr/recuperarcontr.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'recuperar', component: RecuperarcontrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
