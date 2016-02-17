function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.isPowerSavingMode = true;
}



Thermostat.prototype.increaseTemp = function () {
  if (this.temp >= this.MAX_TEMP) {
    return;
  } else {
    this.temp +=1;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp <= this.MIN_TEMP) {
    return;
  } else {
    this.temp -=1;
  }
};

Thermostat.prototype.switchMode = function () {
  this.isPowerSavingMode = !this.isPowerSavingMode;
  this.MAX_TEMP = (this.isPowerSavingMode === true) ? 25 : 32;
};

Thermostat.prototype.reset = function () {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function () {
  var energyUsage;
  if (this.temp < 18) {
    energyUsage = 'Low';
  } else if (this.temp < 25 && this.temp >= 18) {
    energyUsage = 'Medium';
  } else {
    energyUsage = 'High';
  }
  return energyUsage;
};
