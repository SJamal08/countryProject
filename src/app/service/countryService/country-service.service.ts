import { Injectable } from '@angular/core';
import { ICountryRepo } from '../../repo/ICountryRepo';
import { InMemoryCountryRepo } from '../../repo/InMemoryCountryRepo';
import { Country, CountryPayload } from '../../model/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryRepo: ICountryRepo;

  constructor() {
    this.countryRepo = new InMemoryCountryRepo();
  }

  async create(country: CountryPayload): Promise<Country> {
    return await this.countryRepo.create(country);
  }
  async getAll(): Promise<Country[]> {
    return await this.countryRepo.getAll();
  }

  async getById(id: number): Promise<Country | null> {
    return await this.countryRepo.getById(id);
  }

  async update(id: number, country: CountryPayload): Promise<Country | undefined> {
    return await this.countryRepo.update(id, country);
  }
  async delete(id: number): Promise<boolean> {
    return await this.countryRepo.delete(id);
  }
}
