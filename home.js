// anychart.onDocumentReady(function() {

//   set the data
  var data = [
      {x: "Income", value: Deposits},
      {x: "Spending", value: Withdrawl},
  ];

// data: (function() {
//     var d = [];
//     for (var i=0; i < count; i++) {
//         d.push([Income,44.2]);     
//     }
//     return d;

    
// })()
// });
  // create the chart
  var chart = anychart.pie();

  // add the data
  chart.data(data);


    // create range color palette with color ranged between light blue and dark blue
    var palette = anychart.palettes.rangeColors();
    palette.items([{ color: '#5E95E1' }, { color: '#FEE5A2' }]);

    // set chart title text settings
    chart
      .title('')
      // set chart radius
      .innerRadius('40%')
      // set palette to the chart
      .palette(palette);

  // display the chart in the container
  chart.container('pie-container');
  chart.draw();

  
    var Spending = 0.00;
    var Savings = 0.00;
    var Deposits = 0.00;
    if ( document.getElementById('purpose').value = 'Spending'){
    var input = document.getElementsById('amount');
    Spending += input[0].value;
    }
    if (document.getElementById('purpose').value = 'Savings'){
    var input = document.getElementsById('amount');
    Savings += input[0].value;
    }
    if (document.getElementById('purpose').value = 'Deposits'){
    var input = document.getElementById('amount');
    Deposits += input[0].value;
    }

