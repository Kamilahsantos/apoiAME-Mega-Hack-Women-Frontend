import { Component, OnInit , ViewChild, ElementRef, NgZone} from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';
import {MatTableDataSource} from '@angular/material/table';

export interface NetworkInformations {
  address: string;
  area: string;
  companyName: string;
  job: string;
  jobDescription: string;
  name: string

}

const ELEMENT_DATA: NetworkInformations[] = [
  {address: 'centro', area: 'artesanato', companyName: 'artesanato da dona maria', job: 'atendente',jobDescription: 'atende clientes',name: 'maria ' },
  {address: 'capao redondo', area: 'alimentacao', companyName: 'sabor do bairro', job: 'cozinheira',jobDescription: 'preparacao de pfs',name: 'vilma ' },

];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['area', 'companyName', 'job', 'jobDescription' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  title: string = 'AGM project';
  latitude = 45.730610;
  longitude = -73.935242;
  zoom:number;
  address: string;
  private  geoCoder ;


@ViewChild('search')
  public searchElementRef: ElementRef;

   constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }



  ngOnInit() {
//load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    
  }


  private setCurrentLocation() {
      if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
  //  this.latitude = $event.coords.lat;
    //this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results:any, status:any) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}