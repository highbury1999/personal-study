import { Component, OnInit } from '@angular/core';
import {BannerService} from '../../../services/banner/banner.service';

@Component({
  selector: 'community-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  banners:object;

  constructor(private bannerService:BannerService) { }

  ngOnInit() {
    this.bannerService.getBanner().subscribe(banners=>{
      this.banners = banners;
      console.log(this.banners);
      
    })
  }

}
