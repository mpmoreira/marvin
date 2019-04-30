function numeroAleatorio(){
    var doc =  document.getElementById("container")
    var num = Math.round(Math.random() * (0 - 10)) + 10
   doc.innerHTML = num 
   
}
