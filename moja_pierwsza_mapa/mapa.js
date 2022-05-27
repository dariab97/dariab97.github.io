$(document).ready(function () {
  let mymap = L.map("mymap", { center: [48.1, 36.0], zoom: 6 });

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

    
    //okodowanie guzika zamykajacego modal
    $('.button_close_modal').click(()=>{
      $(".modalBox_edit").hide();
    });

  // okodowanie onclicka na mapie
  let lat;
  let lng;
  mymap.on("click", (event) => {
    console.group(event.latlng);
    lat = event.latlng.lat;
    lng = event.latlng.lng;
    $("#object_lat").val(lat);
    $("#object_lng").val(lng);
  });
// osługa modala do dddawania
  //okodowanie guzika otwierajacego modala
  $('#button_open_modal').click((event)=>{
    console.log('kliknięte');
    $(".modalBox").show();
});
  //okodowanie guzika zamykajacego modal
  $('.button_close_modal').click(()=>{
    $(".modalBox").hide();
  });
  // okodowanie dodania do listy w pamięci
  $("#data_save").click((event) => {
    event.preventDefault();
    console.log($("#object_id").val());
    dane.push({
      id: $("#object_id").val(),
      date: $("#object_date").val(),
      latitude: $("#object_lat").val(),
      longitude: $("#object_lng").val(),
      location: $("#object_location").val(),
      description: $("#object_description").val(),
      sources: [
        {
          id: 1,
          path: "https://dzienniklodzki.pl",
          description: $("#object_sources").val(),
        },
      ],
    });

    console.log(dane);
    // $(".modalBox").hide();
    $("#modal_do_wprowadzania_danych").empty();
    $("#modal_do_wprowadzania_danych").append(`<h2>Dane wprowadzono!</h2>`);
  });



  let layer_group;
  let filtered = [];
  // generowanie listy wszystkich dat
  // (chodzi tylko o te unikalne czyli tak żeby się nie powtarzały)
  let daty = [...new Set(dane.map((item) => item.date))]; //TUTAJ ZMIANA KOSMETYCZNA (->jeżeli return jest w jednej linijce to wtedy daje się bez return za to w nawiasach okrągłych)

  let raw_marker_list = [];
  for (let item in dane) {
    $("#lista").append(
      // generowanie listy
      `<div class='item'>
        <span class='grubas'>${dane[item].date}</span>
        <div><span class='grubas'>Location: </span>${dane[item].location}</div>
        <div><span class='grubas'>Description: </span>${dane[item].description}<div>
        <a href='#' class= 'link_open_modal'id=${dane[item].id}>Click for more</a>
    </div>`
    );

    // generowanie markerów
    raw_marker_list.push(
      L.circle([dane[item].latitude, dane[item].longitude]).bindPopup(
        `${dane[item].description}`
      )
    );
  }

  let zmienna_na_THIS;
//obsługa modala do eedycji
$('.link_open_modal').click(function () {
  $('.modalBox_edit').show();
  console.log(this.id);              //działa jak wskaźnik, mówi TYY
  zmienna_na_THIS = this.id;
  wynik_filtrowania_do_edycji = dane.filter(function(item){
    return item.id == zmienna_na_THIS;
  });

  // to jest wpisanie przfiltrowanych danych do modala(formularz)
  $('#object_id_edit').val(wynik_filtrowania_do_edycji[0].id);
  $('#object_date_edit').val(wynik_filtrowania_do_edycji[0].date);
  $('#object_latitude_edit').val(wynik_filtrowania_do_edycji[0].latitude);
  $('#object_longitude_edit').val(wynik_filtrowania_do_edycji[0].longitude);
  $('#object_location_edit').val(wynik_filtrowania_do_edycji[0].location);
  $('#object_description_edit').val(wynik_filtrowania_do_edycji[0].description);
  $('#object_sources_edit').val(wynik_filtrowania_do_edycji[0].sources[0].description);
});

// // nadpisywanie danych do zmiennj dane (aktualnosci.js)
 $('#save_edits').click(function(event){   //jeśli ktoś na Ciebie kliknie to..
  event.preventDefault(); // nie odświeżaj się jak ktoś kliknie na guzik jakiś
  dane.forEach((item) => {
    if (item.id == zmienna_na_THIS){
      item.id = $('#object_id_edit').val();
      item.date = $('#object_date_edit').val();
      item.latitude = $('#object_latitude_edit').val();
      item.longitude = $('#object_longitude_edit').val();
      item.location = $('#object_location_edit').val();
      item.description = $('#object_description_edit').val();
      item.sources = $('#object_sources_edit').val();
    }
  });
  console.log(dane);
});

  layer_group?.removeFrom(mymap);
  layer_group = L.layerGroup(raw_marker_list);
  layer_group.addTo(mymap);
  // generowanie listy z wyfiltrowanych danyych
  // najpierw obsługa slaidera
  $("#myRange").replaceWith(
    `<input type="range" min="1" max=${daty.length} value="10" class="slider" id="myRange"/>`
  );

  // ponizej obsługa zdarzenia gdy slaider ulegnie zmienie

  $("#myRange").change((event) => {
    // filtrowanie danych w warunkiem dat
    filtered = dane.filter(function (pojedyncza_dana) {
      return pojedyncza_dana.date == daty[event.target.value];
    });
    let marker_list = [];

    // petla przez dane przefiltrowane
    $("#lista").empty(); //  opróżnienie listy
    for (let item in filtered) {
      $("#lista").append(
        // generowanie listy
        `<div class='item'>
            <span class='grubas'>${filtered[item].date}</span>
            <div><span class='grubas'>Location: </span>${filtered[item].location}</div>
            <div><span class='grubas'>Description: </span>${filtered[item].description}<div>
            <a href='#'>Click for more</a>
      </div>`
      );
      // generowanie markerów
      marker_list.push(
        L.circle([filtered[item].latitude, filtered[item].longitude]).bindPopup(
          `${filtered[item].description}`
        )
      );
    }
    // tu się kończy pętla generująca element listy i listę markerów z filtrowanych danych
    layer_group?.removeFrom(mymap);
    layer_group = L.layerGroup(marker_list);
    layer_group.addTo(mymap);
  }); //koniec generowanie listy z wyfiltrowanych danych
});
