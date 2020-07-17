import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MapboxServiceService } from '../mapbox-service.service';
import { Environment } from '../environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  countrydata:any=[];
  long:any;
  lat:any;
  cases:any;
  color:any;
  country:any;
  

    map: mapboxgl.Map;
    @ViewChild('mapElement') mapElement: ElementRef;

  constructor(private service:MapboxServiceService) { 
    

    
  }

  ngOnInit() {
    
    this.getCountryData();
    var $:any;
   
    
    $('.count').counterUp({
      delay:10,
      time:3000
    })

    

    

    
    
  }

  ngAfterViewInit()
  {
      this.map = new mapboxgl.Map({
      accessToken: Environment.mapbox.accessToken,
      container:this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v10'
      });
      
     
      
  }



  
  

 
  getCountryData()
  {
    this.service.getCoronaData().subscribe((data)=>
    {
      this.countrydata=data;
      //console.log(this.countrydata[0][1].countryRegion+"gg")
      this.countrydata.forEach(ele=>{
      this.lat=ele.lat;
      this.long=ele.long;
      this.cases=ele.confirmed;
      //console.log(ele.iso2+"flag")
      if(this.cases>2500)
      {
        this.color="rgb(255,0,0)"
      }

      else{
        this.color=`rgb($this.cases.0.0)`
      }

      if(ele.provinceState!==null || ele.provinceState==='')
      {
        this.country=ele.provinceState;
      }

      else
      {
        this.country=ele.countryRegion;
      }

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<img style="width:200px;height:120px;border:0.5px solid black" src="https://www.countryflags.io/'+ele.iso2+'/flat/64.png">'+
        '<hr>'+
        '<h3 style="color:black;text-align:center">' + this.country +''+ 
        '<hr>'+
        '<h3 style="color:red;text-align:center" class="count">Confirmed:' + ele.confirmed +''+ '<h3 style="color:orange;text-align:center" class="count">Deaths:' + ele.deaths + '</h3 >'+'<h3 style="color:green;text-align:center " class="count">Recoverd:' + ele.recovered+'</h3>'
        
    );

    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';

      new mapboxgl.Marker({
      draggable: false,
      color:this.color
      })
      .setLngLat([ele.long, ele.lat])
      .setPopup(popup) 
      .addTo(this.map);


  

    
       
       

      
      })

    
    });
   
  }

  

}

