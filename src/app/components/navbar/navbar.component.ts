import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountryService } from '../../service/countryService/country-service.service';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private homeComponent: HomeComponent) {}

  public async reloadCountries(): Promise<void> {
    console.log("reloading");
    await this.homeComponent.getCountries();
  }

}
