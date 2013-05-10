/* global google: true */

$(function () {
  if (!$('.map-canvas')[0]) return
  var position = new google.maps.LatLng(51.262809,-1.081359)
  var mapOptions = {
    center: position,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggable: true
  };

  var map = new google.maps.Map($('.map-canvas')[0], mapOptions)
    , marker = new google.maps.Marker(
      { map: map
      , position: position
      })
})
