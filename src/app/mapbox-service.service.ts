import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Environment } from './environment';
import * as mapboxgl from 'mapbox-gl';



@Injectable()
export class MapboxServiceService {

  constructor(private http:Http) {
    
    
    
  }

   

  getCoronaData():Observable<any[]>{
    return this.http.get("https://covid-19.mathdro.id/api/confirmed")
    .pipe(map((data)=>data.json()))

  }

}