import { Component,Output,EventEmitter } from '@angular/core';
import {NavItem} from '../../_models/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  NavItems : NavItem[]=[
    {
      displayName: 'หน้าหลัก',
      disabled: true,
      iconName: 'home',
      route: '/admin',
      children: []
    },
    {
      displayName: 'จัดการข้อมูลสมาชิก',
      disabled: true,
      iconName: 'perm_identity',
      route: '/member',
      children: []
    },
  ];

  @Output() memumain_change = new EventEmitter<string>();
  menu_change(val:string){
    this.memumain_change.emit(val);
    console.log(val);
  }

}
