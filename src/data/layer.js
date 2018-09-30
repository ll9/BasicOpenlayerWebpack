import {Cluster, Vector} from 'ol/source'
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';

import { SDstyleCluster, SDSquare } from './style';


export let vectorSource = new Vector({
    url: "/src/data/geodata.json",
    format: new GeoJSON(),
})

let clusterSource = new Cluster({source: vectorSource})

let vectorLayer = new VectorLayer({
    source: clusterSource,
    style: SDstyleCluster //SDSquare
})


export default vectorLayer;