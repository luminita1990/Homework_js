// 1.1 Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой строке.
// let array = ["hallo", "hi", "priver", "salut"];

// array.forEach(function(element) {
// console.log(element);
// });

//1.2 Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, чтобы увеличить каждый элемент массива на 1.
// let numbers = [11, 62, 38, 64, 5];
// arrayElements(numbers);
// function arrayElements(array) {
//     array.forEach(function(element, index, arr) {
//     arr[index] = element + 1;
//     });
//     }
//     console.log(numbers);

//1.3 Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.
// let numbers = [19, 25, 35, 14, 75];
// let sum = 0;

// numbers.forEach(function (element) {
//   sum += element;
// });

// console.log(sum);

//1.4 Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, чтобы преобразовать каждую строку в верхний регистр.
// let words = ["hello", "morgen", "salut"];
// toUpperCase(words);

// function toUpperCase(strings) {
//     strings.forEach(function(element, index, arr) {
//     arr[index] = element.toUpperCase();
//     });
//     }
//     console.log(words);

//1.5 Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное значение.
// const array = [7, 9, 33, 76, 98];
// const targetValue = 33;
// let containsValue = false;

// array.forEach((item) => {
//   if (item === targetValue) {
//     containsValue = true;
//   }
// });

// if (containsValue) {
//   console.log(`Массив содержит значение ${targetValue}.`);
// } else {
//   console.log(`Массив не содержит значение ${targetValue}.`);
// }

//2.1 Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.
// const array = [12, 2, 8, 22, 44];

// const doubledArray = array.map((item) => item * 2);

// console.log("Массив, умноженный на 2:", doubledArray);

//2.2 Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map, чтобы добавить к каждой строке восклицательный знак.
// const strings = ['Привет', 'Hallo', 'Morgen'];
// const stringsWithExclamation = addExclamation(strings);
// function addExclamation(element) {
//     return element.map(str => str + '!');
//     }
//     console.log(stringsWithExclamation);

//2.3 Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и создать новый массив только из имен.
// let people = [
//   { id: 1, name: "Jony" },
//   { id: 2, name: "Leo" },
//   { id: 3, name: "Karl" },
// ];

// let names = people.map(function (element) {
//   return element.name;
// });

// console.log(names);

//2.4 Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, чтобы вернуть новый массив, содержащий квадраты этих чисел.
// let numbers = [2, 5, 6, 3, 7];
// let squaredNumbers = squareNumbers(numbers);
// function squareNumbers(numbers) {
//   return numbers.map(function (number) {
//     return number * number;
//   });
// }
// console.log(squaredNumbers);

//2.5 Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив чисел (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).
// const stringArray = ['1', '2', '3'];
// const numberArray = stringArray.map(str => +str);
// console.log(numberArray);

//3.1  Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.
// const numbers = [2, 5, 6, 9, 22, 66, 15, 88];

// const newNumbers = numbers.filter(num => num % 2 === 0);

// console.log(newNumbers); 

//3.2 Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter, чтобы вернуть массив строк, содержащих только букву 'a'.
// const strings =  ['Hallo', 'Privet', 'Salut', 'Hi', 'Guten Tag']

// function filteredStrings(array) {
//     const stringsWithA = array.filter(function(str){
//         return str.includes('a')
//     })
//     console.log(stringsWithA);
// }
// filteredStrings(strings);

//3.3 Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа из массива.

// const numbers = [3, -23, 6, -76, 1, 98, -47, 65, -5];

// function filteredPositiveNumbers(array) {
//     const positiveNumbers = array.filter(function(elem) {
//         if (elem > 0) {
//             return elem
//         }
//     })
//     console.log(positiveNumbers);
// }
// filteredPositiveNumbers(numbers)

//3.4 Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод filter, 
// чтобы вернуть массив объектов, у которых значение определенного свойства больше заданного порога.

// const person = [
//         {name: 'Ana', age: 32},
//         {name: 'Masa', age: 40},
//         {name: 'Misa', age: 29},
//         {name: 'Oliga', age: 27}
//     ]
    
//     function filteredElem(array) {
//         const newArray = array.filter(function(elem) {
//             return elem.age >= 30
//         })
//         console.log(newArray);
//     }
//     filteredElem(person)

//3.5 Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 5 символов.
// const words =  ['The', 'sun', 'lifts', 'my', 'mood', 'and', 'efficiency'];

// function moreThanFiveSymbols(array){
//     const newArray = array.filter(function(elem){
//         return elem.length >= 5
//     })
//     console.log(newArray);
// }
// moreThanFiveSymbols(words)

//4.1 Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.
// const array = [5, 6, 22, 54, 11];

// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);

//4.2 Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, чтобы найти наименьшее число в массиве.
// let numbers = [53, 36, 18, 11, 99];
// let minNumber = findMinNumber(numbers);
// function findMinNumber(element) {
//   if (element.length === 0) {
//     return undefined;
//   }

//   return numbers.reduce(function (min, current) {
//     return Math.min(min, current);
//   });
// }
// console.log("Наименьшее число в массиве: " + minNumber);
//4.3 Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в одну строку.
// const stringsArray = ["Today", "the", "weather", "is", "nice"];

// const combinedString = stringsArray.reduce((accumulator, currentValue) => {
//   return accumulator + " " + currentValue;
// });

// console.log(combinedString);

//4.4 Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, чтобы вычислить средний возраст всех объектов в массиве.
// const people = [
//   { name: "Leo", age: 32 },
//   { name: "Karl", age: 27 },
//   { name: "Jana", age: 45 },
// ];

// const averageAge = calculateAverageAge(people);
// function calculateAverageAge(objects) {
//   const totalAge = objects.reduce((acc, obj) => acc + obj.age, 0);
//   return totalAge / objects.length;
// }
// console.log(averageAge);