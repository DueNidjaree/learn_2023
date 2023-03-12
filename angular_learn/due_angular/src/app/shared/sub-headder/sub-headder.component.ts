import { Component,Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-sub-headder',
  templateUrl: './sub-headder.component.html',
  styleUrls: ['./sub-headder.component.scss']
})
export class SubHeadderComponent {

  
  @Input() sub_heder_change! : string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(d => {
      this.sub_heder_change=d['sub_heder_change'];
      console.log(d['sub_heder_change']);
      // console.log(this.activatedRoute.snapshot.data);
    })
   }


  //  public constructor(private route:ActivatedRoute, private router:Router) {
  //   console.log(route.snapshot.data['sub_heder_change'])
  // }
     

}
