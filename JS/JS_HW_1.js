let item_1;
item_1 = 5;
console.log(item_1);
let item_2;
item_2 = 3;
console.log(item_2);
let item_3;
item_3 = item_1 + item_2;
console.log(item_3);
let item_4;
item_4 = 'Yolochka';
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5;
item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof(item_6);
console.log(typeof(item_6), "item_6 ==", item_6); console.log(typeof (item_6_type), "item_6_type ==", item_6_type);
let item_7 = String(item_6);
let item_7_type;
item_7_type = typeof(item_7);
console.log(typeof(item_7), "item_7 ==", item_7); console.log(typeof (item_7_type), "item_7_type ==", item_7_type);
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// if (age_1 == 10){
//     console.log(age_1," - valid variable value age_1",)
// }
// else if (age != 10) {
//     console.log(age_1," - invalid variable value age_1")
//     }
if (age_1 < age_2){
    console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then')
}
else if(age_1 >= age_2 && age_1 < age_3){
    console.log('Welcome  !')
    }
else if(age_1 > age_3){
    console.log("Keep calm and look Culture channel")
    }
else{
    console.log('Technical work')
};
    console.log("************************************************************")

function checkAge(age_1, age_2, age_3){
        
        if (isNaN(age_1) == "true" || typeof age_2 != "number" || typeof age_3 != "number"){
        console.log("Error!")
        }
        else if (age_1 < age_2){
            console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then')
        }
        else if(age_1 >= age_2 && age_1 < age_3){
            console.log('Welcome  !')
            }
        else if(age_1 > age_3){
            console.log("Keep calm and look Culture channel")
            }
        else{
            console.log('Technical work')
    }
}
let prt_1 = prompt('Введите первое число')
let prt_2 = prompt('Введите второе число')
let prt_3 = prompt('Введите третье')
checkAge(prt_1, prt_2, prt_3)



//     1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке