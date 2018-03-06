import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-Tourist0',
  templateUrl: 'Tourist0.html'
})
export class Tourist0Page {

  public touristList:any;


  constructor(public navCtrl: NavController, public appService: AppService) {}

  ionViewDidLoad() {
    this.getTouristList();
  }

  /**
   * 获取景点数据
   */
  getTouristList() {
    this.appService.httpGet(AppGlobal.api + "/test/touristList", {}, (data) => {
      this.touristList = data;
    }, true)
  }

  /**
   * 导航景点详情页面
   * @param id
   */
  touristDetail(id: string) {
    this.navCtrl.push('TouristPage', {id: id});
  }

  /**
   * 景点全景图
   * @param title
   * @param overall_url
   */
  overallPage(title:string,overall_url:any) {
    this.navCtrl.push('OverallPage', {title: title,overallUrl: overall_url});
  }
}
