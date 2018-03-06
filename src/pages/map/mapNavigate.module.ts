import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MapNavigatePage} from "./mapNavigate";

@NgModule({
  declarations: [
    MapNavigatePage,
  ],
  imports: [
    IonicPageModule.forChild(MapNavigatePage),
  ]
})
export class MapNavigatePageModule {}
