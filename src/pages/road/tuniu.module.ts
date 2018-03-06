import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {TuniuPage} from "./tuniu";

@NgModule({
  declarations: [
    TuniuPage,
  ],
  imports: [
    IonicPageModule.forChild(TuniuPage),
  ]
})
export class TuniuPageModule {}
