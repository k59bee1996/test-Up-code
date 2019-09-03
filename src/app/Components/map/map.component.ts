import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    constructor() {

    }
    ngOnInit() {
        var w = 500,
        h = 500,
        url = 'http://kempe.net/images/newspaper-big.jpg';

        const map = L.map('map',{
            minZoom: 1,
            maxZoom:4,
            center:[-h/2,w/2],
            zoom:1,
            crs: L.CRS.Simple
        });
        
        var bounds = new L.LatLngBounds(L.latLng(-h/2,0), L.latLng(0,w/2));

        L.imageOverlay(url, bounds).addTo(map);
        map.fitBounds(bounds);
        // tell leaflet that the map is exactly as big as the image
        map.setMaxBounds(bounds);
        
    }
}