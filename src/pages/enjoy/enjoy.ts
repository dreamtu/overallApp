import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@IonicPage()
// declare var Swiper;
@Component({
  selector: 'page-enjoy',
  templateUrl: 'enjoy.html'
})
export class EnjoyPage {
  swiper: any;
  public foodList:any;//美食
  public teseList:any;//特色商品
  public jiudian:any; //酒店
  public lvxingshe:any; //旅行社

  constructor(public navCtrl: NavController,public appService: AppService) {}
  private enjoyFlg:number = 1;
  //城市页面
  enjoySelect(index:number){
    this.enjoyFlg = index;
  }

  /*initSwiper() {  //滑动
    this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
    });
  }*/

  //获取美食数据
  getFoodList(index:number) {
    this.enjoyFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/foodList", {}, (data) => {
      this.foodList = data;
    }, true)
  }

  //导航美食、特色商品详情页面
  foodDetail(id: string) {
    this.navCtrl.push('RoadDetailPage', {id: id});
  }

  //获取特色商品数据
  getTeseList(index:number) {
    this.enjoyFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/teseList", {}, (data) => {
      this.teseList = data;
    }, true)
  }

  //酒店数据
  getJiudian(index:number,type:any) {
    this.enjoyFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/changyouList/"+ type, {},(data) => {
      this.jiudian = data;
    }, true);
  }

  //旅行社数据
  getLvxingshe(index:number,type:any) {
    this.enjoyFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/changyouList/"+ type, {},(data) => {
      this.lvxingshe = data;
    }, true);
  }
}
