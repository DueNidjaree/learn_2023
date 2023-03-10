import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './moduls/member/member.component';


const routes: Routes = [
  {
    path:'member',
    data:{breadcrumb:'จัดการข้อมูลสมาชิก'},
    component: MemberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
