//var fullName = 'Hello JS';

//-------Phuong thuc-------

// alert(fullName);

// console.log(fullName);

// confirm('Xac nhan');
// confirm('Hello');

// prompt('Xac nhan kem gia tri');
// prompt('Hello');

// gọi 1 ;ần
/* setTimeout(function(){
    alert('Hello');
}, 1000); */

// gọi lại nhiều lần
/* setInterval(function() {
    console.log('Hello');
}, 1000); */

/* // Hello is alerted repeatedly after every 3 seconds
let timerId = setInterval(() => alert('Hello'), 3000);

// Clear intervals after 6 sec with the timer id
setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000); */

//----------Toan tu-----------
//Toan tu so hoc Arithmetic
/* var a = 1;
var b = 2;

console.log(a + b);

//Toan tu gan Assignment
var lastName = 'Nguyen';

//Toan tu so sanh Comparison

if (a < b) {
    console.log('Dung');
}
else {
    console.log('Sai');
}

//Toan tu Logical

if (a > 0 && b > 0) {
    console.log('True');
}
else {
    console.log('False');
} */

// Prefix va Postfix

/* var c = 5;

var output = ++c + c--; // 6 + 6, biến c-- cập nhật của ++c
console.log('Output : ', output);
// output trả về giá trị trước khi a tăng 1
var kqC = c++;
console.log('Ket qua C : ', c)
// biến c là kết quả sau khi cộng = 6 */

// Toán tử gán chứ đồng thời 4 toán tử gán

/* var a = 2, b = 3, c = 4;
var output = a += b -= c; // a + b - c
console.log('Output : ', output); */

// Sting
// var firstName= 'Tieng';
// var lastName = 'Nguyen';
// console.log(firstName + ' ' +lastName);
// var Name = 'Tieng';
// Name = Name + 'Huu'
// console.log(Name)

//-----Boolean----
//True or Fail

// var a = 1;
// var b = 2;

// var isSuccess = a > b;
// console.log(isSuccess);

//----- If esle ------
// var result = 'A' || '2' || 'B' || NaN;

// console.log(result);

// if (result) {
//     console.log('True');
// }
// else {
//     console.log('False');
// }

//----------String----------

// Backslash : Thêm dấu ' ' hay \ vào chuỗi dùng \' và \\

// var fullName = 'Hello JS';
// var themdau = 'Day la dau \\ va dau \'';

// console.log(fullName.length);
// console.log(themdau);

// // Template String ES6 
// var firstName = 'Tieng';
// var lastName = 'Nguyen';

// console.log(`My name is ${firstName} ${lastName}`);

// Length
// console.log(fullName.length);

//Find index
// console.log(fullName.indexOf('JS'));

// // Tìm kí tự JS sau kí tự JS đầu tiên
// console.log(fullName.indexOf('JS', 7))

// // Tìm kí tự JS cuối cùng trong chuỗi
// console.log(fullName.lastIndexOf('JS'));

// Search
// console.log(fullName.search('JS'));
// // K thể truyền vị trí vào phương thức Search

// // Cut String
// console.log(fullName.slice(6,8));
// // Từ phải qua trái
// console.log(fullName.slice(-2)); 
// // vị trí đầu k có thì lấy vị trí cuối cần cut

// Replace
// console.log(fullName.replace('JS', 'Javascript'));
// // Thay thế tất cả 
// console.log(fullName.replace(/JS/g,'Javascript'));

// Convert to upper case and to lower case
//Chuyển all thành viết HOA và thường
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// Trim
// Loại bỏ khoảng trắng
// console.log(fullName.trim().length);

// Split : dựa vào điểm chung để cắt thành mảng
// var myString = 'HTML, CSS, JS, Angular';
// console.log(myString.split(', '));

// Cắt từng phần tử nếu k có điểm chung hoặc k truyền giá trị vào
// var myString = 'HTML';
// console.log(myString.split(''));

// CharAt : lấy kí tự từ index
// console.log(fullName.charAt(2));
// console.log(fullName [1]);
// // Nếu k có ký tự sẽ trả về chuỗi rỗng dùng typeof 

