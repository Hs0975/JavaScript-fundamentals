let btn = document.getElementById("button");

btn.addEventListener("click",function(){
  document.getElementById("h3").style.fontFamily="sans-serif"

})

let rset= document.getElementById("Reset");
rset.addEventListener("click",function(){
document.getElementById("h3").style.fontFamily=""
})

let colrbtn= document.getElementById("colrbtn");

colrbtn.addEventListener("click",function(){
  let inpt = document.getElementById("input");
  let color=inpt.value;
  document.getElementById("h3").style.color=color 
  
});
 

/* let firstbox=document.getElementById("div1")
firstbox.addEventListener("click",function(){
 document.body.style.backgroundColor="violet"
})
let secondbox=document.getElementById("div2")
secondbox.addEventListener("click",function(){
 document.body.style.backgroundColor="green"
})

let thirdbox=document.getElementById("div3")
thirdbox.addEventListener("click",function(){
 document.body.style.backgroundColor="orange"
})

let fourthbox=document.getElementById("div4")
fourthbox.addEventListener("click",function(){
 document.body.style.backgroundColor="skyblue"
})

let fifthtbox=document.getElementById("div5")
fifthtbox.addEventListener("click",function(){
 document.body.style.backgroundColor="pink"
})
 */




