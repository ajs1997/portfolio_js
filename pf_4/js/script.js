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