import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../service/countryService/country-service.service';
import { Router } from '@angular/router';
import { Country, CountryPayload } from '../../model/Country';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-country',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css'
})
export class AddCountryComponent {
  countryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private router: Router
  ) {
    this.countryForm = this.fb.group({
      name: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(1)]],
      continent: ['', Validators.required],
      pib: ['', [Validators.required, Validators.min(0)]],
      img: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.countryForm.valid) {
      const countryPayload: CountryPayload = this.countryForm.value;
      try {
        const newCountry: Country = await this.countryService.create(countryPayload);
        this.router.navigate(['/']);
      } catch (error) {
        console.log("error in adding country");
      }
    }
  }
}
