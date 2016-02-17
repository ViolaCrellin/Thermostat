function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.isPowerSavingMode = true;
  this.maxTemp = 25;
}

Thermostat.prototype.increaseTemp = function () {
  this.temp +=1;
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp <= this.minTemp) {
    throw "Unrecordable temperature";
    } else {
  this.temp -=1;
  }
};

Thermostat.prototype.switchMode = function () {
  this.isPowerSavingMode = !this.isPowerSavingMode;
  this.maxTemp = (this.isPowerSavingMode === true) ? 25 : 32;
};

Thermostat.prototype.reset = function () {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function () {
  var energyUsage;
  if (this.temp < 18) {
    energyUsage = Symbol.for('Low');
  } else if (this.temp < 25 && this.temp >= 18) {
    energyUsage = Symbol.for('Medium');
  } else {
    energyUsage = Symbol.for('High');
  }
  return energyUsage;
};
