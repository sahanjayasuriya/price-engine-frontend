import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PriceListComponent } from './components/price-list/price-list.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        AppComponent,
        PriceListComponent,
        PriceCalculatorComponent,
        NotFoundComponent,
        ProductPriceComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatBadgeModule,
    MatChipsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
