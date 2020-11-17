import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WavesModule, ButtonsModule } from 'ng-uikit-pro-standard';

import { AppComponent } from './app.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TableEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
