import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { EveryComponent } from './every/every.component';
import { SomeComponent } from './some/some.component';
import { FindComponent } from './find/find.component';
import { IncludesComponent } from './includes/includes.component';
import { ApiRealComponent } from './api-real/api-real.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    ReduceComponent,
    EveryComponent,
    SomeComponent,
    FindComponent,
    IncludesComponent,
    ApiRealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
