import {
    Style,
    RegularShape,
    Fill,
    Stroke
} from 'ol/style'


const stroke = new Stroke({
    color: 'white',
    width: 2
});
const fill = new Fill({
    color: 'blue'
});

export const SDCircle = new Style({
    image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 100,
        radius: 10,
        angle: 0
    })
});

export const SDSquare = new Style({
    image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 4,
        radius: 10,
        angle: 0
    })
});

/**
 * 
 * @param {Feature} cluster 
 * @param {number} resolution 
 */
export function SDstyleCluster(cluster, resolution) {
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