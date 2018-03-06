import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-overall',
  templateUrl: 'overall.html'
})
export class OverallPage {

  public touist: any;
  public touistTitle: any;//景点名
  public touistOverall: any;//全景路径
  public flg: boolean = true;//flg 全景图片 or 链接

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.touist = navParams.data;
    this.touistTitle = this.touist.title;
    if (this.touist.overallUrl == null) {
      this.touistOverall = "http://720yun.com/t/e0fj5puazv0?from=singlemessage&pano_id=7530152";
    } else {
      this.touistOverall = this.touist.overallUrl;
    }

    this.touistOverall = this.sanitizer.bypassSecurityTrustResourceUrl(this.touistOverall);//安全解析

    if (this.touistTitle == "竹洞天风景区" || this.touistTitle == "花仙子景区" || this.touistTitle == "河山风景区") {
      this.flg = false;
    }

  }
}
