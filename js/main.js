let pergunta = document.querySelectorAll(".pergunta")

for( var i = 0; i < pergunta.length ; i++){
    pergunta[i].addEventListener("click", function () {
        this.classList.toggle("pergunta-ativa")
        var flecha = this.firstElementChild
        flecha.classList.toggle("rodar")
        var resposta = this.nextElementSibling
        resposta.classList.toggle("mostrar-resposta")
    })
}
