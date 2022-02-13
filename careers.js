var tradition =document.getElementsByClassName("circles")[0]
var people =document.getElementsByClassName("circles1")[0]
var value =document.getElementsByClassName("circles2")[0]
var pop1=document.getElementsByClassName("popup1")[0]
var pop2=document.getElementsByClassName("popup2")[0]
var pop3=document.getElementsByClassName("popup3")[0]
var pop4=document.getElementsByClassName("popup4")[0]
var pop5=document.getElementsByClassName("popup5")[0]
var bg1=document.getElementsByClassName("popupbg1")[0]
var bg2=document.getElementsByClassName("popupbg2")[0]
var bg3=document.getElementsByClassName("popupbg3")[0]
var bg4=document.getElementsByClassName("popupbg4")[0]
var bg5=document.getElementsByClassName("popupbg5")[0]
var  ppop1=document.getElementsByClassName("peoplepopup1")[0]
var  ppop2=document.getElementsByClassName("peoplepopup2")[0]
var  ppop3=document.getElementsByClassName("peoplepopup3")[0]
var  ppop4=document.getElementsByClassName("peoplepopup4")[0]
var  ppop5=document.getElementsByClassName("peoplepopup5")[0]
var  pbg1=document.getElementsByClassName("peoplepopupbg1")[0]
var  pbg2=document.getElementsByClassName("peoplepopupbg2")[0]
var  pbg3=document.getElementsByClassName("peoplepopupbg3")[0]
var  pbg4=document.getElementsByClassName("peoplepopupbg4")[0]
var  pbg5=document.getElementsByClassName("peoplepopupbg5")[0]
var  vppop1=document.getElementsByClassName("vpeoplepopup1")[0]
var  vppop2=document.getElementsByClassName("vpeoplepopup2")[0]
var  vppop3=document.getElementsByClassName("vpeoplepopup3")[0]
var  vppop4=document.getElementsByClassName("vpeoplepopup4")[0]
var  vppop5=document.getElementsByClassName("vpeoplepopup5")[0]
var  vpbg1=document.getElementsByClassName("vpeoplepopupbg1")[0]
var  vpbg2=document.getElementsByClassName("vpeoplepopupbg2")[0]
var  vpbg3=document.getElementsByClassName("vpeoplepopupbg3")[0]
var  vpbg4=document.getElementsByClassName("vpeoplepopupbg4")[0]
var  vpbg5=document.getElementsByClassName("vpeoplepopupbg5")[0]



function tcircle1(){
    people.style.display="block"
    tradition.style.display="none"
    value.style.display="none"
}

function tcircle3(){
    tradition.style.display="none"
    people.style.display="none"
    value.style.display="block"
}


function pcircle1(){
    people.style.display="none"
    tradition.style.display="block"
    value.style.display="none"

}

function pcircle3(){
    people.style.display="none"
    tradition.style.display="none"
    value.style.display="block"

}

function vcircle3(){
    tradition.style.display="block"
    people.style.display="none"
    value.style.display="none"
}

function vcircle1(){
    tradition.style.display="none"
    people.style.display="block"
    value.style.display="none"
}




function Hackathons(){

  pop1.classList.toggle("active") 
  bg1.classList.toggle("active") 
}
function Hackathons1(){

    pop2.classList.toggle("active")  
  bg2.classList.toggle("active") 

  }
  function Hackathons2(){

    pop3.classList.toggle("active")  
  bg3.classList.toggle("active") 

  }
  function Hackathons3(){

    pop4.classList.toggle("active")  
  bg4.classList.toggle("active") 

  }
  function Hackathons4(){

    pop5.classList.toggle("active")  
  bg5.classList.toggle("active") 

  }

  

function peoplephn(){

    ppop1.classList.toggle("active") 
    pbg1.classList.toggle("active") 
  }
  function peoplephn1(){
  
      ppop2.classList.toggle("active")  
    pbg2.classList.toggle("active") 
  
    }
    function peoplephn2(){
  
      ppop3.classList.toggle("active")  
    pbg3.classList.toggle("active") 
  
    }
    function peoplephn3(){
  
      ppop4.classList.toggle("active")  
    pbg4.classList.toggle("active") 
  
    }
    function peoplephn4(){
  
      ppop5.classList.toggle("active")  
    pbg5.classList.toggle("active") 
  
    }

     

function vpeoplephn(){

    vppop1.classList.toggle("active") 
    vpbg1.classList.toggle("active") 
  }
  function vpeoplephn1(){
  
      vppop2.classList.toggle("active")  
    vpbg2.classList.toggle("active") 
  
    }
    function vpeoplephn2(){
  
      vppop3.classList.toggle("active")  
    vpbg3.classList.toggle("active") 
  
    }
    function vpeoplephn3(){
  
      vppop4.classList.toggle("active")  
    vpbg4.classList.toggle("active") 
  
    }
    function vpeoplephn4(){
  
      vppop5.classList.toggle("active")  
    vpbg5.classList.toggle("active") 
  
    }

    const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const sliderInner=document.querySelector(".slider-inner");
const slider=document.querySelector(".slider");



var condition = window.matchMedia("(max-width: 426px)")

if(condition.matches)
{
  let nindex=0;
let len=document.getElementsByClassName("boxs")


next.addEventListener('click',function(){
  nindex++;
  sliderInner.style.transform=`translateX(${-23.7*nindex}em)`;
  if (nindex==len.length-1){
    next.style.display="none";
  }
  if (nindex!=0){
    prev.style.display="block";
  }
})

prev.addEventListener('click',function(){
  nindex--;
  if (nindex==0){
    prev.style.display="none"
  }
  if (nindex!=len.length){
    next.style.display="block";
  }
  sliderInner.style.transform=`translateX(${-23.7*nindex}em)`})
}
else
{

let nindex=0;


next.addEventListener('click',function(){
  nindex++;
  sliderInner.style.transform=`translateX(${-65.6*nindex}em)`;
  if (nindex==2){
    next.style.display="none";
  }
  if (nindex!=0){
    prev.style.display="block";
  }
})

prev.addEventListener('click',function(){
  nindex--;
  if (nindex==0){
    prev.style.display="none"
  }
  if (nindex!=3){
    next.style.display="block";
  }
  sliderInner.style.transform=`translateX(${-65.6*nindex}em)`})
}




  
  const mobiledragslider_inner=document.querySelector(".mobiledragslider-inner");

  var xy=0;
  var yx=0;
  var preval=0;
  
  
  function wid(){
  const wid=mobiledragslider_inner.getElementsByClassName("boxs")[0].offsetWidth;
  const finalwid=(wid*14)-(wid*2)+10;
  console.log(finalwid)
  return(finalwid);}
  
  
  setInterval(wid,1000)
  
  
  mobiledragslider_inner.addEventListener("touchstart",(e)=>{
    xy=e.touches[0].clientX;
  })
  
  mobiledragslider_inner.addEventListener("touchmove",function(e){
    yx=e.touches[0].clientX;
  })
  
  mobiledragslider_inner.addEventListener("touchend",(e)=>{
  
    let val=xy-yx;
    preval=preval+val;
    if (preval>wid())
    {
      preval=wid();
    }
    if (preval < -7)
    {
      preval=-0;
    }
    if (val>0)
  { 
      mobiledragslider_inner.style.transform=`translateX(${-preval}px)`
  }
   if (val<0)
    {
      mobiledragslider_inner.style.transform=`translateX(${-preval}px)`
  }
  })