import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordModalPage } from './reset-password-modal';

@NgModule({
  declarations: [
    ResetPasswordModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPasswordModalPage),
  ],
})
export class ResetPasswordModalPageModule {}
