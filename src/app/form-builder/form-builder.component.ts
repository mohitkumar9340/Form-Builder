import { Component } from '@angular/core';
import { NgIf, NgFor, NgModel, FormsModule } from '@angular/common';  // Import the necessary Angular modules

@Component({
  selector: 'app-form-builder',
  standalone: true,  // Marking this component as standalone
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  imports: [NgIf, NgFor, NgModel, FormsModule]  // Import Angular modules here
})
export class FormBuilderComponent {
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
