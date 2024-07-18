import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonRange]
})
export class RangePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
