import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AppComponent {
  form: FormGroup;
  resultString: string = '';

  categories = ['AVA', 'PK', 'PAR', 'PP'];
  subCategories = ['FERIE', 'ROL', 'EX-FEST', 'PAR'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      duration: [''],
      startTime: [''],
      endTime: [''],
      category: [''],
      subCategory: ['']
    });
  }

  generateString() {
    const { duration, startTime, endTime, category, subCategory } = this.form.value;
    this.resultString = `${duration} - ${category} - ${subCategory} - ${startTime} - ${endTime}`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.resultString);
  }
}