import L from 'leaflet';

var iconPerson = L.icon({
    iconUrl: require('./img/map.jpg'),
    // iconUrl: require('./img/a.gif'),
    // shadowUrl: './img/map.png',

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 50], // size of the shadow
    iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [50, 50],  // the same for the shadow
    popupAnchor:  [-25, -50] // point from which the popup should open relative to the iconAnchor
});

export { iconPerson };