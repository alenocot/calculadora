let funcionPredeterminada = () =>{
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora = document.getElementById('valorPorHora').value
        let interfazHora = document.getElementById('interfazHoras').value
        let testingHoras = document.getElementById('testingHoras').value

        let resultado = (interfazHora * valorPorHora) + (valorPorHora * interfazHora) + (valorPorHora * testingHoras)

        document.getElementById('valorTotal').value = resultado
      })

}

funcionPredeterminada();

