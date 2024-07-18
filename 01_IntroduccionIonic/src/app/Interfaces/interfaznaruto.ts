export interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  jutsu?: string[];
  personal?: Personal;
  uniqueTraits?: string[];
  family?: Family;
  natureType?: string[];
}

export interface Debut {
  manga?: string;
  anime?: string;
  appearsIn?: string;
}

export interface Personal {
  sex?: string;
  age?: { [key: string]: string };
  affiliation?: string;
}

export interface Family {
  [key: string]: string;
}

export interface ApiResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}
