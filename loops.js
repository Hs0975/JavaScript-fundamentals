// for loop syntax

/* for(intialise;Condition;increment)
{
logic
} */

//Printing the Even Odd numbers    
   /* function EvenOdd(n){
    for(let i=0;i<n;i++){
        if(i%2==0){
            console.log("the even Numbers are",i);
            console.log("\n");
        }
    }
    for(let j=0;j<n;j++){
        if(j%2!=0){
            console.log("The odd numbers are",j);
            console.log("\n");
        }
    }
   }

   EvenOdd(100) */


//Printing the Prime numbers    
 /*   function PrimeNumbers(n){
    for(let i=1;i<=n;i++){
        if(i%2!=0 && i%i==0 ){
            console.log("The Prime Numbers are",i);
            console.log("\n");
        }
        else
    {
        console.log("Please Enter a valid number");
    }
    }
    
   }

   PrimeNumbers(100) 



 */



   //While loop syntax
/* 
   initialise eg let i =0
   while(conditon){
logic

incrementing(i++)
   } */


/* 
function 
   let i=0
   while(){

   } */


   //Do while loop
/* function printVlue(num){
    let i = 0;
    do{
 console.log("Hello world");
 i++;
    }
    while(i<num)
}

printVlue(5);
    */



/// Write a js function that iterates through the number 1 to 50 using for loop
// for each iteration if the number is even print the number and if the number is odd
// continue and skip the printing

/* function Evneodds(){
    for(let i=1; i<=50; i++){
        if(i%2==0){
            console.log("Even numbers",i);
        }
        else{
            continue;
        }
    }
}

Evneodds();
 */


//Write a program to reverse a string;

/* function revString(str){
    
let reversesting = ' '

     
        for(let j=str.length-1; j>=0; j--){
           reversesting = reversesting + str[j];
          
        }
 return reversesting
}

alert(revString("apple")); */


//Write a program to find the number of digit in a number ex : 34789 output: 5

f/* unction countingDigit(num)
{
    for(let i=0; i<num.length; i++){
        while(num>0){
             num = num%10
        }
    }
}

countingDigit(1234) */
