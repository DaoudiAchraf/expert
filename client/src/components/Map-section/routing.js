import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import 'leaflet-routing-machine/src';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import {Component} from "react";

class RoutingMachine extends MapLayer {
    createLeafletElement (props) {
        const { color, map, from,to } = this.props;
        // console.log("Route computation: ", road);
        let leafletElement = L.Routing.control({
            waypoints: [
                L.latLng(from),
                L.latLng(to),
            ],
            lineOptions: {
                styles: [{
                    color,
                    opacity: .8,
                    weight: 6
                }]
            },
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            showAlternatives: false
            //createMarker: () => { return null; }
        }).addTo(map.leafletElement);
         // hide road describtion
        leafletElement.hide();
        console.log(leafletElement);
        return leafletElement.getPlan();
    }
}

export default withLeaflet(RoutingMachine);
