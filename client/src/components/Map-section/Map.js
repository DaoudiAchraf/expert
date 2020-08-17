import React, { useEffect } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import RoutingMachine from './routing';
import ReactLeafletSearch from "react-leaflet-search";
import "./Map.scss";
import axiosInstance from "../../config/axios-instance";
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";



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
    return (
        <Container className="posts-page">
            <Row className="row">
                <Map className="test map" center={[35.8, 10.6]} zoom={9} ref={saveMap} onClick={handleClick}>
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
