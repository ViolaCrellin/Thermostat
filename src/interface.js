$( document ).ready(function () {
  var thermostat = new Thermostat();

  function updateTemperature(){
    $("#temperature").text(thermostat.temperature+ ' \u2103');
    $("body").attr('class', thermostat.energyUsage());
  }

  $("#temperature").text(thermostat.temperature+ ' \u2103');
  $("#power-saving-status").text(thermostat.isPowerSavingMode ? "on" : "off");
  $("#power-saving-switch").text(!thermostat.isPowerSavingMode ? "on" : "off");

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
    $("#power-saving-status").text(thermostat.isPowerSavingMode ? "on" : "off");
    $("#power-saving-switch").text(!thermostat.isPowerSavingMode ? "on" : "off");
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
