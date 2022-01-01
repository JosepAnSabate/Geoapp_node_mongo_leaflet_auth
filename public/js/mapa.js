mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg';

const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [1.8, 41.3], // starting position [lng, lat]
zoom: 7 // starting zoom
});