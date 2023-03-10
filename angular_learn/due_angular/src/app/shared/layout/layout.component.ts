import { Component,Output, ViewChild, EventEmitter, Input  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('side_menu') _side_menu! : MatSidenav;
  toggle_menu(){
    this._side_menu.toggle();
  }

  breadcrumbs="";
  breadcrumdLayoutChange(val:string){  
    this.breadcrumbs=val;  
    //console.log("val:",val);
  }
}
