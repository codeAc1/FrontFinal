///Catagories Btn Aktiv
let CatBtn=document.querySelector("#catBtn");
let Cat_items=document.querySelector("#cat_items_btn")
let catIconBtn=document.querySelector("#catIconBtn");
CatBtn.addEventListener("click",function(){
    Cat_items.classList.toggle("show")
    catIconBtn.classList.toggle("CatIconRotate")
})

$(function() {

    $('.sidebar-menu i').click(function(){
        $(this).parents('.dropdown').find('.dropdown').not($(this).siblings('ul')).slideUp();
        $(this).siblings('ul').stop(true,true).slideToggle();
        $(this).toggleClass('active');
    });

    $('#btn-open-navbar, #btn-close-navbar, .overlay').click(function(){
        $('.overlay, .sidebar').toggleClass('active');
    })
});