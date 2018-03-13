import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

/**
 * Generated class for the ResetPasswordModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password-modal',
  templateUrl: 'reset-password-modal.html',
})
export class ResetPasswordModalPage {

	constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl : ViewController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ResetPasswordModalPage');
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}

}
