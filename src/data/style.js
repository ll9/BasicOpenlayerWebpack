import {
    Style,
    RegularShape,
    Fill,
    Stroke
} from 'ol/style'


const stroke = new Stroke({color: 'white', width: 2});
const fill = new Fill({color: 'blue'});

export const SDCircle = new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 100,
            radius: 10,
            angle: 0
        })
    });