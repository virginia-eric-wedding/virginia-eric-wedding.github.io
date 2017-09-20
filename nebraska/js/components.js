var app = angular.module('GalleryApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider) { 
  //create our different views as objects
  var mainState ={
    name: 'home', //name of the object
    url: '/', //url to point to, or that causes this view to be triggered
    component: 'home'
  },directionsState = {
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
  }
  //call the states
  $stateProvider.state(mainState); 
  $stateProvider.state(directionsState);
  $stateProvider.state(hotelState);
  $stateProvider.state(giftsState);
  $stateProvider.state(rsvpState); 
})


app.component('home', {
  bindings: { data: '<'}, //make the data we loaded into the view from the factory available to this component
  templateUrl: 'views/home.html', //this is the html that we will plug our data into
  controller: function () {
  }
});


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

