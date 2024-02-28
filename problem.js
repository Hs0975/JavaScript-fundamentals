/* [9:23 PM] Shubham  Dixit


### Problem Statement:
 
You are given an array of objects representing various people, each with properties like `name`, `age`, and `country`. Your task is to perform the following operations in sequence:
 
1. **Filtering**: Filter out the people who are under 18 years of age.

2. **Mapping**: For the filtered array, create a new array where each person object is transformed to include a new property `isAdult` set to `true`.

3. **Splicing**: From this new array, remove the first two elements, and then add a new person object at the beginning of the array.
 
#### Example:
 
**Input Array:**

```javascript

[

  { name: "Alice", age: 25, country: "USA" },

  { name: "Bob", age: 17, country: "Canada" },

  { name: "Carlos", age: 32, country: "Mexico" },

  { name: "Diana", age: 15, country: "USA" },

  { name: "Eva", age: 20, country: "France" }

]

```
 
**Expected Output Array:**

```javascript

[

  { name: "NewPerson", age: 30, country: "Germany", isAdult: true },

  { name: "Carlos", age: 32, country: "Mexico", isAdult: true },

  { name: "Eva", age: 20, country: "France", isAdult: true }

]

```
  */

let arr= [

    { name: "Alice", age: 25, country: "USA" },
  
    { name: "Bob", age: 17, country: "Canada" },
  
    { name: "Carlos", age: 32, country: "Mexico" },
  
    { name: "Diana", age: 15, country: "USA" },
  
    { name: "Eva", age: 20, country: "France" }
  
  ]
//solution of first question
  arr.filter((ele)=>{
if(ele.age<18){
    console.log(ele)
}

  })



  // third question

 
let arr2= [

    { name: "Alice", age: 25, country: "USA" },
  
    { name: "Bob", age: 17, country: "Canada" },
  
    { name: "Carlos", age: 32, country: "Mexico" },
  
    { name: "Diana", age: 15, country: "USA" },
  
    { name: "Eva", age: 20, country: "France" }
  
  ]
  
 arr2.splice(0,2,)
console.log(arr2)
 
