import  { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import  ZoomSlider from 'ol/control';

const ZoomSliderControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let ZoomSliderControl = new ZoomSlider();

		map.controls.push(ZoomSliderControl);

		return () => map.controls.remove(ZoomSliderControl);
	}, [map]);

	return null;
};

export default ZoomSliderControl;