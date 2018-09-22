import VectorSource from 'ol/source/Vector';
import Cluster from 'ol/source/Cluster'
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import { SDCircle } from './style';

let vectorSource = new VectorSource({
    url: "/src/data/geodata.json",
    format: new GeoJSON(),
})

let clusterSource = new Cluster({source: vectorSource})

let vectorLayer = new VectorLayer({
    source: clusterSource,
    style: SDCircle
})

export default vectorLayer;