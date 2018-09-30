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

function isCluster(feature) {
    if (!feature || !feature.get('features')) {
        return false;
    }
    return true;
    // return feature.get('features').length > 1;
}

/**
 * 
 * @param {Feature} feature 
 * @param {number} resolution 
 */
export function SDstyleCluster(feature, resolution) {
    /**
     * @type {Feature[]} features
     */

     let mostFrequent;
    if (isCluster(feature)) {
        let features = feature.getProperties().features;

        let occurences = features.map(feature => feature.getProperties().straße)
        mostFrequent = occurences.sort((a, b) =>
            occurences.filter(v => v === a).length -
            occurences.filter(v => v === b).length
        ).pop();
    }
    else {
        mostFrequent = feature.getProperties().straße;
    }

    if (mostFrequent == "Kampenwandstraße") return [SDSquare]
    else if (mostFrequent == "Scheibenwandstraße") return [SDCircle]
    else return [SDCircle]
}