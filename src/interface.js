$( document ).ready(function () {
  var thermostat = new Thermostat();

  function updateTemperature(){
    $("#temperature").text(thermostat.temperature+ ' \u2103');
    $("body").attr('class', thermostat.energyUsage());
    $(".controller>h1").attr('class', thermostat.energyUsage());
    $("#temperature").attr('class', thermostat.energyUsage());
    $(".controller").attr('id', thermostat.energyUsage());
    $(".controller").attr('id', thermostat.energyUsage());
    $("button").attr('class', thermostat.energyUsage());
    $(".city>h1").attr('class', thermostat.energyUsage());
    $(".city").attr('id', thermostat.energyUsage());

  }

  $("#temperature").text(thermostat.temperature+ ' \u2103');
  $("#power-saving-switch").text(!thermostat.isPowerSavingMode ? "Turn Power Saving On" : "Turn Power Saving Off");
  $("#power-saving-switch").attr('class', !thermostat.isPowerSavingMode ? "off" : "on" );


  $("#up").click(function () {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $("#down").click(function () {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $("#reset").click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $("#power-saving-switch").click(function () {
    thermostat.switchMode();
    $("#power-saving-switch").text(thermostat.isPowerSavingMode ? "Turn Power Saving On" : "Turn Power Saving Off");
    $("#power-saving-switch").attr('class', !thermostat.isPowerSavingMode ? "off" : "on" );
  });

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=973cb240a8f69865f43c256b810a89e8';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   });
 }
   displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

});
