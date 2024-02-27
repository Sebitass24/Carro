var contenedor = document.querySelector(".contenedor")
var llanta1 = document.querySelector(".llanta1")
var llanta2 = document.querySelector(".llanta2")
var humo = document.querySelector(".humo")
var luz = document.querySelector(".luces")


contenedor.addEventListener('click', contenedorMover)

function contenedorMover(){
  contenedor.classList.add('fondoAnimado')
  llanta1.classList.add('llanta1Mover')
  llanta2.classList.add('llanta2Mover')
  humo.classList.remove('oculto')
  humo.classList.add('humoAnimado')
  luz.classList.remove('oculto') 
  luz.classList.add('luzAnimada')
}