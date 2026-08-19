const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent = Number(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = Number(texto.textContent) - 1;
            curtiu = false;
        }

    });

});


const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);


function mudaTema() {

    const corpoPagina = document.body;

    corpoPagina.classList.toggle("tema-escuro");

}
