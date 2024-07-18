import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonCheckbox , IonList, IonItem]
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
