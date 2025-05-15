import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';  // <--- add this
import { PdfService } from './services/pdf.service';     // <--- add this

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,   // <--- add here
  ],
  providers: [PdfService],  // <--- optionally add here
  bootstrap: [AppComponent]
})
export class AppModule { }
