/**
 * @file
 * Provides custom map configuration for digitisation industry europe map.
 * 
 * Serves as input for Webtools' load.js.
 */

// Provides the map data.
var data = {
  "AT": {
    "label": "Austria",
    "projects": {
      "0" : {
        "name": "Produktion der Zukunft (Production of the Future)",
        "url" : "http://www.ffg.at/produktion",
        "type": "national"
      }   
    }
  },
  "BE": {
    "label": "Belgium",
    "projects": {
      "0" : {
        "name": "MADE DIFFERENT – Factories of the future",
        "url": "http://www.madedifferent.be",
        "type": "national"
      },
      "1": {
        "name": "Marshall 4.0",
        "url": "http://www.wallonie.be/fr/plan-marshall",
         "type": "regional"
      },  
      "2": {
        "name": "Flanders Make ",
        "url": "http://www.flandersmake.be",
        "type": "regional"
      },
      "3": {
        "name": "iMinds",
        "url": "http://www.iminds.be",
        "type": "regional"
      }
    }
  },
  "CZ": {
    "label": "Czech Republic",
    "projects": {
      "0": {
        "name": "Průmysl 4.0/ Industry 4.0",
        "url": "http://www.mpo.cz/dokument162351.html",
        "type": "national"
      }
    }
  },
  "DK": {
    "label": "Denmark",
    "projects": {
      "0": {
        "name": "MADE – Manufacturing Academy of Denmark",
        "url": "http://made.dk",
        "type": "national"
      }
    }
  },
  "FI": {
    "label": "Finland",
    "projects": {
      "0": {
        "name": "FIMECC PPP Programmes",
        "url": "http://www.fimecc.com/programs",
        "type": "national"
      },
      "1" : {
        "name": "DIGILE  (ICT Alliance with China)",
        "url": "http://digile.fi/fi",
        "type": "national"
      },
      "2": {
        "name": "TEKES – Industrial Internet",
        "url": "http://www.tekes.fi/en/programmes-and-services/tekes-programmes/industrial-internet--business-revolution",
        "type": "national"
      }
    }
  },
  "FR": {
    "label": "France",
    "projects": {
      "0": {
        "name": "Nouvelle France Industrielle",
        "url": "http://www.economie.gouv.fr/vous-orienter/industrie/nouvelle-france-industrielle",
        "type": "national"
      },
      "1": {
        "name": "Industrie du Futur",
        "url": "http://allianceindustrie.wix.com/industrie-dufutur",
        "type": "national"
      },
      "2": {
        "name": "Transition Numérique",
        "url": "http://transition-numerique.fr",
        "type": "national"
      },
      "3": {
        "name": "Le Programme des Investissements d’Avenir",
        "url": "http://www.agence-nationale-recherche.fr/investissements-d-avenir",
        "type": "national"
      },
      "4": {
        "name": "FoF Ile-de-France",
        "url": "http://www.pole-astech.org/site/pages/index.php?doi=859b53568eb0059f7e6cbda05d35a77d",
        "type": "regional"
      }
    }
  },
  "DE": {
    "label": "Germany",
    "projects": {
      "0": {
        "name": "Plattform Industrie 4.0",
        "url": "http://www.plattform-i40.de",
        "type": "national"
      },
      "1": {
        "name": "Mittelstand 4.0",
        "url": "http://www.mittelstand-digital.de/DE/Foerderinitiativen/mittelstand-4-0.html",
        "type": "national"
      },
      "2": {
        "name": "Smart Service World ",
        "url": "http://industrie4.0.gtai.de/INDUSTRIE40/Navigation/EN/Topics/smart-service-world.html",
        "type": "national"
      },
      "3": {
        "name": "Autonomik for Industrie 4.0 - Production, Products, Services in the Internet of the Future",
        "url": "http://autonomik40.de",
        "type": "national"
      },
      "4": {
        "name": "It's OWL",
        "url": "http://www.its-owl.com/home",
        "type": "regional"
      },
      "5": {
        "name": "Allianz Industrie 4.0 Baden-Würtemberg",
        "url": "http://www.i40-bw.de",
        "type": "regional"
      }
    }
  },
  "EL": {
    "label": "Greece",
    "projects": {
      "0": {
        "name": "Regional Operational Programme of Region of Western Greece for the Period 2014-2020",
        "url": "http://dytikiellada.gr",
        "type": "regional"
      }
    }
  },
  "IT": {
    "label": "Italy",
    "projects": {
      "0": {
        "name": "Internet of Things and Industry 4.0",
        "url": "http://www.fabbricaintelligente.it",
        "type": "national"
      },
      "1": {
        "name": "Cluster Fabbrica Intelligente CFI (Intelligent Factories Cluster)",
        "url": "http://www.fabbricaintelligente.it/",
        "type": "national"
      },
      "2": {
        "name": "Cluster Fabbrica Intelligente Lombardia AFIL (Cluster Intelligent Factories Lombardy)",
        "url": "http://www.afil.it",
        "type": "regional"
      }
    }
  },
  "LT": {
    "label": "Latvia",
    "projects": {
      "0": {
        "name": "Demola Latvia (Riga IT TechHub)",
        "url": "http://latvia.demola.net/about",
        "type": "national"
      }
    }
  },
  "NL": {
    "label": "Netherlands",
    "projects": {
      "0": {
        "name": "Smart Industry",
        "url": "http://www.smartindustry.nl",
        "type": "national"
      }
    }
  },
  "PL": {
    "label": "Poland",
    "projects": {
      "0": {
        "name": "INNOMED",
        "url": "http://www.ncbir.pl/programy-krajowe/programy-sektorowe/innomed",
        "type": "national"
      },
      "1": {
        "name": "INNOLOT",
        "url": "http://www.ncbir.pl/programy-krajowe/programy-sektorowe/innolot",
        "type": "national"
      },
      "2": {
        "name": "CuBR",
        "url": "http://www.ncbir.pl/en/news/art,3875,more-than-pln-100-million-in-3rd-competition-for-innovators-in-non-ferrous-metals-industry.html",
        "type": "national"
      },
      "3": {
        "name": "BIOSTRATEG",
        "url": "http://www.ncbr.gov.pl/programy-strategiczne/srodowisko-naturalne-rolnictwo-i-lesnictwo---biostrateg",
        "type": "national"
      }
    }
  },
  "PT": {
    "label": "Portugal",
    "projects": {
      "0": {
        "name": "PRODUTECH – Production Technologies Cluster",
        "url": "http://www.produtech.org",
        "type": "national"
      },
      "1": {
        "name": "Link 2",
        "url": "http://mobilizadores.produtech.org/en",
        "type": "national"
      },
      "2": {
        "name": "Link 3",
        "url": "http://portal.produtech.org",
        "type": "national"
      }
    }
  },
  "SK": {
    "label": "Slovakia",
    "projects": {
      "0": {
        "name": "Smart Industry",
        "url": "http://www.smartindustrysk.com",
        "type": "national"
      }
    }
  },
  "ES": {
    "label": "Spain",
    "projects": {
      "0": {
        "name": "Industria Conectada 4.0",
        "url": "http://www.industriaconectada40.gob.es",
        "type": "national"
      },
      "1": {
        "name": "Basque Industry 4.0",
        "url": "http://www.spri.eus/industry40",
        "type": "regional"
      }
    }
  },
  "SE": {
    "label": "Sweden",
    "projects": {
      "0": {
        "name": "Produktion 2030",
        "url": "http://www.produktion2030.se",
        "type": "national"
      }
    }
  },
  "UK": {
    "label": "United Kingdom",
    "projects": {
      "0": {
        "name": "High value Manufacturing Catapult",
        "url": "http://hvm.catapult.org.uk",
        "type": "national"
      },
      "1": {
        "name": "Innovate UK",
        "url": "http://www.gov.uk/government/organisations/innovate-uk",
        "type": "national"
      },
      "2": {
        "name": "EPSRC Manufacturing the Future theme",
        "url": "http://www.epsrc.ac.uk/research/ourportfolio/themes/manufacturingthefuture",
        "type": "national"
      },
      "3": {
        "name": "Action Plan for Manufacturing",
        "url": "http://www.scottish-enterprise.com/knowledge-hub/articles/insight/scotlands-manufacturing-action-plan",
        "type": "regional"
      }
    }
  }
}

