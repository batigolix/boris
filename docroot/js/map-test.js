/* DATA STRUCTURE */
var data = {
	"CV": {
		"name": {
			"en": "Cape Verde"
		},
		"expiry": "22.12.2018",
		"type": "tuna",
		"total": "550 000 &euro; /<br />500 000 &euro;",
		"earmark": "275 000 &euro; /<br />250 000 &euro;",
		"link": "cape_verde"
	},
	"KM": {
		"name": {
			"en": "Comoros"
		},
		"expiry": "31.12.2016",		
		"type": "tuna",		
		"total": "600 000 &euro;",					
		"earmark": "300 000 &euro;",
		"link": "comoros"
	},
	"CI": {	
		"name": {
			"en": "Ivory Coast"
		},
		"expiry": "30.06.2018",		
		"type": "tuna",		
		"total" : "680 000 &euro;",					
		"earmark": "257 500 &euro;",
		"link": "cote_d_ivoire"
	},
	"GA": {
		"name": {
			"en": "Gabon"
		},
		"expiry": "27.07.2016",		
		"type": "tuna",		
		"total": "1 350 000 &euro;",				
		"earmark": "450 000 &euro;",
		"link": "gabon"
	},
	"GL": {
		"name": {
			"en": "Weenland"
		},
		"expiry": "31.12.2015",		
		"type": "mixed",		
		"total": "17 847 244 &euro;",
		"earmark": "2 743 041 &euro;",
		"link": "greenland"
	},
	"GW": {
		"name": {
			"en": "Guinea-Bissau"
		},
		"expiry": "23.11.2017",
		"type": "mixed",
		"total": "9 200 000 &euro;",
		"earmark": "3 000 000 &euro;",
		"link": "guinea_bissau"
	},
	"KI": {
		"name": {
			"en": "Kiribati"
		},
		"expiry": "15.09.2015",
		"type": "tuna",
		"total": "1 325 000 &euro;",
		"earmark": "350 000 &euro;",
		"link": "kiribati"
	},
	"LR": {
		"name": {
			"en": "Liberia"
		},
		"expiry": "5 years",
		"type": "tuna",
		"total": "715 000 &euro /<br />650 000 &euro /<br />585 000 &euro;",
		"earmark": "357 500 &euro; /<br />352 000 /<br />292 500 &euro;",
		"link": "liberia"
	},
	"MG": {
		"name": {
			"en": "Madagascar"
		},
		"expiry": "31.12.2018",
		"type": "tuna",
		"total": "1 566 250 &euro; /<br />1 487 500 &euro;",
		"earmark": "700 000 &euro;",
		"link": "madagascar"
	},
	"MR": {
		"name": {
			"en": "Mauritania"
		},
		"expiry": "4 years",
		"type": "mixed",
		"total": "59 125 000 &euro;",
		"earmark": "4 125 000 &euro;",
		"link": "mauritania"
	},
	"MU": {
		"name": {
			"en": "Mauritius"
		},
		"expiry": "27.01.2017",
		"type": "tuna",
		"total": "660 000 &euro;",
		"earmark": "302 500 &euro;",
		"link": "mauritius"
	},
	"FM": {
		"name": {
			"en": "Micronesia"
		},
		"additional": {
			"en": "No protocol in force since 25.2.2010"
		},
		"link": "micronesia"
	},
	"MA": {
		"name": {
			"en": "Morocco"
		},
		"expiry": "27.02.2015",
		"type": "mixed",
		"total": "30 million &euro;",
		"earmark": "14 million &euro;",
		"link": "morocco"
	},
	"MZ": {
		"name": {
			"en": "Mozambique"
		},
		"additional": {
			"en": "Protocol expired on 31 January 2015"
		},
		"link": "mozambique"
	},
	"ST": {
		"name": {
			"en": "Sao Tome and Principe"
		},
		"expiry": "22.05.2018",
		"type": "tuna",
		"total": "710 000 &euro /<br />675 000&euro;",
		"earmark": "325 000 &euro;",
		"link": "sao_tome"
	},
	"SN": {
		"name": {
			"en": "Senegal"
		},
		"expiry": "19.11.2019",
		"type": "tuna",
		"total": "1 808 000 &euro;/<br />1 668 000 &euro;",
		"earmark": "750 000 &euro;",
		"link": "senegal"
	},
	"SC": {
		"name": {
			"en": "Seychelles"
		},
		"expiry": "17.01.2020",
		"type": "tuna",
		"total": "5 350 000 &euro in 2014<br />to 5 000 000 in 2019",
		"earmark": "2 600 000 &euro;",
		"link": "seychelles"
	},
	"SB": {
		"name": {
			"en": "Solomon Islands"
		},
		"additional": {
			"en": "No protocol in force since 09.10.2012"
		},
		"link": "solomon_islands"
	},
	"FO": {
		"name": {
			"en": "Faroe Islands"
		},
		"additional": {
			"en": "Northern Agreement<br />Period 2006 - 2012"
		},
		"type": "northern",
		"link": "faeroe_islands"
	},
	"NO": {
		"name": {
			"en": "Norway"
		},
		"additional": {
			"en": "Northern Agreement<br />Period 2009 - 2015"
		},
		"type": "northern",
		"link": "norway"
	}
};
/* END DATA STRUCTURE */

