import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {

  itemList: any;
  categoryList: any;
  result: any;
  tempList: any;
  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getItemList();
    this.getCategories()
  }

  getItemList() {

    this.dataService.getData().subscribe(res => {
      if (res) {
        this.itemList = res;
        this.tempList = cloneDeep(res);
      }
    })

  }

  getCategories() {
    this.dataService.getCategories().subscribe(res => {
      if (res) {
        this.categoryList = res;
      }
    })
  }

  selectAndDeSelect(categoryId, index, event) {
    if (index == 0) {
      for (let i = 0; i < this.categoryList.data.length; i++) {
        if (event.checked)
          this.categoryList.data[i].checked = true;
        else {
          this.categoryList.data[i].checked = false;
          this.tempList.data = cloneDeep(this.itemList.data);
        }
      }
    }
    else {
      this.categoryList.data[index].checked = !this.categoryList.data[index].checked;
    }
    let checkedItems = this.categoryList.data.filter(i => i.checked == true).map(j => j.id);
    if (checkedItems && checkedItems.length > 0) {
      if (checkedItems.length == (this.categoryList.data.length - 1)) {
        this.categoryList.data[0].checked = event.checked;
      }
      this.tempList.data = cloneDeep(this.itemList.data.filter(i => checkedItems.includes(i.category_id.toString())));
    }

  }


  itemClick(id) {

    this.router.navigate(['/detail', id])

  }

}
