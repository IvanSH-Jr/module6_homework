//Задание 1

function parityCounter(){
    let someArr = [1, 2, 'privet', 3, 2, null, 6, 0, '-', '44' ]
    let evenCounter = 0
    let oddCounter = 0

    for(let indexArr = 0; indexArr < someArr.length; indexArr++){
        if(someArr[indexArr] % 2 == 0 && someArr[indexArr]!= 0 && someArr[indexArr] != null){
            evenCounter++
        }else if(someArr[indexArr] % 2 != 0 && someArr[indexArr] != null && !isNaN(someArr[indexArr])){
            oddCounter++
        }
        if (someArr[indexArr] === null) {
            console.log(indexArr + ' Is null')
        } 
    }
    console.log('Even = ' + evenCounter)
    console.log('Odd = ' + oddCounter)
}

parityCounter()


//Задание 2
/*numberType(prompt('Введите значение'))

function numberType(set_of_number){
    
    if(set_of_number > 1000 && set_of_number != 0){
        console.log("Данные не верны. Нужно меньше 1000")
        return
    };
     
    let possibleDivisor = 2
    let flag = 0

    for(possibleDivisor; possibleDivisor*possibleDivisor <= set_of_number && flag !=1; possibleDivisor++){
        if(set_of_number % 2 == 0){
            flag = 1
        }
    };

    if(flag == 1){
        console.log("Составное")
    }else{
        console.log("Простое")
    };
};
*/
//Задание 3
/*let inputValue1 = 5
let inputValue2 = 5


function inputNumber(inputValue1){
    console.log('зашел1 ' + inputValue1)
    let Value1 = inputValue1
    let Value2 = inputValue2
    return Sum(Value1, Value2)
}

function Sum(inputValue1, inputValue2){
    let result = inputValue1 + inputValue2
    return console.log(result)
}

inputNumber(inputValue1)
*/
//Задание 4
/*const stopProg = setInterval(function(value1, value2){
    for(let counter = value1; counter <= value2; counter++){
        console.log(counter)
    }
}, 1000, 5, 15)

setInterval(() => { clearInterval(stopProg)
    
}, 1000);*/


/*
//Задание 5
  const xINn = (value1, value2) => {
     
      if(value1 < 0 ){
          return console.log('Действительное число')
      }
      const result = Math.pow(value1, value2)
      return result
  }

  const seeSomeResult = xINn(125, 5)
  console.log(seeSomeResult)*/