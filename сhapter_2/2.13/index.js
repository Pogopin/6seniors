// Последнее значение цикла
// важность: 3
// Какое последнее значение выведет этот код? Почему?

// let i = 3;

// while (i) {
//   alert(i--);
// }
// последнеее значение 1, потому что в следующей итерации i = 0, что не соответствует условию

//----------------------------------------------------------------------------------------------------------------
// Какие значения выведет цикл while?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert(i); // 1, 2, 3, 4

// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert(i); // 1, 2, 3, 4, 5
//----------------------------------------------------------------------------------------------------------------

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

//----------------------------------------------------------------------------------------------------------------
// Какие значения выведет цикл for?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

//----------------------------------------------------------------------------------------------------------------
// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.


let res = 0
do {
    res = prompt('Введи число больше 100', 0)
    if(res > 100) break
    
} while(res < 100)
//----------------------------------------------------------------------------------------------------------------

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

Number: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue Number;
  }

  alert(i);
}