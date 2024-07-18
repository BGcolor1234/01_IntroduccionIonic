import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItemSliding, IonList, IonIcon, IonItemOptions, IonItemOption, IonItem } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  imports: [IonItem, IonItemOption, IonItemOptions, IonIcon, IonList, IonItemSliding, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule]
})
export class ListaPage implements OnInit {
  listausuarios:Observable<any> | undefined;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.listausuarios= this.data.getUsuarios();
  }
  favorite(user:any){
    console.log('favorite',user);
}
share(user:any)
{
console.log('share',user);
}
unread(user:any)
{
console.log('unread',user);
}
  
}
