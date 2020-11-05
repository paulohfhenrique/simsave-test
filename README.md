# SimsaveTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Communicating with backend services using HTTP

https://angular.io/guide/http#communicating-with-backend-services-using-http

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

# Font used in the application

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

font-family: 'Roboto', sans-serif;

# Install Angular Material

npm install --save @angular/material
npm install --save @angular/cdk

## Create a MaterialModule class:

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

# Go to your index.html and add this inside '<head>'
  
'<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">'

# angular-fontawesome

Using NPM

$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
See Compatibility table below to choose a correct version
$ npm install @fortawesome/angular-fontawesome@<version>
  
'https://github.com/FortAwesome/angular-fontawesome'

# Start by installing the Angular Layout library from npm

'https://github.com/angular/flex-layout'

npm i -s @angular/flex-layout @angular/cdk

## app.module.ts

import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
