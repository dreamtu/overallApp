import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-tuniu',
  templateUrl: 'tuniu.html'
})
export class TuniuPage {

  public indexList:any;
  public index:any;
  public tuniuUrl:any;

  constructor(public navCtrl: NavController,public navParams: NavParams,private sanitizer: DomSanitizer) {
    this.indexList = navParams.data;
    this.index = this.indexList.index;
    // this.meituanUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.meituanUrl);//安全解析

  }

}
