import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';

let vectorSource = new VectorSource({
    url: "/src/data/geodata.json",
    format: new GeoJSON()
})

let vectorLayer = new VectorLayer({
    source: vectorSource
})

export default vectorLayer;