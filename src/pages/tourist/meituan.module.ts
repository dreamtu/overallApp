import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MeituanPage} from "./meituan";

@NgModule({
  declarations: [
    MeituanPage,
  ],
  imports: [
    IonicPageModule.forChild(MeituanPage),
  ]
})
export class MeituanPageModule {}
