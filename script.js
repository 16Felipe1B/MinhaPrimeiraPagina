document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PESQUISA DOS SANTOS
       ===================================================== */

    const busca = document.getElementById("buscaSanto");
    const artigos = [...document.querySelectorAll("main article")];
    const nenhumResultado = document.getElementById("nenhumResultado");

    if (busca) {

        busca.addEventListener("input", () => {

            const termo = busca.value
                .trim()
                .toLowerCase();

            let encontrados = 0;

            artigos.forEach((artigo) => {

                const titulo =
                    artigo.querySelector("h2")?.textContent.toLowerCase() || "";

                const texto =
                    artigo.textContent.toLowerCase();

                const encontrou =
                    titulo.includes(termo) ||
                    texto.includes(termo);

                artigo.style.display =
                    encontrou ? "" : "none";

                if (encontrou) {
                    encontrados++;
                }

            });

            if (nenhumResultado) {

                nenhumResultado.hidden =
                    encontrados !== 0;

            }

        });

    }


    /* =====================================================
       MODO ESCURO
       ===================================================== */

    const botaoTema =
        document.querySelector(".btn-tema-escuro");

    if (botaoTema) {

        const temaSalvo =
            localStorage.getItem("temaSantos");

        if (temaSalvo === "escuro") {

            document.body.classList.add("modo-escuro");

        }


        botaoTema.addEventListener("click", () => {

            document.body.classList.toggle("modo-escuro");

            const estaEscuro =
                document.body.classList.contains("modo-escuro");

            localStorage.setItem(
                "temaSantos",
                estaEscuro ? "escuro" : "claro"
            );

        });

    }


    /* =====================================================
       BOTÕES DE CORAÇÃO E CURTIDA
       ===================================================== */

    document.querySelectorAll("article").forEach((artigo) => {

        const botoes =
            artigo.querySelectorAll("button");

        botoes.forEach((botao) => {

            const contador =
                botao.querySelector("span");

            if (!contador) {
                return;
            }


            botao.addEventListener("click", () => {

                let numero =
                    Number(contador.textContent) || 0;

                numero++;

                contador.textContent =
                    numero;


                /* Pequena animação ao clicar */

                botao.animate(
                    [
                        {
                            transform: "scale(1)"
                        },

                        {
                            transform: "scale(1.15)"
                        },

                        {
                            transform: "scale(1)"
                        }
                    ],
                    {
                        duration: 250,
                        easing: "ease-out"
                    }
                );

            });

        });

    });


    /* =====================================================
       EFEITO SUAVE NOS CARDS
       ===================================================== */

    artigos.forEach((artigo) => {

        artigo.addEventListener("mouseenter", () => {

            artigo.style.zIndex = "5";

        });


        artigo.addEventListener("mouseleave", () => {

            artigo.style.zIndex = "1";

        });

    });


    /* =====================================================
       BOTÕES DO CABEÇALHO
       ===================================================== */

    const botoesNavegacao =
        document.querySelectorAll(".hero-actions a");

    botoesNavegacao.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            const destino =
                botao.getAttribute("href");

            if (
                destino &&
                destino.startsWith("#")
            ) {

                const elemento =
                    document.querySelector(destino);

                if (elemento) {

                    evento.preventDefault();

                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       ANIMAÇÃO DOS ARTIGOS AO ENTRAREM NA TELA
       ===================================================== */

    const observador =
        new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "card-visivel"
                        );

                        observador.unobserve(
                            entrada.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    artigos.forEach((artigo) => {

        artigo.classList.add(
            "card-animacao"
        );

        observador.observe(artigo);

    });


    /* =====================================================
       MENSAGEM DE BOAS-VINDAS NO CONSOLE
       ===================================================== */

    console.log(
        "✝ Santos da Igreja Católica — blog carregado com sucesso!"
    );

});