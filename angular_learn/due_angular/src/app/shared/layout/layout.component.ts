import { Component,EventEmitter,Input,Output,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('menu') sideNav!:MatSidenav;
  side_menu(){
    this.sideNav.toggle();
    // console.log(1);
  }

  sub_header_text="";
  layoutChage(val:string){
    this.sub_header_text = val;
    // console.log(val);
  }

}
