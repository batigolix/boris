L.custom = { // v0.5 - Braije Christophe
    
	init: function(obj,params) {

		// -------------------------------------------------------------
		// INIT MAP OBJECT
		// -------------------------------------------------------------
		// Standard way to create your map object
		// -------------------------------------------------------------

			var map = L.map( obj, {
					"center"		: [48,9],
					"zoom"			: 5
			});

		// -------------------------------------------------------------
		// TILES
		// -------------------------------------------------------------

			var tileLayer = L.wt.TileLayer( [
				{"zoom":0,"map":"osmec"} // graybg - coast -  hypso
			]).addTo(map);

		// -------------------------------------------------------------
		// COUNTRIES
		// -------------------------------------------------------------
			
			// very simple example to demonstrate the relation between NUTS_ID and any server side information.
			var countries_reference = {
				"BE" : "La Belgique est un beau pays ^^",
				"FR" : "La France aussi XD"
			};
			
			var countries_options = { // custom options to defined style and events
				
				insets: true, // set to true to automatically display the outermost region as "mini-map"
				
				style : function(feature){ // custom style each nuts

					return {
						fillColor: "#f93", 
						weight: 1,
						opacity: 1,
						color: "#000",
						dashArray: '0',
						fillOpacity: 0.9
					};
				},

				onEachFeature: function (feature, layer) { // bind events here

					// USED INFORMATION BAR INSTEAD OF POPUP -> "bindInfo" instead of "bindPopup"
						
						var nutsID = feature.properties.NUTS_ID;
						var myText = countries_reference[nutsID]; // from your custom database
						
						layer.bindInfo( "<p><b>"+nutsID+"</b></p><p>"+myText+"</p>" );
						
					// MANAGED HOVER EFFECT OR ANY OTHER EVENTS

						var customEvents = {

							mouseover : function(e){
								
								if ( feature.properties.NUTS_ID === "FR2" ) {

									layer.setStyle({
										fillColor	: "#fff",
										color	: "#a00",
										dashArray	: '1',
										fillOpacity : 0.2
									});

								} 
								else {

									layer.setStyle({
										fillColor	: "#fff",
										color	: "#a00",
										dashArray	: 0,
										fillOpacity : 0.2
									});
								}

							},

							mouseout : function(e){
								if(nuts){
									nuts.resetStyle(e.target);
								}
							}

						};

						layer.on({
							mouseover   : customEvents.mouseover,
							mouseout    : customEvents.mouseout
						});
				}
			};

			var nuts = L.wt.countries([{"level":1, "countries":["IT"]},{"level":0, "countries":["BE","FR","ES","PT"]}], countries_options ).addTo(map);

		// -------------------------------------------------------------	
		// KML (markers)
		// -------------------------------------------------------------
		// TEST CASE (see below)

			var kml_options = { // [5] custom popup + custom marker

				onEachFeature: function(feature,layer) {

					layer.bindInfo( "<p><b>"+feature.properties.name+"</b></p>"+ feature.properties.description );
				},
				color: "red"

			};
			
			var kml = L.wt.markers( [
				"http://europa.eu/webtools/test/data/kml_demo.kml?toto=tutu",
				"unexisting_kml",
				"http://europa.eu/webtools/test/data/geojson.js"
			], kml_options ).addTo(map);
	
			// -------------------------------------------------------------
			// IMPORTANT !!!!
			// -------------------------------------------------------------

				$wt._queue("next"); // process next components

	}
};