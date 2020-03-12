 let soma = 0
 let titulo = document.createElement('h2')
function venda(){
  let valor = document.querySelector('input').value
  let div = document.querySelector('div')
  valor = parseInt(valor)
   if (valor == 10 || valor == 25) {
     soma += valor
       titulo.innerHTML =`Valor inserido ${soma}`
       div.appendChild(titulo)
     if(soma === 45){
       titulo.innerHTML =`Retire a sua coca cola`
       div.appendChild(titulo)
       soma = 0
       
        }else if(soma > 45){
          console.log('soma', soma)
          console.log('valor', valor)
          titulo.innerText=`Nao devolvo troco`
          div.appendChild(titulo)       
          soma = 0
        }
     
   }else{
      titulo.innerText=`Valor ${valor} inserido não é valido, maquina so aceita 10 ou 25`
        div.appendChild(titulo)   
     soma = 0
   }
  
  
}

