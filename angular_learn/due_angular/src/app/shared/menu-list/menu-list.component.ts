import { Component,Input,Output,EventEmitter } from '@angular/core';
import {NavItem} from '../../_models/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  expanded: boolean = false;

  @Input() item! : NavItem;
  @Input() depth! :Number;
  @Output() sub_menu_change = new EventEmitter<string>();
  

  constructor(
    public router : Router

  ) { 
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }  

  onItemSelected(item : NavItem ){
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.sub_menu_change.emit(item.displayName);
      //console.log(item.children);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
}

}


