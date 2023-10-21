import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then((m)=>{
      console.log('Login Module',m);
      return m.LoginModule;
    }).catch((error)=>{
      console.log('error');
      return Promise<null>;
    })

  },
  // {
  //   path: "register",
  //   component: RegisterComponent
  // },
  //  {
  //   path:'explore/:name',
  //   loadChildren:()=> import('./explore/explore.module').then(n=>n.ExploreModule)
  // }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
