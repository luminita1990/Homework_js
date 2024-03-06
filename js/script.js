// 1.1 Напишите функцию, которая использует forEach для умножения каждого элемента массива на 2 и вывода
// результата в консоль.

// let numbers = [4, 6, 3, 9, 44, 66]

// function newElem(array) {
//    array.forEach(function(element) {
//    let result = element * 2;
//    console.log(result);
//    });
//    }

//    newElem(numbers);

//1.2 Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и возвращать сумму.
// let numbers = [4, 6, 3, 9, 44, 66]

// function sumArrayElem(array) {
//    let sum = 0;
//    array.forEach(function(element) {
//    sum += element;
//    });
//    return sum;
//    }

//    let totalSum = sumArrayElem(numbers);
//    console.log("Сумма всех элементов массива: " + totalSum);

//1.3 Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и сохранить
// изменения в том же массиве.

// let strings = ["hello", "world", "hi", "morgen"];

// strings.forEach(function (element, index, array) {
//   array[index] = element.toUpperCase();
// });

// console.log(strings);

//На map
// 1.4 Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного массива.
// let numbers = [4, 7, 8, 2, 9];

// let squares = numbers.map(function (number) {
//   return number * number;
// });

// console.log(squares);

//1.5 Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена товаров.
// let products = [
//   { id: 1, name: "Product 1", price: 250 },
//   { id: 2, name: "Product 2", price: 300 },
//   { id: 3, name: "Product 3", price: 450 },
// ];

// let productNames = products.map((product) => product.name);

// console.log(productNames);

// 1.6 Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива.
// let numbers = [11, -27, 43, -64, 33, -30, 90];

// let negativeNumbers = numbers.map(function(number) {
// if (number < 0) {
// return number;
// } else {
// return null;
// }
// }).filter(function(number) {
// return number !== null;
// });

// console.log(negativeNumbers); 