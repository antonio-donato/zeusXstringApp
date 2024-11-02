import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class AppComponent {
  form: FormGroup;
  resultString: string = '';

  categories = ['AVA', 'PK', 'PAR', 'PP'];
/*  subCategories = ['FERIE', 'ROL', 'EX-FEST', 'PAR']; */
    subCategoriesMap: { [key: string]: string[] } = {
      'AVA': ['FERIE', 'ROL', 'EX-FEST', 'PAR'],
      'PK': ['PERMESSO 104_CF ASSISTITO'],
      'PAR': ['CONGEDO OBBLIGATORIO PADRE', 'CONGEDO PARENTALE FIGLIO'],
      'PP': ['ESAME', 'STUDIO N ORE']
  };
  subCategories = this.subCategoriesMap['AVA'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      duration: ['8'],
      startTime: ['09:00'],
      endTime: ['18:00'],
      category: ['AVA'],
      subCategory: ['FERIE']
    });

    this.form.get('category')?.valueChanges.subscribe(selectedCategory => {
      this.subCategories = this.subCategoriesMap[selectedCategory];
      this.form.get('subCategory')?.setValue(this.subCategories[0]);
    });
  }

  generateString() {
    const { duration, startTime, endTime, category, subCategory } = this.form.value;
    this.resultString = `${duration} ore - ${category} - ${subCategory} - ${startTime}-${endTime}`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.resultString);
  }
}