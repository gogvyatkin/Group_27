// Напишите валидационный скрипт используя функции 
function script (trustr){
// Строка не должна быть пустой    
    if (trustr === "")
console.log("1. Enter some value!") 
// Минимум 5 символов в строке
else if (trustr.length < 5) 
console.log("2. Enter more than 5 characters")
// Максимум 64 символа в строке
else if (trustr.length > 64) 
console.log("3. Enter less 64 characters")
// В строке должны быть буквы
else if (/[A-Za-z]/.test(trustr) == false) 
console.log("4. Enter a letter!")
// Должна быть хотя бы одна цифра
else if (/[0-9]/.test(trustr) == false) 
console.log("5. Enter any number!")
// Должна быть хотя бы одна @
else if (/@/.test(trustr) == false) 
console.log("6. Enter @")
// Должна быть хотя бы одна буква в верхнем регистре
else if (/[A-Z]/.test(trustr) == false) 
console.log("7. Enter an uppercase letter!")
else 
console.log("8. Everithing OK!")
}

// Валидация полной формы Email
// function script (trustr){    
// if (/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(trustr) == false)
// console.log('Email invalid!')}

script ("897246")
script ("a@sd") 
script ("adpo[aopsid[pasidasdpaosdk@aosfopjmvkamsopjasocjmasocaoscoancasncicnasocsd") 
script ("") 
script ("Wsfd1fg@df") 
script ("Wsfdfgdf")
script ("w34fd@fgd")
script ("12WsWEWEWfgdf")