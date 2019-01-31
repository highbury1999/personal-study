import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  item:string;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.item = this.itemService.getItem();
  }

}
