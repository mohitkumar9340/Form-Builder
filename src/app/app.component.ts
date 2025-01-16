// app.component.ts
import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormBuilderComponent]  
})
export class AppComponent {}
