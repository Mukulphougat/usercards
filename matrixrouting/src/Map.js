import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import {useEffect, useRef, useState} from "react";

export default function Map() {
    let mapElement = useRef();
    const [map,setMap] = useState({});
    useEffect(()=>{
        let map = tt.map({
            "key": process.env.Api_key,
            "container": mapElement.current,
        });
        setMap(map);
    }, [mapElement]);

    return (
        <div ref={mapElement} className="map" key={23}></div>
    )
}