import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonModal, IonButton, IonItem, IonButtons,  } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonButton, IonItem, IonButtons, IonModal]
})
export class ModalPage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = ''; // Inicializa 'name' con un valor por defecto

  ngOnInit() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal?.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
