import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MyexamComponent } from './myexam/myexam.component';
import { NewexamComponent } from './newexam/newexam.component';
import { RegisterComponent } from './registre/registre.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',component:TestComponent,

  },
  {
    path:'login',component:LoginComponent,

  },
  {
    path:'etudiant',component:EtudiantComponent

  },
  {
    path:'matiere',component:MatieresComponent

  },
  {
    path:'newexam',component:NewexamComponent

  },
  {
    path:'registre',component:RegisterComponent

  },
  {
    path:'myexam/:id',component:MyexamComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
