import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonLabel, IonThumbnail, IonItem, IonList} from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { DataService } from 'src/app/services/data.service';
import { Character } from 'src/app/Interfaces/interfaznaruto';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonLabel, IonThumbnail, IonItem, IonList]
})
export class TarjetasPage implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.dataService.getPersonajesNaruto(1, 100).subscribe(
      (data) => {
        if (data && data.characters && data.characters.length > 0) {
          this.characters = data.characters; // Almacena todos los personajes
          this.selectedCharacter = this.characters[36] || this.characters[0]; // Selecciona el personaje 99 si existe, sino selecciona el primero
        } else {
          console.error('No characters found or data structure is incorrect', data);
        }
      },
      (error) => {
        console.error('Error fetching characters', error);
      }
    );
  }
}
