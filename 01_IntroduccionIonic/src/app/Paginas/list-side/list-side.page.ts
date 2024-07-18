import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonButton, IonIcon, IonFabButton, IonFabList  } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-list-side',
  templateUrl: './list-side.page.html',
  styleUrls: ['./list-side.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonFab, IonButton, IonIcon, IonFabButton, IonFabList ]
})
export class ListSidePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
