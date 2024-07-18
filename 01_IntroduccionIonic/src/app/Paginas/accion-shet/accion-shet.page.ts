import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { IonicModule } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-accion-shet',
    templateUrl: './accion-shet.page.html',
    styleUrls: ['./accion-shet.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterLink, ComponentesModule]
})
export class AccionShetPage implements OnInit {

  constructor(private  actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  public onClick()
  {
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
