import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
// Angular materials
import { MdAutocompleteModule, MdInputModule } from '@angular/material';
import { AutocompleteService } from './autocomplete/autocomplete.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular materials
    MdAutocompleteModule,
    MdInputModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AutocompleteComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AutocompleteComponent
  ],
  providers: [
    AutocompleteService
  ]
})
export class SharedModule { }
