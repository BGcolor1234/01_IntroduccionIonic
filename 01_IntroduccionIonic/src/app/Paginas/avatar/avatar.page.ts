import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonChip, IonLabel } from '@ionic/angular/standalone';
import { ComponentesModule } from "../../Componentes/componentes.module";
import { DataService } from 'src/app/services/data.service';
import { Character } from 'src/app/Interfaces/interfaznaruto';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentesModule, IonAvatar, IonChip, IonLabel]
})
export class AvatarPage implements OnInit {
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
          this.selectedCharacter = this.characters[99]; // Selecciona el primer personaje
        } else {
          console.error('No characters found or data structure is incorrect', data);
        }
      }
    );
  }
}
