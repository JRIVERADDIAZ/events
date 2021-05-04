const btn = document.querySelector('.btn') 
const aCotizar = []
let pintador =document.getElementById('costos');

class clente {
    constructor(cost,año,interes){
      this.cost = cost;
      this.año = año; 
      this.interes = interes;
    }
}



btn.addEventListener('click', () => {
   aCotizar.push(new clente( document.getElementById('costo').value,
     document.getElementById('año').value,
    document.getElementById('interes').value
   ))

   aCotizar.forEach( art =>{
    pintador.innerHTML += `
    PIEZA 1: ${art.cost} <br>
    PIEZA 2: ${art.año}<br>
    PIEZA 3: ${art.interes}<br> 
    `})
   })
