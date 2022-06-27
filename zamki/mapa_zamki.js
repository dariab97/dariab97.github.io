$(document).ready(function () {
  // gdy będzie gotowa cała strona, później wczytaj mape

  let mymap = L.map("mymap", { center: [52.1, 21.0], zoom: 10 });

  let adresOSM = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
    // dodanie własnych danych
    let mojeDane = L.tileLayer.wms("http://127.0.0.1:8080/geoserver/prge/wms", {
      layers: "prge:województwa",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    });

  // obsługa warstw
  let baseMaps = {
    "dane z OSM": adresOSM,
    "moje dane": mojeDane,
  };
  L.control.layers(baseMaps).addTo(mymap);

  mymap.addLayer(adresOSM);
  // deklarowanie warstwy

  // let filtered = [];
  // $("#zamki_filter").change((event) => {
  //   event.preventDefault();
  //   console.log(event.target.value)});
  //     filtered = dane.filter(function(pojedyncza_dana) {
  //   return pojedyncza_dana.id == id[event.target.value];
  // });
  
  //   for (let item in dane) console.log(dane[item].id);

  // pętla przez dane
  $("#lista").empty();
  for (let item in dane) {
    $("#lista").append(
      // generowanie listy
      `<div class='item'>
              <span class='grubas'>${dane[item].name}</span>
              <div><span class='grubas'>Lokalizacja: </span>${dane[item].location}</div>
              <div><span class='grubas'>Opis: </span>${dane[item].description}</div>
              <a href='#'>Click for more</a>
              </div>`
    );
    // generowanie markerow
    // zdefiniowanie rozmiaru i ścieżki do niestandardowej ikony markera
    var iconOptions = {
      iconUrl: "../img/zamek.png",
      iconSize: [20, 20],
    };
    // utworzenie markera za pomocą określonych paramterów
    var customIcon = L.icon(iconOptions);

    // Creating Marker Options
    var markerOptions = {
      title: "Lokalizacja zamku",
      clickable: true,
      draggable: true,
      icon: customIcon,
    };
    // zdefiniowanie lokalizacji markera
    var marker = L.marker(
      [dane[item].latitude, dane[item].longitude],
      markerOptions
    );

    // Dodawanie wyskakującego okienka do znacznika
    marker.bindPopup(`${dane[item].name}`).openPopup();
    marker.addTo(mymap);

    // L.marker (
    //   [
    //   dane[item].latitude,
    //   dane[item].longitude])
    //   .bindPopup(`${dane[item].description}`)
    //   .addTo(mymap)
    }
});
