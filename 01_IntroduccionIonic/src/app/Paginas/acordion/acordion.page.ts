import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonLabel, IonItem,  IonAccordionGroup} from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.page.html',
  styleUrls: ['./acordion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonAccordion, IonLabel, IonItem, IonAccordionGroup]
})
export class AcordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
