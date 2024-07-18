import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-ionchip',
  templateUrl: './ionchip.page.html',
  styleUrls: ['./ionchip.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonChip, IonAvatar, IonLabel, IonIcon]
})
export class IonchipPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
