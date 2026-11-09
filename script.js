const gridElement = document.querySelector("#pokemon-grid");
const listaPokemons = ["pikachu", "charmander", "bulbasaur", "squirtle", "ditto", "snorlax", "mewtwo", "gengar"];

async function carregarPokemons() {
    for (const nomeOuId of listaPokemons) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
            if (!resposta.ok) {
                throw new Error("Erro ao buscar o Pokémon");
            }
            const dados = await resposta.json();
            
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="image-container">
                    <img src="${dados.sprites.front_default}" alt="${dados.name}">
                </div>
                <h2>${dados.name}</h2>
                <p class="pokemon-id">ID: ${dados.id}</p>
                <div class="info-container">
                    <div class="info-box">
                        <span class="label">Altura</span>
                        <span class="value">${dados.height}</span>
                        <span class="unit">decímetros</span>
                    </div>
                    <div class="info-box">
                        <span class="label">Peso</span>
                        <span class="value">${dados.weight}</span>
                        <span class="unit">hectogramas</span>
                    </div>
                </div>
            `;

            gridElement.appendChild(card);
        } catch (erro) {
            console.error("Erro:", erro);
        }
    }
}

carregarPokemons();
