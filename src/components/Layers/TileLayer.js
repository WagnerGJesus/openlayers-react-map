import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";
import { xyz } from "../Source";

const TileLayer = ({ source, zIndex = 0 }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let tileLayer = new OLTileLayer({
			preload: Infinity,
      source: new xyz({
        url: `https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=FvYRDmJtxYxB4F0iSSDE`,
        maxZoom: 20
      }),
			zIndex,
      name: 'TileMap'
		});

		map.addLayer(tileLayer);
		tileLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(tileLayer);
			}
		};
	}, [map, source, zIndex]);

	return null;
};

export default TileLayer;
