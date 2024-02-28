/* function checkNumberis2or3(n){
    if(n==2){
console.log("number is two");
    }
    else if (n==3)
    {
        console.log("number is three");
    }
    else{
        console.log("number is neither 3 or 4");
    }
}

checkNumberis2or3(3)
 */


/* function checknumberIsEvenorOdd(num){
    if (num%2==0){
        console.log("Number is even")
    }
    else{
        console.log("number is odd");
    }
}

checknumberIsEvenorOdd(45); */


/* function CheckingThestrig(string){
if(string=='A'){
    console.log("apple");
}
else if(string=='B')
{
    console.log("Banana");
}
else if(string=='C')
{
    console.log("Cat");
}
else
{
    console.log(" I Dont know")
}
}
CheckingThestrig('C'); */


//Write a JavaScript program that displays the largest integer among two integers.

/* function LargestInterger(num1,num2){
if(num1>num2){
    console.log("num1 is greater the num2")
}
else if (num1<num2){
    console.log("num2 is greater then num1")
    }
    else{
        console.log("Both are same");
    }
}

const large = LargestInterger(20,30)
console.log(large);

 */

// Fizz buzz checking
/* function CheckingTheNumber(num){
    if(num%3==0)
    {
console.log("Fizz");
    }
    else if (num%5==0)
    {
console.log("buzz")
    }
    else{
        console.log("fizzbuzz")
    }
}

let num = CheckingTheNumber(35)
console.log(num) */



/* function sortNumber(num1,num2,num3){
    if (num1>num2&&num1>num3){
        if(num2>num3){
            console.log(num1+num2+num3)
        }
    }
} */

//checking a number is prime or not 

/* function NumberPrimeOrNot(num){
    if(num%2!=0 && num%1==0 ){
console.log("The number is prime number")
    }
    else if (num%3!=0){
        console.log("The given number is not a prime number");
    }
}

NumberPrimeOrNot(15);
 */

//Write a JavaScript conditional statement to find the largest of five numbers...
/* 
function largestNum(a,b,c,d,e) {
    if(a>b && a>c && a>d && a>e)
    {
        console.log("The largest number is ",a);
    }
   
    else if (b>a && b>c && b>d && b>e)
    {
        console.log("The largest number is ",b);
    }
    else if (c>a && c>b && c>d && c>e)
    {
        console.log("The largest number is ",c);
    }
    else if (d>a && d>c && d>e && d>b)
    {
        console.log("The largest number is ",d);
    }
    else if (e>a && e>c && e>d && e>b)
    {
        console.log("The largest number is ",e);
    }
}

largestNum(2,48,120,300,100) */

// checking the speed of a car
/* function SpeedCar(dist , t){
    
let speed = dist / t

if(speed>40){
    console.log("apply Brake")
}
else {
    console.log("keep going")
}
}

SpeedCar(40,2); */

//write a progrm to find a foctorial of a number

/* 
function findingFact(num){
    let fact = 1;
    if (num==0){
        return 1;
    }
    else if(num>0){
        for(let i=2;i<=num; i++){

         fact = fact*i;
        
        }

    }
    else {
        console.log("Enter a correct number");
    }
    
    console.log(fact)
}

findingFact(4); */

function checkNum(n){
    
    let i=2;
    while(i<=n){
       
        if(i%3==0 && n%5==0){
            console.log("AB");
           }
        
        else if(i%5==0){
            console.log("B");
        }
        else if(i%3==0){
            console.log("A");
        }
       else{
        console.log(i);
       }
    }
   
}

console.log(checkNum(15));