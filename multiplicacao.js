const tabuada = (array, callback) => {
  
    callback(array);
}


tabuada([1,5,7], (array) =>{
    
    
    let resultado = 0;

    for (let numero of array){
        for (let i = 0; i<= 10; i++){
            resultado = numero * i;
            
        console.log(`${numero} x ${i} = ${resultado}`); 
        } 
       
    }
   
})

