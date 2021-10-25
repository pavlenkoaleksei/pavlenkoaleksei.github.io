// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// Написать функцию, которая вычисляет факториал переданного ей числа.
function FirstFactorial(num) {
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
let num = prompt("Укажите число, для вычисления факторала :", "");
// console.log(FirstFactorial(num));
alert(FirstFactorial(num));

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
let a = prompt("Укажите три отдельных числа. Первое :", "");
let b = prompt("Второе :", "");
let c = prompt("Третье :", "");
let value = a.toString() + b.toString() + c.toString();
alert(a.toString() + b.toString() + c.toString());

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
alert("Для вычисления площади треуголтнка введите длинну и ширину");
function areaRectangle(d, x) {
  return d * x;
}

let d = prompt("Для вычисления площади треуголтнка введите длинну", "");
let x = prompt("Для вычисления площади треуголтнка введите ширину", "");
alert(parseInt(prompt(d)) * parseInt(prompt(x)));

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function PerfectNumber(numb) {
  let sum = 0;
  let reminder;
  for (let i = 1; i < numb - 1; i++) {
    reminder = numb % i;
    if (reminder === 0) {
      sum += i;
    }
  }
  if (numb === sum) {
    alert(numb + " - Совершенное число!");
  } else {
    alert("Это не совершенное число!");
  }
}
alert(
  "В панели разработчкиа введте команду PerfectNumber, проверьте является число совершенным!"
);
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function GetPerfect(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    let sum = 0;
    for (let n = 1; n <= i / 2; n++) {
      if (i % n === 0) sum += n;
    }
    if (i === sum) result.push(i);
  }
  return result;
}
console.log(GetPerfect());
alert(
  "В панели разработчкиа введте команду GetPerfect(a, b), проверьте является число совершенным в задданом диапазоне!"
);
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function SetTime(h) {
  return function setMinutes(m = 0) {
    return function setSeconds(s = 0) {
      return `${h}:${m}:${s}`;
    };
  };
}

let time = SetTime()()();
console.log(time);
alert(
  "В панели разработчкиа введте команду SetTime()()(), которая принимает время (часы, минуты, секунды) и выводит его на экран!"
);
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function ShowTime(h) {
  return function showMinutes(m = 0) {
    return function showSeconds(s = 0) {
      return (h % 12) * 3600 + m * 60 + s;
    };
  };
}

let sec = ShowTime()()();
console.log(sec);
alert(
  "В панели разработчкиа введте команду ShowTime(h)(m)(s), которая принимает время (часы, минуты, секунды) и выводит его на экран!"
);
// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»