import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import {  FService, FriendlyServicesService } from 'src/app/services/friendly.services.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

export interface Marker{

  position: {
    lat: any;
    lng: any;
  },
  label?: {
    readonly color?: 'red';
    text: string;
  },
  title:string;
  readonly options?: { animation: google.maps.Animation.BOUNCE };
  info?:any;
}

@Component({
  selector: 'app-friendly-services',
  templateUrl: './friendly-services.component.html',
  styleUrls: ['./friendly-services.component.scss'],
  providers: [NgbActiveModal]
})
export class FriendlyServicesComponent implements OnInit, AfterViewInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  @ViewChild('addresstext') addresstext: ElementRef;
  @ViewChild('opinionRate') opinionRate:TemplateRef<any>;

  clientIp:string;
  selectedCity:string;
  markers:Marker[] = [];
  infoContent:FService;
  distanceInKmFromPosition:any;
  services:FService[] = [];
  zoom = 15;
  autocompleteInput:string;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
  };
  
  constructor(
    private http:HttpClient,
    private modal:NgbModal,
    private _service:FriendlyServicesService,
    public activeModal: NgbActiveModal) { }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  ngOnInit(): void {
    this.loadServices();
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      const center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.servicesRange(center,10);
    });
    this._service.getClientIp().subscribe(
      res => {
        this.clientIp = res;
      }
    );
  }

  onCenterChange(event:any){
    
  }

  onZoomChanged(){
    if(this.map){
      const center = new google.maps.LatLng(this.center.lat, this.center.lng);
      this.servicesRange(center,20);
    }
  }

  openInfo(content:any, info:any) {
    this.infoContent = info;
    navigator.geolocation.getCurrentPosition(position => {
      const center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      const markerLoc = new google.maps.LatLng(this.infoContent.coordinates.Rc, this.infoContent.coordinates.Ac);
      this.distanceInKmFromPosition = google.maps.geometry.spherical.computeDistanceBetween(markerLoc,center ) / 1000;
    });
    this.modal.open(content);
  }

  close(){
    this.infoContent = null;
    this.distanceInKmFromPosition = 0;
    this.modal.dismissAll();
  }

  rateService(rate:number){
    this._service.rate_service(this.infoContent.unit_name,rate,this.clientIp).then(
      () => {
        this.modal.open(this.opinionRate);
      }
    );
  }

  private loadServices(){
    this.http.get("../assets/contents/servicios.data.json").subscribe(
      (data:any) => this.services = data.data
    );
    //this.services = ServicesData.data;
  }

  private servicesRange(center:any,range:number){
    this.markers = [];
    this.services.forEach(
      service => {
        const markerLoc = new google.maps.LatLng(service.coordinates.Rc, service.coordinates.Ac);
        const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc,center ) / 1000;
        if(distanceInKm < range){
          const marker:Marker = {
            position: {
              lat: service.coordinates.Rc,
              lng: service.coordinates.Ac
            },
            title: service.unit_name,
            info: service
          }
          this.markers.push(marker);
        }
      }
    );
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
            componentRestrictions: { country: 'MX' },
            types: ["address"]  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.center = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        this.map.center = this.center;
    });
  }
}
