import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent],
  imports: [ 
    RouterModule.forChild([
      {
        path:'',
      component: LoginComponent
      }
    ])
    
  ],
  exports:[],
  bootstrap:[LoginComponent]
})
export class LoginModule { 
  constructor(){
    console.log('Logiin sep module');
  }
}
