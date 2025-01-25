const toggleBtn = document.getElementsByClassName("bg-share"); // Botão
const caixa = document.getElementsByClassName("pop-up"); // Div que será estilizada
const tri = document.getElementsByClassName("triangulo");
const lbinfo = document.getElementsByClassName("label-name")
toggleBtn[0].addEventListener("click", () => {
  console.log("clicado")
  caixa[0].classList.toggle("active");
  tri[0].classList.toggle("active");
  
 
});
