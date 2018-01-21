var app = angular.module('GalleryApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider) { 
  //create our different views as objects
  var directionsState = {
    name: 'directions', //create the right hand info panel as an object/child of the main view
    url: '/directions', //point to this url when this view is triggered
    component: 'directions'
  },hotelState = {
    name: 'hotel', //create the right hand info panel as an object/child of the main view
    url: '/hotel', //point to this url when this view is triggered
    component: 'hotel'
  },giftsState = {
    name: 'gifts', //create the right hand info panel as an object/child of the main view
    url: '/gifts', //point to this url when this view is triggered
    component: 'gifts'
  },rsvpState = {
    name: 'rsvp', //create the right hand info panel as an object/child of the main view
    url: '/rsvp', //point to this url when this view is triggered
    component: 'rsvp'
  },infoState = {
    name: 'info', //create the right hand info panel as an object/child of the main view
    url: '/info', //point to this url when this view is triggered
    component: 'info'
  }
  //call the states
  $stateProvider.state(directionsState);
  $stateProvider.state(hotelState);
  $stateProvider.state(giftsState);
  $stateProvider.state(rsvpState); 
  $stateProvider.state(infoState); 
})


app.component('directions', {
  templateUrl: 'views/directions.html',
  bindings: { data: '<' },      
  controller: function () {
    console.log(this)
    //banner click to return to
  }
})
app.component('hotel', {
  templateUrl: 'views/hotel.html',
  bindings: { data: '<' },      
  controller: function () {
    console.log(this)
    //banner click to return to
  }
})
app.component('gifts', {
  templateUrl: 'views/gifts.html',
  bindings: { data: '<' },      
  controller: function () {
    console.log(this)
    //banner click to return to
  }
})
app.component('rsvp', {
  templateUrl: 'views/rsvp.html',
  bindings: { data: '<' },      
  controller: function () {
    console.log(this)
    //banner click to return to
  }
})
app.component('info', {
  templateUrl: 'views/info.html',
  bindings: { data: '<' },      
  controller: function () {
    console.log(this)
    //banner click to return to
  }
})

