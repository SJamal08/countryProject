import { CountryPayload, Country } from "../model/Country";
import { ICountryRepo } from "./ICountryRepo";

export class InMemoryCountryRepo implements ICountryRepo {

  countries: Country[];
  constructor() {
    this.countries = [
      {
        id: 1,
        name: 'France',
        area: 551695,
        continent: 'Europe',
        pib: 2715000000000,
        img: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'
      },
      {
        id: 2,
        name: 'Canada',
        area: 9984670,
        continent: 'North America',
        pib: 1647000000000,
        img: 'https://node01.flagstat.net/media/catalog/product/detail/1818.png'
      },
      {
        id: 3,
        name: 'Australia',
        area: 7692024,
        continent: 'Oceania',
        pib: 1330000000000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png'
      },
      {
        id: 4,
        name: 'Japan',
        area: 377975,
        continent: 'Asia',
        pib: 5371000000000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Japan_flag_-_variant.png/2560px-Japan_flag_-_variant.png'
      },
      {
        id: 5,
        name: 'Brazil',
        area: 8515767,
        continent: 'South America',
        pib: 1868000000000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
      }]
  }
  async create(country: CountryPayload): Promise<Country> {
    const newCountry: Country = { id: this.countries.length + 1, ...country};
    this.countries.push(newCountry);
    return Promise.resolve(newCountry);
  }
  getAll(): Promise<Country[]> {
    return Promise.resolve(this.countries);
  }

  getById(id: number): Promise<Country | null> {
    const countryToFind = this.countries.find(c => c.id === id);
    if (countryToFind === undefined) {
      return Promise.resolve(null);
    }
    return Promise.resolve(countryToFind);
  }

  update(id: number, country: CountryPayload): Promise<Country | undefined> {
    const countryUpdated = this.countries.find(c => c.id === id);
    if (countryUpdated) {
      countryUpdated.name = country.name;
      countryUpdated.area = country.area;
      countryUpdated.continent = country.continent;
      countryUpdated.pib = country.pib;
      countryUpdated.img = country.img;
    }
    return Promise.resolve(countryUpdated);
  }
  delete(id: number): Promise<boolean> {
    const index = this.countries.findIndex(c => c.id === id);
  if (index !== -1) {
    this.countries.splice(index, 1);
    return Promise.resolve(true);
  }
  return Promise.resolve(false);
  }
}
