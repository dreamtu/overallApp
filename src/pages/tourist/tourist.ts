import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-tourist',
  templateUrl: 'tourist.html'
})
export class TouristPage {
  public touristId:any={};//id
  public Tourist: any={};
  public isNotData: boolean = false;
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,public navParams: NavParams,public appService: AppService,public platform: Platform) {
    this.touristId = navParams.data;
    this.isAndroid = platform.is('android');
  }

  ionViewDidEnter() {
    this.getTourist(this.touristId.id); //景点详情页面id
  }

  //景点详情页面id
  getTourist(id) {
    this.appService.httpGet(AppGlobal.api + "/test/tourist/"+ id, {},(data) => {
      this.isNotData = false;
      if (data == null || data.length == 0) {
        this.isNotData = true;
        return
      }
      this.Tourist = data;
    }, true)
  }

  /**
   * 导航景点
   * @param title
   */
  navigateByTitle(title,href) {
    this.navCtrl.push('MapNavigatePage', {title: title,position:href});
  }

  /**
   * 美团景点团购
   * @param title
   */
  meituanByTit(title:string,meituanUrl:any) {

    this.navCtrl.push('MeituanPage', {title: title,meituanUrl: meituanUrl});
  }

  /**
   * 景点全景图
   * @param title
   */
  overallByTit(title:string,overallUrl:any) {
    this.navCtrl.push('OverallPage', {title: title,overallUrl: overallUrl});
  }
}
