// Create the chart
function FrequencyGraph(){// Create the chart
Highcharts.stockChart('main-div-conf', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    const x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Frequency Graph'
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Frequency Graph data',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }())
    }]
});

}