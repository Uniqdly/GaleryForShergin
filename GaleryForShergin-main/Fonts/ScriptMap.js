function initMap() {
  // Создание объекта карты и указание элемента, в котором он должен быть отображен
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}