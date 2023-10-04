import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ClienteComponent } from './views/cliente/cliente.component';

const routes: Routes = [
  // ... outras rotas existentes ...

  { path: 'cliente', component: ClienteComponent },

  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
