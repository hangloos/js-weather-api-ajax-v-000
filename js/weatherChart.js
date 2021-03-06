function getFarenheits(result){
  // Your code goes here
 
  return result.hourly_forecast.map(function(dailyWeather){
    return dailyWeather.temp.english
  })

}

function getHours(result){
  // Your code goes here
 return result.hourly_forecast.map(function(dailyWeather){
    return dailyWeather.FCTTIME.hour
  })

}

function generateDataSet(labels, data) {
  // Your code goes here
  // makes the data for the chart
  return {
    labels: labels,
    datasets: [
    {
      label: "Hourly Weather for New York",
      fillColor: 'rgba(220,220,220,0.2)', 
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)', 
      data: data
    }
    ]
  };
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({url: endpoint, dataType: 'jsonp', success: success })
}


  