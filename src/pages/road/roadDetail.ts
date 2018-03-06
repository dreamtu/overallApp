import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-roadDetail',
  templateUrl: 'roadDetail.html'
})
export class RoadDetailPage {
  public roadId:any={};//id
  public road: any={};

  constructor(public navCtrl: NavController,public navParams: NavParams,public appService: AppService) {
    this.roadId = navParams.data;
  }

  ionViewDidEnter() {
    this.getRoad(this.roadId.id); //路线详情页面id
  }

  //路线详情页面id
  getRoad(id) {
    this.appService.httpGet(AppGlobal.api + "/test/roadById/"+ id, {},(data) => {
      this.road = data;
    }, true)
  }
}
