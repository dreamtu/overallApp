import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html'
})
export class NavigatePage {
  public touist:any;
  public touistTitle:any;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.touist = navParams.data;
    this.touistTitle = this.touist.title;
  }
}