/* TRANSLATIONS SET */
var trans = {
	"expiry": {
		"en": "Expiry date"
	},
	"type": {
		"en": "Type"
	},
	"total": {
		"en": "Total contribution from the EU budget per year"
	},
	"earmark": {
		"en": "Earmarked for fisheries policy development"
	},
	"tuna": {
		"en": "Tuna agreement"
	},
	"mixed": {
		"en": "Multi-species agreement"
	},
	"northern": {
		"en": "Northern"
	}
}

/* END TRANSLATIONS SET */

var curlang = document.lang;

function getTrans(key) {
	if ( trans[key][curlang] ) {
		return trans[key][curlang];
	} else if ( trans[key].en ) {
		return trans[key].en;
	} else {
		return key;
	}
}


L.custom = { 
	init: function(obj,params) {
		
		obj.style.minHeight = "700px";
		
		var map = L.map( obj, {
			"center":[30,9],
			"zoom":2,
			"maxZoom":7, 
			"minZoom": 1,
			"maxBounds":[[-135, -270],[135, 270]]
		});
		
		var tileLayer = L.wt.tileLayer().addTo(map);
		
		function getColor(CNTR_ID) {
			if ( data[CNTR_ID] && data[CNTR_ID].type ) {
				if ( data[CNTR_ID].type === "tuna" ) {
					return "#FFC7CE";
				} else if ( data[CNTR_ID].type === "mixed" ) {
					return "#C6EFCE";
				} else if ( data[CNTR_ID].type === "northern" ) {
					return "#FFEB9C";
				}
			}
			return "#BBBBBB";
		}
		
		var country_options = { // custom options to defined style and events
			
			label : true,
			
			style: function(feature){
				var opacity = 1;
				if (typeof feature.properties.type != "undefined") {
					opacity = 0.4;
				}
				return {
					fillColor: getColor(feature.properties.CNTR_ID),
					weight: 1,
					opacity: 1,
					color: "#fff",
					dashArray: '0',
					fillOpacity: opacity
				};
			},
			
			onEachFeature: function (feature, layer) {
				country = feature.properties.CNTR_ID;
				if ( data[country] ) {
					var info = "<b>" + data[country].name.en + "</b>";
					if ( data[country].name[curlang] ) {
						info = "<b>" + data[country].name[curlang] + "</b>";
					}
					if ( data[country].additional ) {
						info += "<hr /><br />";
						if ( data[country].additional[curlang] ) {
							info += data[country].additional[curlang];
						} else {
							info += data[country].additional["en"];
						}
					} else {
						info += "<hr /><br /><b>"+getTrans("expiry")+"</b>:<br/>" + data[country].expiry;
						info += "<br /><br /><b>"+getTrans("total")+"</b>:<br/>" + data[country].total;
						info += "<br /><br /><b>"+getTrans("earmark")+"</b>:<br/>" + data[country].earmark;
						info += "<br /><br /><b>"+getTrans("type")+"</b>:<br />" + getTrans(data[country].type);
					}
					info += "<br /><br /><a href='" + data[country].link + "/index_en.htm'>Fisheries partnership agreement</a>";
				} else {
					info = country;
				}
				layer.bindPopup( "<p>" + info + "</p>");
			}
		};
		
		countries =[];
		
		for (var k in data) {
			countries.push(k);
		};
		
		var eu_countries = L.wt.countries([{"level":0,"countries":countries}],country_options).addTo(map);
		
		/* MARITIME ZONE
		$wt.jsonp("https://webgate.acceptance.ec.europa.eu/fpfis/webtools/corvela/maps/mare-frid/SFPA_EEZ.geojson", function( json, error ) {
			L.geoJson(json, country_options).addTo(map);
		});
		 */
		
		$wt._queue("next"); // process next components
		
	}
};