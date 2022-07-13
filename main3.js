
// ------ Includes: tìm kiếm và trả về Boolean trong String và Array
// // String
// var myStr = 'Hello JS';

// console.log(myStr.includes('JS')); 
// // phía sau có thể truyền vào vị trí bắt đầu tìm kiếm 

// // Array
// var myArr = ['JS', 'HTML'];

// console.log(myArr.includes('JS'));



// --------- Math Object ---------

// // Math.PI
// console.log(Math.PI);

// // Math.round
// console.log(Math.round(1.2));

// // Math.abs
// console.log(Math.abs(-5));

// // Math.ceil
// console.log(Math.ceil(5.1));

// // Math.floor
// console.log(Math.floor(0.5));

// // Math.random
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10));

// var random = Math.floor(Math.random() * 5);
// var bonus = [
//     '10 coins',
//     '20 coins',
//     '30 coins',
//     '40 coins',
//     '50 coins'
// ]

// console.log(bonus[random]);

// var random2 = Math.floor(Math.random() * 100); // 0-99

// if (random2 < 5) { // random nhỏ hơn 5 thì thực hiện
//     console.log('Succsess');
// }


// // Math.min
// console.log(Math.min(-1,1,2));

// // Math.min
// console.log(Math.max(-1,1,2));


// --------- Callback ----------
// thỏa 2 điều kiện là hàm và dc truyền qua đối số
// function myF (params){
//     params('Hoc lap trinh');
// }

// function myCallback(value){
//     console.log('Value: ' + value); 
// }

// myF(myCallback);


// --------- Map2 --------------

// var courses = [
//     'JS',
//     'Angular',
//     'HTML, CSS'
// ]

// Array.prototype.map2 = function (Callback) {
//     var arrayLength = this.length;
//     var output = [];

//     for (var i = 0; i < arrayLength; i++){
//         var result = Callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// }

// var html = courses.map2(function (course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(html.join(''));


// ------ Empty elements array --------

// var courses2 = new Array(10);

// courses2.push('Java');

// console.log(courses2);

// for ( var index in courses2){
//     console.log(courses2[index]);
// }



// -------- ForEach2 --------

// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }

// // var courses = new Array(10);

// // courses.push('Java');


// courses.forEach2(function (course, index, array) {
//     console.log(course, index, array);
// })



// -------- filter2 ----------

// var courses3 = [
//     {
//         name: 'JS',
//         coin: 10,
//         isFinish: true
//     },
//     {
//         name: 'Java',
//         coin: 50,
//         isFinish: true
//     },
//     {
//         name: 'HTML, CSS',
//         coin: 30,
//         isFinish: true

//     },
// ];

// Array.prototype.filter2 = function (callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// var filterResult = courses3.filter2(function (course) {
//     return course.coin > 10;
// });

// console.log(filterResult);



// ---------- Some2 ---------

// Array.prototype.some2 = function(callback) {
//     for ( var index in this){
//         if(this.hasOwnProperty(index)){
//             if(callback(this[index], index, this))
//             return true;
//         }
//     }
//     return false;
// }

// var result = courses3.some2(function (coures){
//     return coures.isFinish;
// });

// console.log(result);




// ------- Every ----------

// Array.prototype.every2 = function (callback) {
//     var output = true;
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// var result2 = courses3.every2(function (coures) {
//     return coures.isFinish;
// });

// console.log(result2);






