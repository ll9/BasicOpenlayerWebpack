import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import { SDCircle } from './style';

let vectorSource = new VectorSource({
    url: "/src/data/geodata.json",
    format: new GeoJSON(),
})

let vectorLayer = new VectorLayer({
    source: vectorSource,
    style: SDCircle
})

export default vectorLayer;