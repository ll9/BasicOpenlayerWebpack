import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import vectorLayer from './data/layer';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    }),
    vectorLayer
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

