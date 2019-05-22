function por42(num1, num2) {

    var resp = false
    
    while (resp === false && num1 <= num2){
        if (num1 % 42 === 0){
            resp = num1 + 42
        }
        num1++
        
    }
    
    if (resp>num2) {
        resp = false
    }
    if (resp === false) {
        console.log("Não encontrado")
    }
    return resp
    
}
