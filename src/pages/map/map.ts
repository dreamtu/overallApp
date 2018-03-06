import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";

declare var AMap;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
  public map: any;
  public touistId:any;//id参数
  public touistTitle:any;//Title参数

  constructor(public navCtrl: NavController,public appService: AppService) {  }

  ionViewDidLoad() {
    this.loadMap();
  }

  //定位
  loadMap() {
    //加载地图，调用浏览器定位服务
    this.map = new AMap.Map('container', {
      zoom: 9,
      center:[119.2052900000,35.6670900000],
      resizeEnable: true
    });
    let markers = []; //标记

    this.appService.httpGet(AppGlobal.api + "/test/touristList", {}, (data) => {
      for (let i = 0; i < data.length; i += 1) {
        let marker;
        marker = new AMap.Marker({
          content: '<div class="amap-marker"><ion-icon class="Ionicons icon-jingdian"></ion-icon></div>' , //自定义点标记覆盖物内容
          offset: new AMap.Pixel(-12,-12),
          zIndex: 101,
          title: data[i].title,
          extData:data[i].id,
          position: data[i].href.split(','),
          map: this.map
        });
        // this.map.setCenter(marker.getPosition());
        markers.push(marker);
        marker.on('click',function(e){
          document.getElementById("tourist").innerText= marker.getTitle(); //景点名称
          document.getElementById("touistId").innerText= marker.getExtData();//景点id
          marker.setContent('<div><ion-icon class="Ionicons icon-dujia"></ion-icon></div>');
          /*this.marker.markOnAMAP({name:'首开广场',position:this.marker.getPosition()})*/
        });

        /*if(marker.getTitle() === document.getElementById("tourist").innerText){
          marker.setContent('<div><ion-icon class="Ionicons icon-dujia"></ion-icon></div>');
        }else{
          marker.setContent('<div class="amap-marker"><ion-icon class="Ionicons icon-jingdian"></ion-icon></div>');
        }*/
      }
    }, true)
  }

  /**
   * 导航景点
   * @param title
   */
  navigateByTitle() {
    this.touistTitle = document.getElementById("tourist").innerText;
    this.navCtrl.push('NavigatePage', {title: this.touistTitle});
  }

  /**
   * 跳转景点详情页面
   * @param id
   */
  touristById() {
    this.touistId = document.getElementById("touistId").innerText;
    this.navCtrl.push('TouristPage', {id: this.touistId});
  }
}
