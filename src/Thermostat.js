function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.isPowerSavingMode = true;
}



Thermostat.prototype.increaseTemp = function () {
  if (this.temperature >= this.MAX_TEMP) {
    return;
  } else {
    this.temperature +=1;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temperature <= this.MIN_TEMP) {
    return;
  } else {
    this.temperature -=1;
  }
};

Thermostat.prototype.switchMode = function () {
  this.isPowerSavingMode = !this.isPowerSavingMode;
  this.MAX_TEMP = (this.isPowerSavingMode === true) ? 25 : 32;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  var energyUsage;
  if (this.temperature < 18) {
    energyUsage = 'Low';
  } else if (this.temperature < 25 && this.temperature >= 18) {
    energyUsage = 'Medium';
  } else {
    energyUsage = 'High';
  }
  return energyUsage;
};
