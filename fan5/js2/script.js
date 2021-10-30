// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

//   поле, хранящее радиус окружности;
//    get-свойство, возвращающее радиус окружности;
//    set-свойство, устанавливающее радиус окружности;
//    get-свойство, возвращающее диаметр окружности;
//    метод, вычисляющий площадь окружности;
//    метод, вычисляющий длину окружности.
//---------------------------------------------------------------------------------

class Ring {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get d() {
    return this.r * 2;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
  circumference() {
    return Math.PI * this.r * 2;
  }
}

let ring = new Ring(5);
console.log(ring.radius);
console.log(ring.d);
console.log(ring.area().toFixed(2));
console.log(ring.circumference().toFixed(2));

// Реализовать класс Employee, описывающий
// работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации
// HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через
// конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и
// вывести на экран результат
// работы метода getHtml().
class Employee {
  constructor(name, age, spec) {
    this.name = name;
    this.age = age;
    this.spec = spec;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    // refactor to be done
    document.write('<table border = "3"><tr>');
    for (const [key] of Object.entries(employees[0])) {
      document.write("<th>" + key + "</th>");
    }
    document.write("</tr>");

    for (let i = 0; i < employees.length; i++) {
      document.write("<tr>");
      Object.values(employees[i]).forEach((v) => {
        document.write("<td>" + v + "</td>");
      });
      document.write("</tr>");
    }
    document.write("</table>");
  }
}

const employees = [
  new Employee("Vasja", 25, "IT"),
  new Employee("Petja", 30, "DOC"),
];
const empTable = new EmpTable(employees);
empTable.getHtml();
