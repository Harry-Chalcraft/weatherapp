//This is where we initialise the map and receive the coordiantes of the cities 
var mymap = L.map('worldmap',{
  center: [48.866667, 2.333333],
  zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var cities = document.getElementsByClassName('list-group-item');

for (var i = 0; i < cities.length; i++) {
  var name = cities[i].dataset.cityname
  var lon = cities[i].dataset.lon
  var lat = cities[i].dataset.lat
  L.marker([lat, lon]).addTo(mymap).bindPopup(name);
}
