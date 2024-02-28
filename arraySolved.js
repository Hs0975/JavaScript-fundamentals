// Finding the maximum value of an array

let arr1 = [3, 7, 2, 8, 5]

  let newarr = arr1.reduce((pre,next)=>{
   if(pre<next){
     return next;
   }
   else{
     return pre
   }
  })
  
  console.log(`The maximum value is ${newarr}`)


 // Sum of an array

 let arr2 = [3, 7, 2, 8, 5]

  let newarr2 = arr2.reduce((pre,next)=>{
   return pre+next
  })
  
  console.log(`The sum of given value is ${newarr2}`)


  // Reversing an array

  let arr = [3, 7, 2, 8, 5]
let reversed = arr.reverse()
  console.log(`The reversed array is ${reversed}`)



