import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItemGroup, IonLabel, IonItemDivider, IonItem } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";


@Component({
  selector: 'app-itemdivider',
  templateUrl: './itemdivider.page.html',
  styleUrls: ['./itemdivider.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonList, IonItemGroup, IonLabel, IonItemDivider, IonItem]
})
export class ItemdividerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
