// let num = +prompt("ededi daxil edin");
// let sum = 0;
// let hasil = 1;
// let birinci;
// let ikinci;
// let ucuncu;

// let average=0

// birinci = (num- (num % 100)) / 100;
// ikinci = ((num - (num % 10)) % 100) / 10;
// ucuncu = num % 10;
// sum = birinci + ikinci + ucuncu;
// hasil = birinci * ikinci * ucuncu;

//  average = sum / 3;

// console.log("Rəqəmlərin cəmi: " + sum);
// console.log("Rəqəmlərin hasili: " + hasil);
// console.log("Rəqəmlərin ədədi ortası: " + average);

// let num = +prompt("ededi daxil edin");
// for (let i = 0; i < num; i++) {
//     if (num % i===0) {
//         console.log(i)
//     }

// }
// let num = +prompt("ededi daxil edin");
// let say = 0;
// for (let i = 1; i < num; i++)
//   if (num % i === 0) {
//     say++;
//   }
// console.log(`${say}`);

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// console.log("i    i^2   i^3");

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i * i}    ${i * i * i}`);
// }

// let cutCem = 0;
// let tekCem = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     cutCem += i;
//   } else {
//    tekCem += i;
//   }
// }
// console.log(` ${cutCem}`);
// console.log(` ${tekCem}`);

// let array = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let little=array[0]
// let big = array[1]

// for (let index = 0; index < array.length; index++) {
//     if(array[index] <little)
//         little=array[index]
//  else if(array[index] >big)
//         big=array[index]

// }
// console.log(little);
// console.log(big);

// let array = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let little = array[0];
// let big = array[1];
// let average=0

// for (let index = 0; index < array.length; index++) {
//   if (array[index] < little) little = array[index];
//   else if (array[index] > big) big = array[index];
//   average=(big+little)/2
// }
// console.log(average);

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, over time issues in the application arise, adaptations to changes, and new features happen.`;
// let bosluqSay=0;
// for (let i = 0; i < sampleNews.length; i++) {
//   if (sampleNews[i] === " ") {
//    bosluqSay++;
//   }
// }
// console.log (`${bosluqSay}`);

// let array = [14, 22, 3, 74, 51, 36];
// let eded= +prompt("eded daxil et baxm");

// let number = Number(eded);
// let axtar = false;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === number) {
//    axtar = true;
//     break;
//   }
// }

// if (axtar) {
//   console.log(`${number} buralarda olmalidi yaxsi bax`);
// } else {
//   console.log(`${number} yoxdu brat axtarma yalannan`);
// }

// const students = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
//   { name: "Davud", scores: [100, 100, 100] }
// ];

// let enyuksekAd = "";
// let enyuksekSay = 0;
// const doxsanYuxari = [];

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];

//   const average =
//     student.scores.((a, b) => a + b) / student.scores.length;

//   if (average > enyuksekSay) {
//     enyuksekSay = average;
//     enyuksekAd = student.name;
//   }

//   if (average => 90) {
//     doxsanYuxari.push(student.name);
//   }
// }

// console.log(enyuksekAd);

