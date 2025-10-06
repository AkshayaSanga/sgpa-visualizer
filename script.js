// script.js
fetch('sgpa_data.json')
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('sgpaChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.semesters,
        datasets: [{
          label: 'SGPA',
          data: data.sgpa,
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'SGPA'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Semester'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Semester-wise SGPA Trend'
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  });
