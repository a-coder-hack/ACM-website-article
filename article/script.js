var preloader=document.getElementById('loading');
function myfunction(){
    setTimeout(function(){preloader.style.display= 'none'},0);
}

//comment out this part to see the preloader
window.onload= myfunction();



setTimeout(function(){_INTERVAL_VAL = setInterval(Type, 100);},3000);
var y=0;
const nav_slide = ()=>{
    // const nav_bar =document.querySelector(".bar");
    const burger = document.querySelector(".burger");
    const nav= document.querySelector(".nav-links");

    burger.addEventListener("click",()=>{
        // nav_bar.add("chback");
        y++;
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

nav_slide();
var x;
// console.log($(window).scrollTop());  
$(window).on('scroll',function(){
    console.log($(window).scrollTop());
    if(y%2==1)
    window.scrollTo(0,x);    
    if(($(window).scrollTop()-x)>0 && $(window).scrollTop()>713 && y%2==0)
    {
        // console.log("yes");
        $(".bar").addClass('x'); 
    }
    else
    $(".bar").removeClass('x'); 
    x=$(window).scrollTop();
});

function getId(element)
{
    console.log("hello");
    location.href="./article/article.html";
}