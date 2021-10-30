// Задача 1
let car = {
  manufacturer: "Japan",
  model: "Mitsubishi",
  issueAge: 2000,
  averageSpeed: 120,
  showInformation: function () {
    alert(
      "Manufacturer: " +
        car.manufacturer +
        "\nModel: " +
        car.model +
        "\nAge of issue: " +
        car.issueAge +
        "\nAverage Speed: " +
        car.averageSpeed +
        "km/h"
    );
  },

  countingTime: function (distance) {
    return distance / this.averageSpeed;
  },
};

car.showInformation();
let hours = car.countingTime(800);
alert("You need " + hours + " hours to get to that distance!");

// Задача 2
// function Fraction(upNumber,downNumber){
//     this.upNumber = upNumber;
//     this.downNumber = downNumber;
// }
// let firstNumber = Fraction(5,10);
// let secondNumber = Fraction(2,15);
