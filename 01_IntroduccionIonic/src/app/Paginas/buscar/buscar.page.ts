import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonSearchbar]
})
export class BuscarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
