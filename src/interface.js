$( document ).ready(function () {
  var thermostat = new Thermostat();

  function updateTemperature(){
    $("#temperature").text(thermostat.temp + ' \u2103');
    $("body").attr('class', thermostat.energyUsage());
  }

  $("#temperature").text(thermostat.temp + ' \u2103');
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



});
