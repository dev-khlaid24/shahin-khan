// document.querySelector(".r-btn").addEventListener("click",{
//     function (event) {
//         document.querySelector(".proudct-slide").scrollLeft +=1100;
//         event.preventDafault();

//     }
// });
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide')
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftbtn.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide')
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftbtn1 = document.querySelector(".l-btn-1");
const rightbtn1 = document.querySelector(".r-btn-2");

rightbtn1.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-1')
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftbtn1.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-1')
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftbtn2 = document.querySelector(".l-btn-3");
const rightbtn2 = document.querySelector(".r-btn-4");

rightbtn2.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-3')
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftbtn2.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-3')
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftbtn3 = document.querySelector(".l-btn-5");
const rightbtn3 = document.querySelector(".r-btn-6");

rightbtn3.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-4')
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftbtn3.addEventListener('click', function(event){
    console.log('done');
    const conent = document.querySelector('.product-slide-4')
    conent.scrollLeft -=1100;
    event.preventDefault();
});

