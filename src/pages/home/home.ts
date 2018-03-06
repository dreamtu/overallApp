import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CityPage} from "../city/city";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  //城市页面
  city(){
    this.navCtrl.push(CityPage);
  }
  //畅游页面
  enjoy(){
    this.navCtrl.push("EnjoyPage");
  }
  //景点页面
  tourist0(){
    this.navCtrl.push("Tourist0Page");
  }
  //线路页面
  road(){
    this.navCtrl.push("RoadPage");
  }
}