var eu_initiatives = "<div class=\"eu-level\"><b>EU-level Initiatives</b><ul> <li>Application Public Private Partnerships:<a href=\"http://ec.europa.eu/research/industrial_technologies/factories-of-the-future_en.html\">Factories of the Future(FoF)</a></li> <li><a href=\"http://ec.europa.eu/research/industrial_technologies/sustainable-process-industry_en.html\">Sustainable Process Industry (SPIRE)</a></li> <li><a href=\"http://i4ms.eu/\">ICT Innovation for Manufacturing SMEs (I4MS)</a></li> <li><a href=\"https://ec.europa.eu/digital-single-market/en/smart-anything-everywhere\">Smart Anything Everywhere</a></li> <li>Digital Sector Public Private Partnerships - <a href=\"https://ec.europa.eu/digital-single-market/en/time-ecsel\">ECSEL</a>, <a href=\"https://ec.europa.eu/digital-single-market/en/news/photonics-public-private-partnership-ppp-next-generation-photonics-solutions-sustain-europe%E2%80%99s\">Photonics</a>, <a href=\"https://ec.europa.eu/digital-single-market/en/robotics-public-private-partnership-horizon-2020\">Robotics</a>, <a href=\"https://ec.europa.eu/digital-single-market/en/high-performance-computing-contractual-public-private-partnership-hpc-cppp\">High Performance Computing(HPC)</a>, <a href=\"https://ec.europa.eu/digital-single-market/en/future-internet-public-private-partnership\">Advanced 5G networks for the Future Internet (5G)</a>, <a href=\"https://ec.europa.eu/digital-single-market/en/big-data-value-public-private-partnership\">Big Data Value PPP</a></li> </ul> <b>Multi-region Initiatives</b> <p><a href=\"https://ec.europa.eu/growth/tools-databases/regional-innovation-monitor/link/vanguard-initiative\">Vanguard</a></p></div>";

// Provides map configuration.
L.custom = { 
  init: function(obj,params) {
    
    // Creates map.
    obj.style.minHeight = "550px";  
    var map = L.map( obj, {
     "center" : [53,9],
      "zoom" : 4,
      "minZoom": 3,
      "maxZoom": 8,
      "dragging": true,
      "touchZoom": true,
      "scrollWheelZoom": true
    });
   L.wt.tileLayer("graybg", {attribution: "European Commission, DG CONNECT, Unit A3"}).addTo(map);

    // Fetches country colours based on property.
    // Leftovers from fishery map. Could be useful to color individual countries.
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
      return "#C8E9F2";
    }
    
    // Defines country colours.
    var country_options = {
      label : {mode: "hover"},
      style: function(feature){
        var opacity = 1;
        if (typeof feature.properties.type != "undefined") {
          opacity = 0.4;
        }
        return {
          fillColor: getColor(feature.properties.CNTR_ID),
          color: "#0065B1",
          dashArray: 0,
          fillOpacity: 0.9,
          opacity: 1,
          smoothFactor: 1,
          weight: 1        
        };
      },
      
      // Builds popup content for each country.
      onEachFeature: function (feature, layer) {
        country = feature.properties.CNTR_ID;
        if ( data[country] ) {
          var info = "<strong>" + data[country].label + "</strong>";
          if ( data[country].projects ) {
            info += "<ul>";
            for (var key in data[country].projects) {
              info += "<li class='" + data[country].projects[key].type + "'><a href='" + data[country].projects[key].url + "'>" + data[country].projects[key].name + "</a></li>";
            }
            info += "</ul>";
            info += eu_initiatives;
          }
        }
        else {
          info = country;
        }
        layer.bindPopup( "<p>" + info + "</p>");
      }
    };
    
    countries =[];
    
    for (var k in data) {
      countries.push(k);
    };

    // Adds countries to the map.    
    var eu_countries = L.wt.countries([{"level":0,"countries":countries}],country_options).addTo(map);
      // L.tileLayer('//europa.eu/webtools/maps/tiles/countrynames_europe/{z}/{y}/{x}', []).addTo(map);
 
    // Processes next components.
    $wt._queue("next");
    
  }
};