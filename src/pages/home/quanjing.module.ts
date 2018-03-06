import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {QuanjingPage} from "./quanjing";

@NgModule({
  declarations: [
    QuanjingPage,
  ],
  imports: [
    IonicPageModule.forChild(QuanjingPage),
  ]
})
export class QuanjingPageModule {}
