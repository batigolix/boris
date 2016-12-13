/**
 * @file
 * Provides custom functionality as input for Webtools' load.js.
 */

L.custom = {
  init: function (obj, params) {

    // Sets variables from Drupal JS settings.
    // var submitted = Drupal.settings.submitted.features;
    // var not_submitted = Drupal.settings.not_submitted.features;
    // var winners = Drupal.settings.winners.features;
    var settings = Drupal.settings.award_map_settings;

console.log(Drupal.settings);


    obj.style.minHeight = "500px";

    // Creates map object.
    var map = L.map(obj, {
      "center" : [48,9],
      "zoom" : 4,
      "minZoom": 3,
      "maxZoom": 8,
      "dragging": true,
      "touchZoom": true,
      "scrollWheelZoom": true
    });
    L.wt.tileLayer("graybg", {attribution: Drupal.settings.mapeditor_map.attribution}).addTo(map);

    // Defines options for the L.wt.countries method.
    var country_options = {
      style : function (feature){
        return {
          color: "#0065B1",
          dashArray: 0,
          fillColor: "#C8E9F2",
          fillOpacity: 0.9,
          opacity: 1,
          smoothFactor: 1.5,
          weight: 1
        };
      },
      label : true,
    }
    L.wt.countries([{"level":0, "countries":["EU28"]}], country_options).addTo(map);


    var kml = L.wt.markers( ["http://europa.eu/webtools/showcase/demo/map/data/kml_demo.kml"],{
      color:"orange",
      cluster: false
    }).addTo(map);

    var kml2 = L.wt.markers( ["https://ec.europa.eu/digital-single-market/awards-map/submitted"],{
      color:"pink",
      cluster: false
    }).addTo(map);

    //


    // Defines layer submitted projects.
    // var markers_options = {"color": 'turquoise', "cluster": true}
    // markers_options.onEachFeature = function (feature, layer) {
    //   layer.bindInfo("<h3>" + feature.properties.name + "</h3><p>" + feature.properties.description + "</p>");
    // }
    // var submitted_layer = L.wt.markers({"type":"FeatureCollection","features":submitted}, markers_options);
    // submitted_layer.addTo(map);

    // // Defines layer winning projects.
    // var markers_options = {"color": 'pink', "cluster": false}
    // markers_options.onEachFeature = function (feature, layer) {
    //   layer.bindInfo("<h3>" + feature.properties.name + "</h3><p>" + feature.properties.description + "</p>");
    // }
    // var winners_layer = L.wt.markers({"type":"FeatureCollection","features":winners}, markers_options);
    // winners_layer.addTo(map);

    // // Defines layer not submitted projects.
    // var markers_options = {"color": 'blue', "cluster": true}
    // markers_options.onEachFeature = function (feature, layer) {
    //   layer.bindInfo("<h3>" + feature.properties.name + "</h3><p>" + feature.properties.description + "</p>");
    // }
    // var not_submitted_layer = L.wt.markers({"type":"FeatureCollection","features":not_submitted}, markers_options);
    // not_submitted_layer.addTo(map);

    // Creates layer switcher.
    // var layersControl = [
    //     {
    //       "label" : settings.layer_switch_title,
    //       "checkbox": [
    //         {"label" : settings.winners_layer_title, "layer" : winners_layer },
    //         {"label" : settings.submitted_layer_title, "layer" : submitted_layer },
    //         {"label" : settings.not_submitted_layer_title, "layer" : not_submitted_layer }
    //       ]
    //     },
    //     {
    //       "label" : settings.award_panel_title,
    //       "xhtml": Drupal.settings.award_panel_body
    //     }
    //   ];
    // var layers_panel = L.wt.sidebar({
    //   "layers": {
    //     "tooltip": "Layers",
    //     "panel": layersControl,
    //     "display": settings.award_panel_visible
    //   }
    // });
    // layers_panel.addTo(map);

    // Processes next components.
    $wt._queue("next");
  }
};
