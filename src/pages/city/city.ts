import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})
export class CityPage {
  pet: string = "飞机场";
  mapcity: string = "政区图";
  public feijiChugang: any={};//飞机场出港
  public feijiJingang: any={};//飞机场进港
  public gongjiao: any={};//公交路线
  public bigmap: any={};//大地图

  constructor(public navCtrl: NavController,public appService: AppService) {}
  private cityFlg:number = 1;

  ionViewDidEnter() {
    this.getFeijichang("21","22");//飞机场出港
  }

  //城市页面
  citySelect(index:number){
    this.cityFlg = index;
  }

  //全景页面跳转
  quanjing(){
    this.navCtrl.push('QuanjingPage');
  }

  //飞机场数据
  getFeijichang(type1:any,type2:any) {
    //飞机场出港数据
    this.appService.httpGet(AppGlobal.api + "/test/changyouList/"+ type1, {},(data) => {
      this.feijiChugang = data;
    }, true);
    //飞机场进港数据
    this.appService.httpGet(AppGlobal.api + "/test/changyouList/"+ type2, {},(data) => {
      this.feijiJingang = data;
    }, true);
  }

  //公交路线
  getGongjiao(index:number,type:any) {
    this.cityFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/changyouList/"+ type, {},(data) => {
      this.gongjiao = data;
    }, true);
  }

  //大地图
  getBigmap(index:number,id) {
    this.cityFlg = index;
    this.appService.httpGet(AppGlobal.api + "/test/bigmapById/"+ id, {},(data) => {
      this.bigmap = data;
    }, true)
  }
}
