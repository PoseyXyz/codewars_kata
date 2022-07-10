/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//SOLUTION
function pigIt(str){
    //Code here
    let stringArray = str.split(' ')
    let resultArray = []
    for (let i = 0; i<stringArray.length; i++){
     if(!stringArray[i].match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)){
      let singleString = ''
      let firstLetter = stringArray[i].substr(0, 1)
      let restOfLetters = stringArray[i].substr(1, stringArray[i].length)
      singleString = restOfLetters+firstLetter+'ay'
      resultArray.push(singleString)
     }else{
       resultArray.push(stringArray[i])
     }
    }
    let result = ''
    result = resultArray.join(' ')
    return result
  }