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
  var chart_year = new Chart(canvas_year, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Sep', 'Okt', 'Nov'],
      datasets: [{
        label: 'Bezoekers',
        data: [12, 20, 20, 21, 30, 56, 23, 12, 34, 12],
        backgroundColor: [
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
          'rgba(91, 135, 55, 0.2)',
        ]
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
          display: false,
          gridLines: {
            display: false
          }
        }]
      }
    }
  });

})(document);