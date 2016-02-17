$( document ).ready(function () {
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temp + ' \u2103');
  $("#power-saving-status").text(thermostat.isPowerSavingMode ? "on" : "off");
  $("#power-saving-switch").text(!thermostat.isPowerSavingMode ? "on" : "off");

  $("#up").click(function () {
    thermostat.increaseTemp();
    $("#temperature").text(thermostat.temp + ' \u2103');
  });

  $("#down").click(function () {
    thermostat.decreaseTemp();
    $("#temperature").text(thermostat.temp + ' \u2103');
  });

  $("#reset").click(function () {
    thermostat.reset();
    $("#temperature").text(thermostat.temp + ' \u2103');
  });

  $("#power-saving-switch").click(function () {
    thermostat.switchMode();
    $("#power-saving-status").text(thermostat.isPowerSavingMode ? "on" : "off");
    $("#power-saving-switch").text(!thermostat.isPowerSavingMode ? "on" : "off");
  });
});
