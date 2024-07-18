import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonButtons } from '@ionic/angular/standalone';
import { AlertaPage } from '../alerta/alerta.page';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MenuController, IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { interfaz } from 'src/app/Interfaces/interfaz';
import { addIcons } from 'ionicons';
import {IonIcon} from '@ionic/angular/standalone';
import { americanFootballOutline,alertCircleOutline,appsOutline,beakerOutline,radioButtonOffOutline,listOutline, albums, checkmarkCircle,disc, menu, barcode, browsers, speedometer,shuffle, search, map } from 'ionicons/icons';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule,RouterLink]
})
export class InicioPage implements OnInit {
   comp: Observable<interfaz[]> | undefined;
   constructor( private menuCtrl: MenuController,private dataService: DataService)
   {
     addIcons({americanFootballOutline,alertCircleOutline,appsOutline,beakerOutline,radioButtonOffOutline,listOutline, albums,checkmarkCircle, disc, menu, barcode, browsers, speedometer,  shuffle, search, map});
   }
 

  ngOnInit() {
    this.comp=this.dataService.getMenu();
  }
  mostrarMenu() {
    this.menuCtrl.open('first');
  }
  

}
