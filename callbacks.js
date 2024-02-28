/* function processData(a,callbacks){
let c = a*a
    callbacks(c);
}

function printresult(num){
    console.log(num);
    }
    processData(6,printresult);
 */
 //finding a square of a number using callbacks function
 
/* function processData(num,cb){

  cb(num**2)  // num*num

}
 
function printResult(num){

  console.log(num);

}

processData(7,printResult) */


//Number is even or odd

/* function oddOrNot(num,cb){
  cb(num);
}

function callback(num){
 if(num%2==0){
   console.log("Even")
 }
 else{
   console.log("Odd")
 }
}


oddOrNot(7,callback) */

function Even(n){
  if(n%2==0){
    return true
  }
}

function Odd(n){
  if(n%2!=0){
    
  }
}