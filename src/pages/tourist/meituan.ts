import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-meituan',
  templateUrl: 'meituan.html'
})
export class MeituanPage {

  public touist:any;
  public meituanUrl:any;//全景路径

  constructor(public navCtrl: NavController,public navParams: NavParams,private sanitizer: DomSanitizer) {
    this.touist = navParams.data;

    if(this.touist.meituanUrl == null){
      this.meituanUrl = "https://i.meituan.com/trip/lvyou/triplist/poi/?stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F195";
    }else{
      this.meituanUrl = this.touist.meituanUrl;
    }
    this.meituanUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.meituanUrl);//安全解析

  }
}
