(function(document) {
  // setup first chart
  var canvas = document.querySelector('#uniques');
  var chart  = new Chart(canvas, {
    type: 'doughnut',
    data: {
        labels: ['Uniek', 'Terugkomer'],
        datasets: [{
            data: [170, 40],
            backgroundColor: [
                'rgba(91, 135, 55, 0.2)',
                'rgba(91, 135, 55, 0.8)'
            ],
            borderColor: [
                '#ffffff',
                '#ffffff'
            ],
            borderWidth: 5
        }]
    },
    options: {
      legend: {
        display: false
      }
    }
  });

  var canvas_year = document.querySelector('#year');
  var chart_year  = new Chart(canvas_year, {
    type: 'line',
    data: {
      labels: ['30 jan', '27 feb', '28 feb', '27 mrt', '28 mrt', '28 apr', '29 apr', '29 mei', '26 jun', '27 jul', '28 sept', '27 okt', '25 nov'],
      datasets: [{
        fill: false,
        borderColor: 'rgba(91, 135, 55, .5)',
        label: 'Bezoekers',
        data: [16, 18, 15, 19, 17, 19, 13, 18, 12, 10, 14, 20, 19],
      }],
    },

    options: {
      legend: { 
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 2,
            max: 40
          },
          display: false,
          gridLines: {
            display: false
          }
        }]
      }
    }
  });

})(document);