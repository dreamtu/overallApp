import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-road',
  templateUrl: 'road.html'
})
export class RoadPage {
  public roadList:any;
  private roadFlg:number = 1;

  constructor(public navCtrl: NavController, public appService: AppService) {}

  ionViewDidLoad() {
    this.getRoadList();
  }

  //城市页面
  roadSelect(index:number){
    this.roadFlg = index;
  }

  //上拉
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  //查看地图
  goMap(){
    this.roadFlg = 4;
    this.navCtrl.push("MapPage");
  }

  //路线跳转
  tuniu(index:number){
    this.navCtrl.push("TuniuPage",{index:index});
  }

  //获取路线
  getRoadList() {
    this.appService.httpGet(AppGlobal.api + "/test/roadList", {}, (data) => {
      this.roadList = data;
    }, true)
  }

  //导航路线详情页面
  roadDetail(id: string) {
    this.navCtrl.push('RoadDetailPage', {id: id});
  }
}
