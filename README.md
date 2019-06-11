# weatherapp
A live weather app with a leaflet map

Go **[here](https://nameless-castle-27658.herokuapp.com/)** for live demo.

This is a simple website developed entirely on NodeJS. We use the ExpressJS framework and ejs templates for the views which are responsive.
The Sign-In, Sign-Up is set up with a Mongo DB, and the weather information is collected thanks to the [openweathermap API](https://openweathermap.org/) for live forecast.(the API request here will collect the information in french, you can customize this in your request).

The user's cities are saved on a Mongo DB, and the entire back-end is organised accordingly with MVC.

The map is provided by [Leaflet](https://leafletjs.com/) and will display a marker on the city entered by the user.

This is a very cool project to develop to get acquainted with APIs and simple DB requests.


**Screenshots:**
* Login screen:


![weatherapp1](https://i.ibb.co/7gWZjQr/weatherapp1.png)

* Home screen:


![weatherapp2](https://i.ibb.co/fqwmL0v/weatherapp2.png)

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Bootstrap](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Leaflet](https://leafletjs.com/) - Leaflet is a an open-source JavaScript library for mobile-friendly interactive maps
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [mlab](https://mlab.com/) a MongoDB hosting service
