import { Country, CountryPayload } from "../model/Country";


export interface ICountryRepo {
  create(country: CountryPayload): Promise<Country>;
  getAll(): Promise<Country[]>;
  update(id:number, country: CountryPayload): Promise<Country | undefined>;
  delete(id: number): Promise<boolean>;
}
