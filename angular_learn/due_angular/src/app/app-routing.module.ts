import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './modules/member/member.component';

const routes: Routes = [
  {
    path:'member',
    data:{sub_heder_change:'จัดการข้อมูลสมาชิก'},
    component: MemberComponent,
  },
 // {
  //   path: '**',
  //   redirectTo: '/notfound'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
