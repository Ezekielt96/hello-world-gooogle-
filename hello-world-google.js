var gMap;
var map;
function initApplication() {
    console.log('Hello-world-google Starting...');
}
var map;
function initMap() {
    var Chicago= {lat: 	41.881832, lng: -87.623177};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: Chicago 
    });
    var marker = new google.maps.Marker({
      position: Chicago,
      map: map,
      title: 'Hello World!-Chicago'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Change the zoom level',
        position: Chicago
    });
    infowindow.open(map);
    map.addListener('zoom_changed', function() {
        infowindow.setContent('Zoom: ' + map.getZoom());
        console.log('Verify the zoom is working')
    });
}
function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Chicago IL s in the currently displayed map
    if (gMap.getBounds().contains({lat:41.881832, lng: -87.623177})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
///Need to add get bounds to confirm chicago is within bounds 
 
