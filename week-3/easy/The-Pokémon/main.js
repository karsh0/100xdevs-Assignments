//Take a number from the user as input and search for pokemon with that number as id and return to the user

let outputContainer = document.getElementById('output-container');
const button = document.querySelector('.button');
let id = 0;;
let isLoading = false;
let abilitiesArray = [];


button.addEventListener("click", async function (){
    id = document.querySelector('input').value;
    isLoading = true;
    if(isLoading){
        outputContainer.innerHTML = `<h2 style="text-align:center;">Loading...</h2>`
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    isLoading = false;
    displayCard(data)
})

function displayCard(data) {
    console.log(data.name);

    const abilitiesArray = data.abilities.map(ability => ability.ability.name);
    const abilitiesHTML = abilitiesArray.map(ability => `<div style="
        background-color: rgb(52, 223, 22);
      padding: 5px;
      cursor: pointer;
      border: none;
      width: max-content;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        ">${ability}</div>`).join('');

    outputContainer.innerHTML = `
        <h2 style="text-align: center; color: yellow;">PokeAPI</h2>
        <h3>Pokemon name: ${data.name}</h3>
        <h3>Pokemon Abilities:</h3>
        <div style="display:flex; gap:10px;">${abilitiesHTML}</div>
    `;
}
