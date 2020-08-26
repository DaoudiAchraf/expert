import React, { useEffect } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import RoutingMachine from './routing';
import ReactLeafletSearch from "react-leaflet-search";
import "./Map.scss";
import axiosInstance from "../../config/axios-instance";
import iconPerson from '../../icon/Capture.PNG';
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";


class CustomOpenStreetMap {
    constructor(options = { providerKey: null, searchBounds: [] }) {
        let { providerKey, searchBounds } = options;
        //Bounds are expected to be a nested array of [[sw_lat, sw_lng],[ne_lat, ne_lng]].
        // We convert them into a string of 'x1,y1,x2,y2' which is the opposite way around from lat/lng - it's lng/lat
        let boundsUrlComponent = "";
        let regionUrlComponent = "";
        if (searchBounds.length) {
            const reversed = searchBounds.map((el) => { return el.reverse() });
            this.bounds = [].concat([], ...reversed).join(",");
            boundsUrlComponent = `&bounded=1&viewbox=${this.bounds}`;
        }
        if ('region' in options) {
            regionUrlComponent = `&countrycodes=${options.region}`;
        }
        console.log('bounds', boundsUrlComponent);
        console.log('region', regionUrlComponent)
        this.url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&polygon_svg=1&namedetails=1${boundsUrlComponent}${regionUrlComponent}&q=`;
    }

    async search(query) {
        // console.log(this.url + query)
        console.log("achref", query);
        const response = await fetch(this.url + query)
            .then(res => res.json());
        console.log("first fetch", response);
        return this.formatResponse(response)
    }

    formatResponse(response) {
        const resources = response;
        const count = response.length;
        const info = (count > 0) ? resources.map(e => ({
            bounds: e.boundingbox.map(bound => Number(bound)),
            latitude: 0,
            longitude: 0,
            name: 'deneme 1',
        })) : 'Not Found';
        console.log("after fetch", response, info);
        return {
            info: info,
            raw: response
        }
    }

}





const ExpertMap = (props) => {
    useEffect(() => {
    }, []);

    const [position, setPosition] = React.useState(null);
    const [positionF, setPositionF] = React.useState(null);
    const [fromPlace, setFromPlace] = React.useState("");
    const [toPlace, setToPlace] = React.useState("");
    const [showMap, setShowMap] = React.useState(false);
    const [tosatilite, setTosatilite] = React.useState(false);
    const [map, setMap] = React.useState(null);
    const [nb, setNB] = React.useState(0);

    let provider = new CustomOpenStreetMap();
    const customProvider = {
        search: async (inputValue) => {
            console.log(inputValue)
            return {
                // info,
                // raw
            }
        }
    }

    const handleClick = e => {
        if (nb < 2) {
            console.log(e.latlng.lat);
            axiosInstance({
                method: "get",
                url: 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + e.latlng.lat + '&lon=' + e.latlng.lng
            }).then(res => {
                console.log(res.data);
                if (nb % 2 == 0) {
                    setPositionF(e.latlng);
                    !res.data.name ? setFromPlace(res.data.display_name) : setFromPlace(res.data.name + ' ' + res.data.display_name.split(',')[0]);
                    setNB(nb + 1);
                } else {
                    setPosition(e.latlng);
                    !res.data.name ? setToPlace(res.data.display_name) : setToPlace(res.data.name);
                    setNB(nb + 1);
                }
            }).catch(err => {
            });
        }
    };

    const handleC = () => {
        if (showMap) {
            setShowMap(false);
        } else {
            setShowMap(true);
            setTosatilite(false);
        }
    };
    const handleSwitch = () => {
        showMap ? tosatilite ? setTosatilite(false) : setTosatilite(true) : setTosatilite(false);
    };
    const saveMap = map => {
        setMap(map);
    };
    const pos = [36.807146, 10.145529,];

    const result = () => {
        const res = document.getElementsByClassName("search-control-info-list")
        console.log(res);
    }
    return (
        <Container className="posts-page">
            <Row className="row">
                <Map onClick={e => console.log("test", e)} className="test map" center={pos} zoom={9} ref={saveMap} onClick={handleClick}>
                    {!tosatilite ? <TileLayer
                        url='https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    /> :
                        <div>
                            <TileLayer
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Skander data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <TileLayer
                                url='https://maps.heigit.org/openmapsurfer/tiles/hybrid/webmercator/{z}/{x}/{y}.png'
                                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            />
                        </div>}
                    {position != null ? <Marker position={[position.lat, position.lng]} /> : ""}
                    {positionF != null && position == null ? <Marker position={[positionF.lat, positionF.lng]} /> : ""}
                    <Marker position={pos}>
                        <Popup>
                            <div className="popup-expert-infos">
                                <img src={iconPerson} />
                                <h3>Malek</h3>
                                <p>Fouchana Cité prime</p>

                            </div>
                            <div className="btn-actions">
                                <button>
                                    Directions
                                </button>
                                <button>
                                    Call
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                    <ReactLeafletSearch closeResultsOnClick={true} zoom={14} showMarker={false} className="custom-style" position="topleft" />
                    {map != null && position != null ? <RoutingMachine
                        color="#DC143C"
                        map={map}
                        //road={this.props.road}
                        from={positionF} to={position}
                    /> : ""}
                </Map>
            </Row>
        </Container>
    );
};
export default ExpertMap;
