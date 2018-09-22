import VectorSource from 'ol/source/Vector';
import Cluster from 'ol/source/Cluster'
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import { SDSquare, SDCircle } from './style';
import Feature from 'ol/Feature';

let vectorSource = new VectorSource({
    url: "/src/data/geodata.json",
    format: new GeoJSON(),
})

let clusterSource = new Cluster({source: vectorSource})

let vectorLayer = new VectorLayer({
    source: clusterSource,
    style: stylefun //SDSquare
})

/**
 * 
 * @param {Feature} cluster 
 * @param {number} resolution 
 */
function stylefun(cluster, resolution) {
    /**
     * @type {Feature[]} features
     */
    let features = cluster.getProperties().features;

    let occurences = features.map(feature => feature.getProperties().straße)
    let mostFrequent = occurences.sort((a,b) =>
          occurences.filter(v => v===a).length
        - occurences.filter(v => v===b).length
    ).pop();

    if (mostFrequent == "Kampenwandstraße") return [SDSquare]
    else if (mostFrequent == "Scheibenwandstraße") return [SDCircle]
}

export default vectorLayer;