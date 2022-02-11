import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { EveryComponent } from './every/every.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    ReduceComponent,
    EveryComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
