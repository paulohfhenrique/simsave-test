import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SimSaveRegisterComponent } from './simsaveregister/simsaveregister.component';
import { SimSaveMenuComponent } from './simsavemenu/simsavemenu.component';
import { SimSaveLoginComponent } from './simsavelogin/simsavelogin.component';
import { SimSaveHomeComponent } from './simsavehome/simsavehome.component';
import { SimSaveFooterComponent } from './simsavefooter/simsavefooter.component';
import { SimSaveCardsComponent } from './simsavecards/simsavecards.component';
import { SimSaveSingleCardsComponent } from './simsavecards/simsavesinglecards/simsavesinglecards.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
      SimSaveRegisterComponent,
      SimSaveMenuComponent,
      SimSaveLoginComponent,
      SimSaveHomeComponent,
      SimSaveFooterComponent,
      SimSaveCardsComponent,
      SimSaveSingleCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
