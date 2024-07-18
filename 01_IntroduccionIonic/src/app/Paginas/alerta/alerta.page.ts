import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alerta',
    templateUrl: './alerta.page.html',
    styleUrls: ['./alerta.page.scss'],
    standalone: true,
    imports: [IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, ComponentesModule]
})
export class AlertaPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController: AlertController) { }
  
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Es un mensaje simple',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertMultiple() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}


