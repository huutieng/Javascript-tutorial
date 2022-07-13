
//-------- Date ----------

// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() +1;
// var year = date.getFullYear();


// console.log(`${day}/ ${month}/ ${year}`);


//----------- If-else---------

// var a = 5;
// if(a === 5){
//     console.log('True');
// } 
// else {
//     console.log('False');
// }

// switch (a) {
//     case 3:
//         console.log('Day la 3');
//         break;
//     case 4:
//         console.log('Day la 4');
//         break;
//     case 5:
//         console.log('Day la 5');
//         break;
//     default :
//         console.log('False');
// }


//------ Toán tử 3 ngôi Ternary operator ------

// var course = {
//     name: 'JS',
//     coin: 10
// }

// if(course.coin >0){
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Free');
// }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free'; 

// console.log(result);

// var a =1;
// var b=2;

// var c = a > 0 ? a :b;

// console.log(c);


//--------- For ----------

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }


// var myArray = [
//     'JS',
//     'Java',
//     'Angular'
// ]

// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

// // tính tổng
// var myArray2 = [
//     1,
//     2,
//     3
// ]

// var arrayLength2 = myArray2.length;

// //console.log(typeof myArray[0])
// var result = 0;
// for (var i = 0; i < arrayLength2; i++) {
//     result += myArray2[i];
// }

// console.log(result);

//-------- For in -------

// var myInfo = {
//     name : 'Tieng',
//     age : 22
// }

// for(var key in myInfo){
//     //console.log(key);
//     console.log(myInfo[key]);
// }


// var languages = [
//     'JS',
//     'Angular'
// ]

// for(var key in languages){
//     // console.log(key);
//     console.log(languages[key]);
// }


// // lấy từng ký tự
//var myString = 'Javascript';

// for(var key in myString){
//     // console.log(key);
//     console.log(myString[key]);
// }

//-------- For of ---------

// for (var value of myString) {
//     console.log(value);
// }

// var myInfo2 = {
//     name2 : 'Tieng',
//     age2 : 22
// }

// // muốn lấy key trong Object từ for of thì :
// for(var value of Object.keys(myInfo2)){
//     console.log(value);
// }

// // muốn lấy value trong Object từ for of :
// for(var value of Object.values(myInfo2)){
//     console.log(value);
// }


//-------- While -------
// var i=0;

// while(i<10){
//     i++;
//     console.log(i);
// }

// var languages = [
//     'JS',
//     'Angular'
// ]

// var i = 0;
// while(i< languages.length){
//     console.log(languages[i]);
//     i++;
// } 


//------- Do while --------
// chạy ít nhất 1 lần sau đó xét điều kiện
// var i = 0;

// do{
//     i++;
//     console.log(i);
// }while(i<10)

// var isSuccsess = false;

// do {
//     i++;
//     console.log('Lan : ' + i);
//     if (false) {
//         isSuccsess = true;
//     }
// } while (!isSuccsess && i<=3);
// // isSuccess là false thì do sẽ chạy 1 lần 
// // nếu if sai thì sẽ bỏ qua và tới while !isSuccess = true
// // dk đúng sẽ chạy tiếp Do


//------- Break và Continue ------
// break
// for( var i = 0; i <10; i++){
//     if (i>=3){
//         break;
//     }
//     console.log(i);
// }
// // continue
// for( var i = 0; i <10; i++){
//     if (i%2!==0){
//         continue;
//     }
//     console.log(i);
// }

//----- Nested loop -----

// var myArray = [
//     [1, 2],
//     [3, 4]
// ]

// for (var i = 0; i< myArray.length; i++){
//     for(var j=0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }

// for(var i = 1; i<= 100; i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// for(var i= 100; i>0; i-=5){
//     console.log(i);
// }


// --------- Array ---------

// var myCourses = [
//     {
//         id: 1,
//         name: 'JS',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'React',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Angular',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'Java',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'HTML',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'HTML',
//         coin: 500
//     }
// ];


// //------ For each : duyệt từng phần tử của mảng bằng vòng lặp
// myCourses.forEach(function (course, index) {
//     console.log(index, course);
// });

// // ------- Every : kiểm tra tất cả phần tử phải thỏa mãn 1 dk 
// var isFree = myCourses.every(function (course, index) {
//     console.log(index);
//     return course.coin === 0;
// });

// console.log(isFree);

// // ------ Some : kiểm tra từng phần tử và chỉ cần 1 phần tử đúng dk sẽ dừng
// var isFree = myCourses.some(function (course, index) {
//     console.log(index);
//     return course.coin === 0;
// });

// console.log(isFree);

// // ------- Find : tìm kiếm phần tử và trả về phần tử đó
// var isFree = myCourses.find(function (course, index) {
//     //console.log(index);
//     return course.name === 'Angular';
// });

// console.log(isFree);

// // ---- Filter : tìm kiếm và trả về tất cả phần tử tìm dc
// var list = myCourses.filter(function (course, index) {
//     //console.log(index);
//     return course.name === 'HTML';
// });

// console.log(list);


// --------- Map : chỉnh sửa hoặc thay đổi element của 1 mảng

// var newCourses = myCourses.map(function(course, index){
//     return {
//         id : course.id,
//         name : `Ngon ngu : ${course.name}`,
//         coin : course.coin,
//         coinText : `Gia : ${course.coin}`,
//         index : index
//     }
// })

// console.log(newCourses);


// ------ Reduce: trả về 1 kết quả duy nhất sau khi xử lý
// // accumulator là biến lưu trữ
// // Reduce sau khi lặp sẽ gọi tới hàm và trả về 2 giá trị (2 giá trị còn lại tạm thời k dùng)
// var myCourses2 = myCourses.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.coin;
// },0); // 0 là giá trị đầu tiên gán vào accumulator
// // currentValue là giá trị hiện tại của mảng

// console.log(myCourses2);


// Flat - làm phẳng mảng từ Depth array - mảng sâu 

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);


// Lấy ra các khóa học đưa vào mảng mới

var topics = [
    {
        topic: ' Front End',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'JS'
            }
        ]
    },
    {
        topic: ' Back End',
        courses: [
            {
                id: 1,
                title: 'Java'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]

var myArray3 = topics.reduce(function (course, topic) {
    return course.concat(topic.courses);
}, [])

console.log(myArray3);

