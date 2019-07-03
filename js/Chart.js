class ChartClass {
    constructor() {

    }

    drawChart(gr10 = 0, gr20 = 0, gr50 = 0, zl1 = 0, zl2 = 0, zl5 = 0, txt1, txt2, txt3, txt4, txt5, txt6) {

        var idChar = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(idChar, {
            type: 'pie',
            data: {
                labels: [txt1, txt2, txt3, txt4, txt5, txt6],
                datasets: [{
                    //label: 'My First dataset',
                    backgroundColor: ['rgb(0,128,0)', 'rgb(148,0,211)', 'rgb(255,215,0)', 'rgb(128,0,0)', 'rgb(0,255,255)', 'rgb(255,165,0)'],
                    borderColor: 'rgb(0,0,0)',
                    data: [gr10, gr20, gr50, zl1, zl2, zl5],
                    datalabels: {
                        align: 'end',
                        anchor: 'end'
                      }
                }]
            },


            options: {
                maintainAspectRatio: false,
                pointLabelFontSize: 0,
                legend: {
                    
                    labels: {
                        fontSize: 12,
                        boxWidth: 20,
                        fontColor: 'rgb(0,0,0)'
                    }
                }
            }
        });

    }
}


export default ChartClass;