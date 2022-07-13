
// ------- Đệ quy ----------

// function countDown(num){
//     if(num>0){
//         console.log(num);
//         return countDown(num -1);
//     }
//     return num;
// }

// countDown(3);



// ---------- HTML DOM ----------
// lấy ra thẻ li từ document
// var boxNode = document.querySelector('.box-1');

// console.log(boxNode);
// console.log(boxNode.querySelectorAll('li'));


// -------- DOM Attribute -------

// var headingElement = document.querySelector('h1');

// headingElement.title = 'test';

// -------- innerText và TextContent

// var headingElement = document.querySelector('.box-1');

// console.log(headingElement.innerText);

// headingElement.innerText = 'Hello JS';



// // --------- innerHTML---------

// headingElement.innerHTML = '<h1>HTML DOM</h1>'


//--------- Style ----------

// headingElement.style.width = '100px';
// headingElement.style.height = '100px';
// headingElement.style.backgroundColor = 'gray';


// Object.assign(headingElement.style, {
//     width : '100px',
//     height : '100px',
//     backgroundColor : 'gray'
// });




// --------- ClassList ------------

// headingElement.classList.add('gray');



// ---------- DOM events -----------

// var headingElement = document.querySelectorAll('h1');

// for (var i = 0; i < headingElement.length; i++) {
//     headingElement[i].onclick = function (e) {
//         console.log(e.target);
//     }
// }

// lấy ra value của input
// var inputElement = document.querySelector('input[type="text"]');

// inputElement.oninput = function(e){
//     console.log(e.target.value);
// }

// lấy ra value của checkbox
// var inputElement = document.querySelector('input[type="checkbox"]');

// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }


// lấy ra selection 
// var inputElement = document.querySelector('select');

// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }




// ---------- Promise -----------


// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000);
//     })


// // ------- Promise.resolve ---------

// var promise = Promise.resolve('Success');

// // ------- Promise.reject ----------

// var promise = Promise.reject('False');

// promise
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(err){
//         console.log(err);
//     })



// -------- Promise.all -----------

var promise1 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve([1]);
    }, 1000);
})

var promise2 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve([2, 3]);
    }, 2000);
})

Promise.all([promise1,promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    })
