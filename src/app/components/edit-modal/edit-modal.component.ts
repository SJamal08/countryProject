import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country, CountryPayload } from '../../model/Country';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  @Input() countryPayload: Country | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<Country>();

  countryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(1)]],
      continent: ['', Validators.required],
      pib: ['', [Validators.required, Validators.min(0)]],
      img: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.countryPayload) {
      this.countryForm.patchValue(this.countryPayload);
    }
  }

  onSave(): void {
    if (this.countryForm.valid) {
      this.saveChanges.emit(this.countryForm.value);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

}
