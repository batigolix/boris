//Start function

// Bundles column data.
function dataHandling(input){
    var output = [];
    for (var i=0; i < input[0].length  ; i++){
        output.push([]);
        for (var j =0; j < input.length ; j++)
            output[i].push(input[j][i]);
    }
    return output;
}

// Loads external data.
var request = new XMLHttpRequest();
request.open("GET", 'files/4.csv', false);
request.send(null);

// Converts CSV text to array.
var csv_line = request.responseText.split(/\r?\n|\r/);
var csv_array = new Array();

// Loops through lines in CSV file and adds to array.
for (var i = 0; i < csv_line.length; i++) {
    var row_data = csv_line[i].split('\t');
    csv_array.push(row_data);
}

// Groups data by column.
csv_array = dataHandling(csv_array);

// Prepares series array for highcahrts usage.
var series = new Array();
for (var i = 0; i < csv_array.length; i++) {

    // Defines name.
    var name = csv_array[i][0];
    csv_array[i].shift();

    // Converts strings to integers.
    var data = csv_array[i].map(function (x) {
        return parseInt(x, 10);
    });

    // Adds name and data to series array.
    var serie = {
        name: name,
        data: data,
    };
    series.push(serie);
}

// Defines the highcharts object.
Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: series,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

//End function
