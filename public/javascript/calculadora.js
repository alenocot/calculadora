let funcionPredeterminada = () =>{
    
    const formulario = document.getElementById('formulario')    

    document.getElementById("mas").addEventListener("click", suma);
    document.getElementById("menos").addEventListener("click", resta);
    document.getElementById("por").addEventListener("click", multiplica);
    document.getElementById("divi").addEventListener("click", division);    
    document.getElementById("limpiar").addEventListener("click", limpiar);    

    formulario.addEventListener('submit', (evento) => {
        document.getElementById("operacion").value = document.getElementById("operacion").value + document.getElementById('valorPorHora').value + " = ";
        var  valorTotal = Number.parseFloat(document.getElementById('operacion').value[0]);  
        evento.preventDefault();           
        document.getElementById('calcular').disabled = true;  
        document.getElementById('valorPorHora').disabled = true;  
        
        const arreglo = document.getElementById("operacion").value.split(' ')
        
        for (var j=1; j < arreglo.length; j++) {
          if(arreglo[j] != " "){
            if(arreglo[j] == "+" ){                                                
              valorTotal = valorTotal + Number.parseFloat(arreglo[j+1])            
            }else if(arreglo[j] == "-" ){                    
              valorTotal = valorTotal - Number.parseFloat(arreglo[j+1])        
            }else if(arreglo[j] == "*" ){
              valorTotal = valorTotal * Number.parseFloat(arreglo[j+1])        
            }else if(arreglo[j] == "/" ){
              valorTotal = valorTotal / Number.parseFloat(arreglo[j+1])        
            } 
          }       
        }
                  
        document.getElementById('valorTotal').value = valorTotal;  
        document.getElementById("valorPorHora").value = "";    

        
      })

}

let limpiar = () =>{
  document.getElementById("valorPorHora").value = "";  
  document.getElementById('valorTotal').value = "";
  document.getElementById('valorPorHora').disabled = false;
  document.getElementById("operacion").value = "";
  valorTotal = "0";
  document.getElementById('calcular').disabled = false;
}


let suma = () => {
  if (document.getElementById("valorPorHora").value != "")    {    
    document.getElementById("operacion").value = document.getElementById("operacion").value + document.getElementById('valorPorHora').value + " + ";
    document.getElementById("valorPorHora").value = "";
    document.getElementById("valorPorHora").focus();    
  }
}

let resta = () => {  
  if (document.getElementById("valorPorHora").value != "")    {    
    document.getElementById("operacion").value = document.getElementById("operacion").value + document.getElementById('valorPorHora').value + " - ";
    document.getElementById("valorPorHora").value = "";
    document.getElementById("valorPorHora").focus();  
  }
}

let multiplica = () => {
  if (document.getElementById("valorPorHora").value != "")    {    
    document.getElementById("operacion").value = document.getElementById("operacion").value + document.getElementById('valorPorHora').value + " * ";
    document.getElementById("valorPorHora").value = "";
    document.getElementById("valorPorHora").focus();    
  }
}

let division = () => {
  if (document.getElementById("valorPorHora").value != "")    {    
    document.getElementById("operacion").value = document.getElementById("operacion").value + document.getElementById('valorPorHora').value + " / ";
    document.getElementById("valorPorHora").value = "";
    document.getElementById("valorPorHora").focus();    
  }
}
  
funcionPredeterminada();


