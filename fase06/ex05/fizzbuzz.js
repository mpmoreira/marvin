function fizzbuzz(x,y) {
    
    while(x <= y){
        
        if(x %3 === 0 && x %5 === 0){
            console.log(x + " FizzBuzz");
        
        
        }else if(x %3 === 0){
            console.log(x + " Fizz");
        
        }else if(x %5 === 0){
            console.log(x + " Buzz");
        
        }else{
            console.log(x);
        }
        
        x++;
    }
}


