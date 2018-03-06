import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RoadPage} from "./road";

@NgModule({
  declarations: [
    RoadPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadPage),
  ]
})
export class RoadPageModule {}
