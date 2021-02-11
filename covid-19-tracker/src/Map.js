import React,{useState,useEffect} from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from './utils';


function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({countries, casesType, center, zoom, theme}) {
	const [url, setUrl] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
	
	return (
		<div className={`map ${theme==='dark' && "map--dark"} `}>
			<MapContainer  scrollWheelZoom={false}>
				<ChangeMap center={center} zoom={zoom} />
				<TileLayer
					
				url={theme==='light'?("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
					:('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png')}
          			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          			/>
          		{showDataOnMap(countries, casesType)}
			</MapContainer>
		</div>
	)
}

export default Map;