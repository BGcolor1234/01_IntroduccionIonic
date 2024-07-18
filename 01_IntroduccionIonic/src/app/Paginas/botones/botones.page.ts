import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule]
})
export class BotonesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
