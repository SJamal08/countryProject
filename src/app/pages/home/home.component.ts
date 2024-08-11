import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Country, CountryPayload } from '../../model/Country';
import { CountryService } from '../../service/countryService/country-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { EditModalComponent } from '../../components/edit-modal/edit-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgFor, EditModalComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  public countries: Country[] = [];
  public selectedCountry: Country | null = null;
  public isModalOpen = false;

  constructor(private countryService: CountryService, private router: Router) {}
  ngOnInit(): void {
    this.getCountries();
  }

  onCountryClick(country: Country): void {
    this.router.navigate(['/country', country.id]);
  }

  openEditModal(country: Country): void {
    this.selectedCountry = country;
    this.isModalOpen = true;
  }

  closeEditModal(): void {
    this.isModalOpen = false;
    this.selectedCountry = null;
  }

  public async getCountries(): Promise<void> {
    try {
      const fetchCountries = await this.countryService.getAll();
      this.countries = fetchCountries;

    } catch (error) {
      console.log("error in fetching countries, please reload or contact the developpers service");
    }
  }

  saveCountryChanges(updatedCountry: Country): void {
    const countryPayload: CountryPayload = {
      name: updatedCountry.name,
      area: updatedCountry.area,
      continent: updatedCountry.continent,
      pib: updatedCountry.pib,
      img: updatedCountry.img
    };

    try {
      if (this.selectedCountry) {
        this.countryService.update(updatedCountry.id,countryPayload);
          this.getCountries();
          this.closeEditModal();
      }
    } catch (error) {
      console.log("error in updating country, please reload or contact the developpers service");
    }
  }

  public async deleteCountry(id: number): Promise<boolean> {
    try {
      return await this.countryService.delete(id);
    } catch (error) {
      console.log("error in deleting country, please reload or contact the developpers service");
      return Promise.resolve(false);
    }
  }

  public filterById(): void {
    this.countries.sort((a, b) => a.id - b.id);
  }

  public filterByName(): void {
    this.countries.sort((a, b) => a.name.localeCompare(b.name));
  }

  public filterByArea(): void {
    this.countries.sort((a, b) => a.area - b.area);
  }

  public filterByPIB(): void {
    this.countries.sort((a, b) => a.pib - b.pib);
  }
  public filterByContinent(): void {
    this.countries.sort((a, b) => a.continent.localeCompare(b.continent));
  }

}
