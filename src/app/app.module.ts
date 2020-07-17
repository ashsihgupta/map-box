
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { MapboxServiceService } from './mapbox-service.service';
import { MapboxComponent } from './mapbox/mapbox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,HttpModule],
  declarations: [ AppComponent, HelloComponent, MapboxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MapboxServiceService]
})
export class AppModule { }
