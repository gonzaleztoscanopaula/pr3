import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; // Agrega este import

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      CommonModule, 
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatButtonModule // Incluye MatButtonModule aquí
    ),
  ]
});