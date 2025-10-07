const pontosTuristicos = [
    {
        img: "img/praia-guaratuba.jpg",
        frase: "Praia Central de Guaratuba - Um lugar perfeito para relaxar e curtir o mar."
    },
    {
        img: "img/igrejaguaratuba.jpg",
        frase: "Igreja Matriz de Guaratuba - Um ponto histórico e cultural da cidade."
    },
    {
        img: "img/morro-do-calama.jpg",
        frase: "Morro do Calam - Um local para apreciar a vista panorâmica da região."
    },
    {
        img: "img/farol-guaratuba.jpg",
        frase: "Farol de Guaratuba - Um ícone da cidade que guia os navegantes."
    },
    {
        img: "img/parque-ecologico.jpg",
        frase: "Parque Ecológico - Um espaço para contato com a natureza e trilhas."
    }
];

let indiceAtual = 0;

const aventuraDiv = document.getElementById("aventura");
const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

function mostrarPonto(indice) {
    const ponto = pontosTuristicos[indice];
    aventuraDiv.innerHTML = `
        <img src="${ponto.img}" alt="Imagem do ponto turístico" />
        <p>${ponto.frase}</p>
    `;
    btnAnterior.disabled = indice === 0;
    btnProximo.disabled = indice === pontosTuristicos.length - 1;
}

btnAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        mostrarPonto(indiceAtual);
    }
});

btnProximo.addEventListener("click", () => {
    if (indiceAtual < pontosTuristicos.length - 1) {
        indiceAtual++;
        mostrarPonto(indiceAtual);
    }
});

// Mostra o primeiro ponto ao carregar a página
mostrarPonto(indiceAtual);

