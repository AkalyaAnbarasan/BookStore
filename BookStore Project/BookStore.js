searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}

let loginForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}
// function openClass() {
  // Get the element with the class you want to show/hide
  // var element = document.getElementById("Registration-form-container");

  // Toggle the display style
//   if (element.style.display === "none") {
//       element.style.display = "block";
//   } else {
//       element.style.display = "none";
//   }
// }

window.onscroll= () =>{
    // let headerElement=document.querySelector('.header .header2');
    // console.log('headerElement:', headerElement);
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    
    }else{
        document.querySelector('.header .header2').classList.remove('active');

    }   
}

window.onload= () =>{
    // let headerElement=document.querySelector('.header .header2');
    // console.log('headerElement:', headerElement);
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    
    }else{
        document.querySelector('.header .header2').classList.remove('active');

    }
    
}
var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  

  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  // register
  
// let createOne=document.querySelector(".createOne");
// createOne.onclick=function(){
//   window.location.assign("http://127.0.0.1:5500/BookStore%20Project/workspace/register.html#")
// }
