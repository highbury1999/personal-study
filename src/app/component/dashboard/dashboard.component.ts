import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item/item.service';
// import {Item} from '../../models/Item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  item:Object;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.getItem().subscribe(item=>{
      this.item=item;
      console.log(this.item);
      
    },error=>{
      console.log(error);
      
    });
  }

}
