import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare var AMap;

@IonicPage()
@Component({
  selector: 'page-mapNavigate',
  templateUrl: 'mapNavigate.html'
})
export class MapNavigatePage {

  public mapNavigate:any;
  public title:any;//景点名
  public position:any;//地理坐标
  public mapnav:any;//地理坐标

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.mapNavigate = navParams.data;
    this.title = this.mapNavigate.title;
    this.position = this.mapNavigate.position;
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  //定位
  loadMap() {
    console.log(this.position.split(','));
    //加载地图，调用浏览器定位服务
    this.mapnav = new AMap.Map('mapnav', {
      pitch: 75,
      viewMode: '3D',
      zoom: 17,
      expandZoomRange: true,
      zooms: [3, 25],
      center: this.position.split(',')
    });
    //添加点标记，并使用自己的icon
    let marker = new AMap.Marker({
      position: this.position.split(','),
      map: this.mapnav
    });

    var infoWindow = new AMap.InfoWindow({
      content: "<font face=\"微软雅黑\"color=\"#3366FF\">" + this.title + "</font><hr />",
      autoMove: true,
      offset: {x: 0, y: -30}
    });
    marker.on('click', function(e) {
      infoWindow.open(this.mapnav, marker.getPosition());
    });

  }

  /**
   * 导航景点
   * @param title
   */
  navigateByTitle() {
    this.navCtrl.push('NavigatePage', {title: this.title});
  }
}
