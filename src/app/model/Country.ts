export interface Country {
  id: number;
  name: string;
  area: number;
  continent: string;
  pib: number;
  img: string;
}

export interface CountryPayload {
  name: string;
  area: number;
  continent: string;
  pib: number;
  img: string;
}
