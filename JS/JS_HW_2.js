// Напишите валидационный скрипт используя функции 
function script (trustr){
    if (trustr === "")
console.log("Enter value!") // Строка не должна быть пустой

else if (trustr.length < 5) //  3. Минимум 5 символов в строке
console.log("less than 5 characters entered")

else if (trustr.length > 64) // Максимум 64 символа в строке
console.log("etnter less characters")

else if (/(@[A-Za-z])\w+/.test(trustr) == false) // Должна быть хотя бы одна @
console.log("where is dog?")

    else 
    console.log("Everithing OK!")
}
script ("ads@dr") // Валидно!
script ("a@sd") // Скрипт должен на вход принимать строку.
script ("adpo[aopsid[pasidasdpaosdk@aosfopjmvkamsopjasocjmasocaoscoancasncicnasocsd") // Максимум 64 символа в строке
script ("")
script ("wsfdfgdf")

//  /(@[A-Za-z])\w+/.test(str_text)


//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой