r(function () {
    (function ($, Drupal) {

// Loads external data.
var request = new XMLHttpRequest();
request.open("GET", '/files/5.csv', false);
request.send(null);

// Converts CSV text to array.
var csv_line = request.responseText.split(/\r?\n|\r/);
var ranges = new Array();
var averages = new Array();

// Loops through lines in CSV file and adds to array.
for (var i = 0; i < csv_line.length; i++) {
    var row_data = csv_line[i].split(',');
    averages.push([new Date(row_data[0]).getTime(), parseFloat(row_data[1])]);
    ranges.push([new Date(row_data[0]).getTime(), parseFloat(row_data[2]), parseFloat(row_data[3])]);
}

Highcharts.chart('container', {

    title: {
        text: 'IC opnames'
    },

    xAxis: {
        type: 'datetime',
        accessibility: {
            rangeDescription: 'Van januari 2020 tot en met december 2021'
        },
        plotBands: [{ // visualize the weekend
            from: new Date("2021-06-01").getTime(),
            to: new Date("2021-12-01").getTime(),
            color: 'rgba(68, 170, 213, .2)'
        }]
    },

    yAxis: {
        title: {
            text: null
        }
    },

    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: 'opnames'
    },

    series: [{
        name: 'Aantal opnames',
        data: averages,
        zIndex: 1,
        marker: {
            fillColor: 'white',
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[0]
        }
    }, {
        name: 'Range',
        data: ranges,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
            enabled: false
        }
    }]
});

    })(jQuery, Drupal);
});


function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}