function produceDrivingRange(num) {
  return function(num1, num2) {
    let difference = (num - (parseInt(num2) - parseInt(num1)))
    if (difference > 0) {
      return `within range by ${Math.abs(difference)}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
