// Finding the factorial using the recursion

function factWithRecursion(n){
    if(n==1){
      return 1;
    }
    
    return factWithRecursion(n-1)*n  
    }
    
    console.log(factWithRecursion(5))
    
    //fibbinacci Number
    
    
    function fibi(n){
      if(n===0 || n===1){
        return n
      }
      let f1=fibi(n-1);
      let f2 = fibi(n-2);
      return f1+f2;
    }
    
    console.log(fibi(20))