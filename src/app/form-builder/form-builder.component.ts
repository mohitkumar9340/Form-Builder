import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';  // Import common directives
import { FormsModule } from '@angular/forms';  // Import FormsModule which includes NgModel

@Component({
  selector: 'app-form-builder',
  standalone: true,  // Marking this component as standalone
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  imports: [NgIf, NgFor, FormsModule]  // Only import FormsModule, not NgModel directly
})
export class FormBuilderComponent {
  name: string = '';
  type: string = 'text';
  required: boolean = false;
  label: string = '';
  errorMessage: string = '';
  formElements: { name: string; type: string; required: string; label: string }[] = [];
  generatedFormHTML: string = '';

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

  generateForm() {
    if (this.formElements.length === 0) {
      this.generatedFormHTML = 'Please add fields to generate the form.';
      return;
    }
  
    let formHTML = '<form>\n';
  
    this.formElements.forEach(element => {
      const required = element.required === 'True' ? 'required' : '';
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
          formHTML += `<label for="${element.name}">${element.label}:</label>\n`;
          formHTML += `<input type="${element.type}" id="${element.name}" name="${element.name}" ${required} />\n\n`;
          break;
  
        case 'radio':
          formHTML += `<label>${element.label}:</label>\n`;
          formHTML += `<input type="radio" id="${element.name}" name="${element.name}" value="option1" ${required} /> Option 1\n`;
          formHTML += `<input type="radio" id="${element.name}" name="${element.name}" value="option2" ${required} /> Option 2\n\n`;
          break;
  
        case 'dropdown':
          formHTML += `<label for="${element.name}">${element.label}:</label>\n`;
          formHTML += `<select id="${element.name}" name="${element.name}" ${required}>\n`;
          formHTML += `<option value="option1">Option 1</option>\n`;
          formHTML += `<option value="option2">Option 2</option>\n`;
          formHTML += `</select>\n\n`;
          break;
  
        case 'checkbox':
          formHTML += `<label for="${element.name}">${element.label}:</label>\n`;
          formHTML += `<input type="checkbox" id="${element.name}" name="${element.name}" ${required} />\n\n`;
          break;
  
        case 'file':
          formHTML += `<label for="${element.name}">${element.label}:</label>\n`;
          formHTML += `<input type="file" id="${element.name}" name="${element.name}" ${required} />\n\n`;
          break;
      }
    });
  
    formHTML += '</form>';
    this.generatedFormHTML = formHTML;
  }
  
}
