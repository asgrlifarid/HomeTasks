// function herflerBoyuyk(text) {
//     return text.toUpperCase();
// }
// const result = herflerBoyuyk("Hello World");
// console.log(result); 





// let sentence = prompt("cumleni daxil edin");
// function uzunSoz(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//         if(words[i].length > longestWord.length){
//             longestWord = words[i]
//         }
//   }
//     return longestWord;
// }
// console.log(uzunSoz(sentence));






// function reverseTers(cumle) {
//     return cumle.split(' ').reverse().join(' ');
// }
// const result = reverseTers("Hello World");
// console.log(result); 





// function evezlenmisSozIndex(sentence) {
//     const words = sentence.split(' ');
//     let evezlenmis = '';

//     for (let i = words.length - 1; i >= 0; i--) {
//         evezlenmis += words[i] + ' ';
//     }
//     return evezlenmis ;
// }

// const result = evezlenmisSozIndex("javascript öyrənmək maraqlıdır");
// console.log(result); 






// const sentence = "javascript oyrenirik çox maraqlıdır";
// function uzunSoz(sentence) {

//     const words = sentence.split(' ');


//     let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//         if(words[i].length > longestWord.length){
//             longestWord = words[i]
//         }

//   }

//     return longestWord;
// }
// console.log(uzunSoz(sentence));


// function replace(word,char1,char2){
//     let result = word.replaceAll(char1, char2);
//     return result;
// }

// console.log(replace("Salam", "a", "o"));





// ARRAY ile TASKS






const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// if (!shoppingCart.includes("Meat")) {
//   shoppingCart.unshift("Meat"); 
// }
// console.log(shoppingCart);


// if (!shoppingCart.includes("Sugar")) {
//   shoppingCart.push("Sugar"); 
// }

// console.log(shoppingCart);


//  shoppingCart.splice(3,1); 
// console.log(shoppingCart);



// if (shoppingCart.includes("Tea")) {
//   const index = shoppingCart.indexOf("Tea"); 
//   shoppingCart.splice(index, 1, "Green Tea"); 
// }

// console.log(shoppingCart);


const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// countries.reverse();
// console.log(countries);

// countries.splice(2,2,"Azerbaijan");
// console.log(countries);




// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)


const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


// const ilkUcSirketSec = itCompanies.slice(0,3);
// console.log(ilkUcSirketSec);


// const sonUcSirketSec = itCompanies.slice(4,7);
//  console.log(sonUcSirketSec);



// const middleIndex = Math.floor(itCompanies.length / 2);
// let ortadaDuranSirket;
// if (itCompanies.length % 2 === 1) {
//   ortadaDuranSirket = itCompanies.slice(middleIndex, middleIndex + 1);
// } else {
//   ortadaDuranSirket = itCompanies.slice(middleIndex - 1, middleIndex + 1);
// }
// console.log(ortadaDuranSirket);




//  itCompanies.sort();
//  console.log(itCompanies);



// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i].toUpperCase());
// }



// if (itCompanies.includes("Google")) {
//   console.log("Google var yaxsi bax");
// } else {
//   console.log("vincent Company yoxdur");
// }







// const tekOolanSirketler = [];


// for () {

//   const oCount = company.split("o").length - 1; 


//   if (oCount <= 1) {
//     tekOolanSirketler.push(company);
//   }
// }

// console.log(tekOolanSirketler);










// function arraylariBirlesdir(arr1, arr2) {
//     const birlesmisArray = arr1.concat(arr2); 
//     return birlesmisArray.join('>>'); 
// }

// const array1 = ['Gedebey', 'Roma']; 
// const array2 = ['Paris', 'California'];

// const axirki = arraylariBirlesdir(array1, array2);
// console.log(axirki); 

