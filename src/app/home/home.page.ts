import { Component } from '@angular/core';

import { AddBolsaPage } from '../add-bolsa/add-bolsa.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}


  async presentModal() {
    const modal = await this.modalController.create({
      component: AddBolsaPage
    });
    return await modal.present();
  }
}
