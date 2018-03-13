import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public goToPage(page){
  	this.navCtrl.push(page);
  }

  public openModal(){
    var modalPage = this.modalCtrl.create('ResetPasswordModalPage');
    modalPage.present();
  }

}
