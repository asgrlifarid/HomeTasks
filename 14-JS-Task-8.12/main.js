// function ededUstu (number1 ,number2){
//     number1 = number1 ** number2
//     return number1;
// }
// const number1 = +prompt("1-ci eded:")
// const number2 = +prompt("2-ci eded:");
// console.log(ededUstu(number1,number2));







// function tekrarelementiSil(array) {
//   const tekrarlanmayanElement = [];
//   for (let i = 0; i < array.length; i++) {
//     let tekrarlananElement = false;

//     for (let j = 0; j < tekrarlanmayanElement.length; j++) {
//       if (array[i] === tekrarlanmayanElement[j]) {
//         tekrarlananElement = true;
//         break;
//       }
//     }

//     if (!tekrarlananElement) {
//       tekrarlanmayanElement.push(array[i]);
//     }
//   }
//   return tekrarlanmayanElement;
// }

// console.log(tekrarelementiSil([1, 2, 2, 3, 4, 4, 5]));
// console.log(tekrarelementiSil([1, 2, 3, 4, 5]));
// console.log(tekrarelementiSil([1, -2, -2, 3, 4, -5, -6, -5]));




// function tekrar(array) {
//     const tekrarolmayanElementler = {};
//     const netice = [];

//     for (let i = 0; i < array.length; i++) {
//         const indikiElement = array[i];

//         if (!tekrarolmayanElementler[indikiElement]) {
//             tekrarolmayanElementler[indikiElement] = true;
//             netice.push(indikiElement);
//         }
//     }

//     return netice;
// }

// console.log(tekrar([1, 2, 1, 2, 3]));
// console.log(tekrar(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));






// function sozlerinSayi(cümlə) {
//     let sözlər = 0;
//     let içindəBoşluq = true;
//     for (let i = 0; i < cümlə.length; i++) {
//         const cariHərf = cümlə[i];
//         if (cariHərf !== ' ') {
//             if (i === 0 || içindəBoşluq) {
//                 sözlər++;
//             }
//             içindəBoşluq = false;
//         } else {
//             içindəBoşluq = true;
//         }
//     }
//     return sözlər;
// }
// console.log(sozlerinSayi("ozumden cumle yaziram ele bele"));




// function concatArray(array1, array2) {
//   const umumiArray = [];

//   for (let i = 0; i < array1.length; i++) {
//     umumiArray.push(array1[i]);
//   }

//   for (let i = 0; i < array2.length; i++) {
//     umumiArray.push(array2[i]);
//   }

//   return umumiArray;
// }

// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));






// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// function ilkHerflerBoyuk(array) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         const country = array[i];

//         const ilkUcluk = country[0].toUpperCase() + country[1].toUpperCase() + country[2].toUpperCase();
//         result.push(ilkUcluk);
//     }

//     return result;
// }

// console.log(ilkHerflerBoyuk(countries));





// function ilkHerfBoyuk(cumle) {
//     let netice = ``; 
//     let yeniSoz = true; 

//     for (let i = 0; i < cumle.length; i++) {
//         const yeniHerf = cumle[i];

//             if (yeniSoz) {
//                 netice += yeniHerf.toUpperCase();
//                 yeniSoz = false; 
//             } else {
//                 netice += yeniHerf;
//             }
        
//     }

//     return netice; 
// }
// console.log (ilkHerfBoyuk("a short sentence")); 




// function isEqual(array1, array2) {
   
//     if (array1.length !== array2.length) {
//         return false;
//     }

   
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false; 
//         }
//     }

//     return true; 
// }


// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); 
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); 
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])); 