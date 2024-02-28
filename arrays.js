let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
 companies.shift() // removing first elemnt

console.log(companies)


companies.splice(2,1,"OLA")//removing Uber and adding ola
console.log(companies)

companies.push("amazone")  // adding amazone at the end of arry
console.log(companies)


companies.unshift("Flipkart")//adding element at the start

console.log(companies)