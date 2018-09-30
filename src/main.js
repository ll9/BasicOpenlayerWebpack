import {
  Map,
  View
} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import MousePosition from 'ol/control/MousePosition';
import {
  createStringXY
} from 'ol/coordinate'
import {
  fromLonLat
} from 'ol/proj.js'

import {defaults as defaultInteractions, Translate} from 'ol/interaction.js';


import SDVectorLayer from './data/layer';

let translate = new Translate({})

translate.on('translateend', evt => {
  evt.features.forEach(feat => {
    console.log(feat);
  })
})


const map = new Map({
  target: 'map',
  interactions: defaultInteractions().extend([translate]),
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    }),
    SDVectorLayer
  ],
  view: new View({
    center: fromLonLat([12.37, 47.81]),
    zoom: 15
  })
});

let mousePosition = new MousePosition({
  coordinateFormat: createStringXY(2),
  projection: 'EPSG:4326',
  target: document.getElementById('myposition'),
  undefinedHTML: '&nbsp;'
});

map.addControl(mousePosition);
