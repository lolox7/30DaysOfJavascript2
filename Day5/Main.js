// 💻 Exercise
// Exercise: Level 1
import { webTechs } from './Webtechs.js';
import { countries } from './Countries.js';
// import { countries } from '/Countries.js'

// Declare an empty array;
let emptyArray = []
// Declare an array with more than 5 number of elements
let arrayOfFive = ['once', 'upon','a','time','blue']

// Find the length of your array
// alert(arrayOfFive.length)
// alert(arrayOfFive.length)
 
// Get the first item, the middle item and the last item of the array
// alert(arrayOfFive[0] + ' ' +  arrayOfFive[parseInt(arrayOfFive.length / 2)] + ' ' + arrayOfFive[(arrayOfFive.length-1)])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['pompelo', 3, true , Number,-5 , 'lomepal']
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies =  [ "Facebook", 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
// console.log(itCompanies)
// Print the number of companies in the array
// console.log(itCompanies.length)
// Print the first company, middle and last company
// let middleIt = itCompanies.length/2
// console.log(itCompanies[0] + ' ' + itCompanies[parseInt(middleIt)] + ' ' + itCompanies[itCompanies.length - 1])
// Print out each company
// for (i = 0 ; i < itCompanies.length; i++) {
//     console.log(itCompanies[i])
//     }
// Change each company name to uppercase one by one and print them out
// let itUppercase = []
// for (i = 0 ; i < itCompanies.length; i++) {
//     (itUppercase[i] = itCompanies[i].toUpperCase())
//     }
// console.log(itUppercase)
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(    
//     itCompanies[0] + ', ' +itCompanies[1] + ', ' +itCompanies[2] + ', ' +
//     itCompanies[3] + ', ' +itCompanies[4]+ ', ' +itCompanies[5] + ', ' +
//     itCompanies[6] + ' are big IT compagnies')
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if (itCompanies.includes('Facebook')) {
//     console.log('Facebook is in the array')
// }   else {
//     console.log('Facebook is not in the array')
// }
// Filter out companies which have more than one 'o' without the filter method
// let oCounter = 0, charCounter = 0
// for (i = 0 ; i < itCompanies.length; i++) {
//     oCounter = 0
//     for (charCounter = 0; charCounter < itCompanies[i].length; charCounter++ ){
//         if (itCompanies[i].charAt(charCounter) === 'o'){
//             oCounter++            
//         }
//     }
//     if (oCounter >= 2) { 
//         console.log(itCompanies[i])
//     }    
// }
// Sort the array using sort() method
// console.log(webTechs.sort())
// Reverse the array using reverse() method
// console.log(webTechs.reverse())
// Slice out the first 3 companies from the array
// console.log(webTechs.slice(0,3))
// Slice out the last 3 companies from the array
// console.log(webTechs.slice(webTechs.length - 3 , webTechs.length))

// Slice out the middle IT company or companies from the array
// console.log(webTechs[parseInt(webTechs.length / 2)])
// Remove the first IT company from the array
// webTechs.shift()
// console.log(webTechs)
// Remove the middle IT company or companies from the array
// webTechs.splice(2 , 2)
// console.log(webTechs)
// Remove the last IT company from the array
// webTechs.pop()
// console.log(webTechs)

// Remove all IT companies
// webTechs.splice(0 , webTechs.length)
// console.log(webTechs)

// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// console.log(countries +' and '+ webTechs)
// First remove all the punctuations and change the string to array and count the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// text = text.replace(/\.|,/g,'')
// console.log(text)
// let words = text.split(' ')
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat')
// console.log(shoppingCart)
// add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.push('Sugar')
// console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
// let honeyPlace , i

// for (i = 0; i < shoppingCart.length ;i++) {
//   if (shoppingCart[i] === 'Honey'){
//     honeyPlace = i
//   }
// }
// shoppingCart.splice(honeyPlace , 1)
// console.log(shoppingCart)
// modify Tea to 'Green Tea'
// let teaPlace

// for (i = 0; i < shoppingCart.length ;i++) {
//   if (shoppingCart[i] === 'Tea'){
//     teaPlace = i
//   }
// }
// console.log(teaPlace)
// shoppingCart[teaPlace] = 'Green Tea'
// console.log(shoppingCart)


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// console.log(countries.includes('Ethiopia'))
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// if (webTechs.includes('Sass')) {
//     console.log('Sass is a css Preprocess')
// }   else {
//     webTechs.push('Sass')
//     console.log(webTechs)
// }
// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages)

let minAge = ages[0] , maxAge = ages[0],j
for (j = 0 ; j < ages.length ; j++) {
    if (ages[j] >= maxAge) {
        maxAge = ages[j]
    }

    if (ages[j] <= minAge) {
        minAge = ages[j]
    }
}
console.log(maxAge + ' ' + minAge)

// Find the median age(one middle item or two middle items divided by two)

// Find the average age(all items divided by number of items)
let ageSum = 0, i
for (i = 0 ; i < ages.length ; i++) {
    ageSum = ageSum + ages[i]
}
let averageAge = (ageSum / ages.length) 
// console.log('the average Age amongst the students is ' + averageAge)
// Find the range of the ages(max minus min)
console.log(minAge)
console.log ('the range of the ages is equal to ' + (maxAge - minAge))
// Compare the value of (min - average) and (max - average), use abs() method 
console.log('the diffference betwenn minimal value and average is ' +  (-1 *(parseInt((minAge - averageAge)*10))/10) +
' and the difference between maximal value and average age is ' + 0.1*parseInt((maxAge - averageAge)*10 + " so the the average is farther away from the minimaal age tha from the maximal age")
)
//1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10))
// Find the middle country(ies) in the countries array
console.log(countries[parseInt((countries.length / 2)-1)] +" and "+countries[parseInt((countries.length / 2))])
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length / 2 !== parseInt(countries.length/2)) {
    let firstPart = countries.splice(0,5)
    let secondPart = countries.slice(0,5)
    console.log(firstPart + secondPart)
}
// 🎉 CONGRATULATIONS ! 🎉