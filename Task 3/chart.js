// javascript for the chart to be displayed 
const bar = document.getElementById('chart').getContext('2d');
// javascript for the datset and rgb color of chart bars
const usageChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Home', 'About', 'Services', 'Contact'],
        datasets: [{
            label: 'Page Visits',
            data: [120, 90, 150, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]
        }]
    }
});
