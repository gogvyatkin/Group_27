// Напишите валидационный скрипт используя функции 
function script (trustr){
    if (trustr === "")
console.log("Enter any value!") // Строка не должна быть пустой

else if (trustr.length < 5) //  3. Минимум 5 символов в строке
console.log("less than 5 characters entered")

else if (trustr.length > 64) // Максимум 64 символа в строке
console.log("etnter less characters")

else if (/[A-Za-z]/.test(trustr) == false)
console.log("Enter word!")
else if (/[0-9]/.test(trustr) == false)
console.log("Enter any number!")
else if (/@/.test(trustr) == false)
console.log("Enter @!")
else if (/[A-Z]/.test(trustr) == false)
console.log("Enter an uppercase letter!")
else 
console.log("Everithing OK!")
}


script ("897246") // Валидно!
script ("a@sd") // Скрипт должен на вход принимать строку.
script ("adpo[aopsid[pasidasdpaosdk@aosfopjmvkamsopjasocjmasocaoscoancasncicnasocsd") // Максимум 64 символа в строке
script ("") // Строка не должна быть пустой
script ("wsfd1fg@df") // Должна быть хотя бы одна @
script ("Wsfdfgdf")


//  /(@[A-Za-z])\w+/.test(str_text)
// (\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}) Адрес email
// else if (/(@[A-Za-z])\w+/.test(trustr) == false) // Должна быть хотя бы одна @
// console.log("where is dog?")

//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой