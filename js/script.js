// 하나씩 나오는 서브메뉴

$("nav > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
 });
 $("nav > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
 });



// 네비전체에서 나오는 서브

// $("nav > ul > li").mouseover(function(){
//     $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function(){
//     $("ul.sub").stop().slideUp(200);
// });



// 브라우저 전체가 나오는 서브

// $("nav > ul > li").mouseover(function (){
//     $(".nav_bg,ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//     $(".nav_bg,ul.sub").stop().slideUp(200);
// });



// 480네비

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });