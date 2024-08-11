import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountryService } from '../../service/countryService/country-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public countryService: CountryService;

  constructor(countryService: CountryService) {
    this.countryService = countryService;
  }

}