//--------Number--------

// var age = 10;
// var Pi = 3.14;

// toString : number -> string
// console.log(typeof age.toString());

// toFixed : làm tròn số thập phân
// 0.5 = dưới (3.14 = 3), >=0.5 = trên (3.14 =4) 
// console.log(Pi.toFixed(1));

//----------Array------------

// Tao Array

// var languages = [
//     'JS',
//     'Angular',
//     'React'
// ];

// console.log(languages);
// console.log(languages.length);

// // Kiểm tra kiểu dữ liệu
//  console.log(Array.isArray(languages));

// // Lấy phần tử index
// console.log(languages[0]);

// // to String 
// console.log(languages.toString());

// // Join - Array > String
// console.log(languages.join(', '));

// // Pop - Xóa phần tử cuối mảng và trả về 
// // phần tử đã xóa, xóa hết sẽ trả về undefined

// console.log(languages.pop());

// // Push - thêm element vào cuối mảng và trả về 
// // độ dài mới của mảng
// console.log(languages.push('Java'));

// // Shift - Xóa phần tử đầu mảng và trả về 
// // phần tử đã xóa, xóa hết sẽ trả về undefined
// console.log(languages.shift());

// // Unshift - thêm element vào đầu mảng và trả về 
// // độ dài mới của mảng
//console.log(languages.unshift('Java'));

// // Splicing - xóa, chèn tại nơi dc trỏ đến
// languages.splice(1, 1, 'Java');
// // nếu k xóa thì thêm 0 vào 
// languages.splice(1, 0, 'Java'); 

// // Concat - nối mảng
// var language2 = [
//     'Java'
// ];
// console.log(languages.concat(language2));

// // Slicing - cắt element
// console.log(languages.slice(1, 2));
// console.log(languages.slice(-2, -1));

// console.log(languages);


//--------- Funtion--------

// function showDialog() {
//     console.log('Hello JS');
// };

// showDialog();

// function writeLog(message) {
//     console.log(message);
// };

// writeLog('Hello JS');

// function writeLog() {
//     console.log(arguments);
// };
// writeLog('JS', 'React');


// function writeLog() {
//     for (var param of arguments) {
//         console.log(param);
//     }
// };
// writeLog('JS', 'React');


// function writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString);
// };
// writeLog('JS', 'React');

// Return

// function cong(a, b) {
//     return a + b;
// };

// var result = cong(5, 5);

// console.log(result);


//-----------Object-----------

// var myId = {
//     name : 'Tieng',
//     age : '22',
// };

// // thêm value vào Object

// myId.email='huutieng1412';
// myId['my-email'] = 'huutieng170100';

// // lấy ra value 2 cách
// var myage = 'age';
// console.log(myId.name);
// console.log(myId['age']);

// console.log(myId[myage]);
// // lấy ra thông qua biến, nếu để thành chuỗi
// // sẽ tìm trong Obj và k có sẽ trả undefined
// console.log(myId['myage']);

// // định nghĩa key trong Obj bằng 1 biến
//  var mykey = 'email'

//  var myId = {
//     name : 'Tieng',
//     age : '22',
//     [mykey] : 'huutieng1701',
//     getName : function(){
//         return this.name;
//     },
// };

// // function > phương thức
// // others > thuộc tính : property

// // xóa key
// delete myId[mykey];

// console.log(myId.getName());

// console.log(myId);


//---------Object construcotr----------

function User(firstName, lastName, Avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Avatar = Avatar;

    this.getName = function () {
        return `${firstName} ${lastName}`;
    }
}

User.prototype.className = 'className';
User.prototype.getclassName = function () {
    return this.className
}

var auther = new User('Tieng', 'Nguyen', 'avatar');
var user = new User('user1', 'Nguyen', 'avatar');


auther.title = 'Hello JS';
user.comment = 'Day la comment';

console.log(auther.getName());
console.log(user);
console.log(user.getclassName());



