interface Origin {
  name: string;
  url: string;
}
interface Location {
  name: string;
  url: string;
}
export interface IRegisterFavoriteCharacterRequestDTO {
  id?: number;
  id_api: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  user_id: number;
}
