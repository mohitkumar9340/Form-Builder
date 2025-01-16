import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { NgIf, NgFor } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, NgIf, NgFor]  
})
export class AppComponent {
  name: string = '';
  type: string = 'text';
  required: boolean = false;
  label: string = '';
  errorMessage: string = '';
  formElements: { name: string; type: string; required: string; label: string }[] = [];

  addElement() {
    if (this.name.trim() === '' || this.label.trim() === '') {
      this.errorMessage = 'Both Name and Label are required.';
      return;
    }

    this.errorMessage = '';
    this.formElements.push({
      name: this.name.trim(),
      type: this.type,
      required: this.required ? 'True' : 'False',
      label: this.label.trim()
    });

    this.name = '';
    this.label = '';
    this.required = false;
    this.type = 'text';
  }
}
