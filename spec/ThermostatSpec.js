describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("#constructor", function(){

    it("Has a default of 20 degrees", function () {
      expect(thermostat.temperature).toEqual(20);
    });

    it("Is in powersaving mode by default", function () {
      expect(thermostat.isPowerSavingMode).toBeTruthy();
    });

    it("Is has a max temperature, by default, of 25 as it is in powersaving mode", function () {
      expect(thermostat.MAX_TEMP).toEqual(25);
    });

  });

  describe("#increaseTemp", function () {

    it("Can have it's temperature increased", function () {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it("Cannot have it's temperature increased to above the maximum", function () {
      var startingTemp = thermostat.temperature;
      for (var i = 0; i < (thermostat.MAX_TEMP - startingTemp); i++){
      thermostat.increaseTemp();}
      expect(thermostat.temperature).toEqual(thermostat.MAX_TEMP);
    });
  });

  describe("#decreaseTemp", function(){

    it("Can have it's temperature decreased", function () {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it("Cannot have it's temperature decreased to below 10 degrees", function () {
      var startingTemp = thermostat.temperature;
      for (var i = 0; i < (startingTemp - thermostat.MIN_TEMP); i++){
      thermostat.decreaseTemp();}
      expect(thermostat.temperature).toEqual(thermostat.MIN_TEMP);
    });
  });

  describe("#switchMode", function () {

    it("Will switch the mode from powersaving true to powersaving false", function () {
      thermostat.switchMode();
      expect(thermostat.isPowerSavingMode).toBeFalsy();
    });

    it("Will change the maximum temperature from powersaving 25 to non-powersaving at 31", function () {
      thermostat.switchMode();
      expect(thermostat.MAX_TEMP).toEqual(32);
    });
  });

  describe("#reset", function () {

    it("Will reset temperature to 20", function () {
      thermostat.increaseTemp();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("#energyUsage", function () {

    it("Will return EnergyUsage as low when temperature below 18", function () {
      for (var i = 0; i < 3; i++){
      thermostat.decreaseTemp();}
      expect(thermostat.energyUsage()).toEqual('Low');
    });

    it("Will return EnergyUsage as medium when temperature above 18", function () {
      expect(thermostat.energyUsage()).toEqual('Medium');
    });

    it("Will return EnergyUsage as high when temperature above 25", function () {
      for (var i = 0; i < 6; i++){
      thermostat.increaseTemp();}
      expect(thermostat.energyUsage()).toEqual('High');
    });
  });
});
