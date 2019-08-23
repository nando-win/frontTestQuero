import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-bolsa',
  templateUrl: './add-bolsa.page.html',
  styleUrls: ['./add-bolsa.page.scss'],
})
export class AddBolsaPage implements OnInit {

  bolsas: any [] = [];
  apiBolsas = 'https://testapi.io/api/redealumni/scholarships';

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.carregarBolsas();
  }

  carregarBolsas() {
    this.http.get<any[]>(this.apiBolsas)
    .subscribe(bolsas => {
      this.bolsas = bolsas;

      console.log(bolsas);
    });
  }
}
