import { Component } from '@angular/core';
import { Country } from '../../model/Country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../service/countryService/country-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  public country: Country | null;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private router: Router,
  ) {
    this.country = null;
  }

  async ngOnInit(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.country = await this.countryService.getById(id); // Cette méthode doit être implémentée dans CountryService
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
