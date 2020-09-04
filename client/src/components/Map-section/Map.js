import React, { useEffect, useRef } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import RoutingMachine from './routing';
import { Popover, Popconfirm } from 'antd';
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


const ExpertMap = (props) => {
    const pop = useRef();
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
    const pos = [36.807146, 10.145529];

    const result = () => {
        const res = document.getElementsByClassName("search-control-info-list")
        console.log(res);
    }
    return (
        <Container className="posts-page">
            <Row className="row">
                <Map onClick={e => console.log("test", e)} className="test map" center={props.center} zoom={9} ref={saveMap}>
                    {!tosatilite ?
                        <TileLayer
                            url='https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        :
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
                    {props.profiles.map((p, index) => (
                        <Marker key={index} position={[p.location.longitude, p.location.latitude]} onMouseOver={(e) => {
                            console.log('enter', pop.current)
                            e.target.openPopup();
                        }}
                            onMouseOut={(e) => {
                                console.log('close')
                            }}>
                            <Popup>
                                <div className="popup-expert-infos">
                                    <img src={iconPerson} />
                                    <h3>{p.user.login}</h3>
                                    <p>{p.location.name}</p>
                                </div>
                                <div className="btn-actions">
                                    <button className="Directions">
                                        Directions
                                </button>
                                    <button className="Call">
                                        Call
                                </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                    }

                    {/* <ReactLeafletSearch closeResultsOnClick={true} zoom={14} showMarker={false} className="custom-style" position="topleft" /> */}
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
