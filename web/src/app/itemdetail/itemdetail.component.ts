import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  itemId: any;
  item: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        // (1)
        this.getItemDetail(params['id'])
      }
    });
  }

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  getItemDetail(itemId) {
    this.dataService.GetItemDetailbyId(itemId).subscribe(res => {
      if (res) {
        console.log('item' + res);
        this.item = res;
      }
    })
  }

  likeCount(){
    this.item.like_count++;
  }

  navigation() {
    this.router.navigateByUrl('/item');
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }



}
