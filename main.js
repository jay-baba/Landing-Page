const hamburger = document.querySelector(".hamburger-container");
const tabNav = document.querySelector(".tab-nav");
const tabNavList = document.querySelectorAll(".tab-nav li");
const tabList = document.querySelectorAll(".tab-body");
const questions = document.querySelectorAll(".question");
const bookLogo = document.querySelector('.bookmark-logo');
let toggle = false;

hamburger.addEventListener("click", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  toggle = !toggle;
  let srcHam = "./images/icon-hamburger.svg";
  let srcClose = "./images/icon-close.svg";
  hamburger.src = toggle ? srcClose : srcHam;
  navList.classList.toggle("active");
  bookLogo.classList.toggle('active');
  //below code will stop body from scrolling when menu is open
  document.body.style.position = toggle ? 'fixed' :'static';

});



tabNavList.forEach((item, index, array) => {
  item.addEventListener("click", () => {
    tabNav.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    

    if (item.classList.contains("one")) {
      tabList[0].classList.add("active");
      tabList[2].classList.remove("active");
      tabList[1].classList.remove("active");
    }

    if (item.classList.contains("two")) {
      tabList[1].classList.add("active");
      tabList[0].classList.remove("active");
      tabList[2].classList.remove("active");
    }

    if (item.classList.contains("three")) {
      tabList[2].classList.add("active");
      tabList[1].classList.remove("active");
      tabList[0].classList.remove("active");
    }
    });
});


questions.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("open");
    });
});