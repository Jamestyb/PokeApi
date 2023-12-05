let cont = document.querySelector('.grid')
        let cards = document.querySelector('.card')
            for(let  i = 1; i<153; i++){
                let url = `https://pokeapi.co/api/v2/pokemon/${i}`
                //https://pokeapi.co/api/v2/pokemon/ditto
                //https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
                fetch(url).then( response=>{
                    return response.json()
                }).then(data=>{
                        const pokemon ={
                            name: data.name,
                            id: data.id,
                            image: data.sprites['front_default'],
                            height: data.stats[0].base_stat,
                            habil: data.abilities.map((ability)=>ability.ability.name).join(' / '),
                            type: data.types.map((type)=>type.type.name).join(' / ')
                        }
                    cont.innerHTML += ""
                    pei(pokemon)
                    console.log(data)
                } )
                function pei(pokemon){
                    cont.innerHTML+= `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${pokemon.image}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.name}</h5><br>
                            <div class="a">
                            <span class="card-text"><b>Type: </b> ${pokemon.type}</span><br>
                            </div><br>
                            <span class="card-text"><b>Abilities: </b> ${pokemon.habil}</span><br>
                            </div><br>
                            <span class="card-text"><b>Base HP:</b>  ${pokemon.height}</span><br>
                            </div>
                        </div>
                        </div>` 
                }
                function pesquisa() {
                let input = document.getElementById("inpus").value.toLowerCase();
                let cartas = document.getElementsByClassName("card");
            
                for (let i = 0; i < cartas.length; i++) {
                let tituloCarta = cartas[i].querySelector(".card-title").textContent.toLowerCase();
            
                    if (tituloCarta.includes(input)) {
                    cartas[i].style.display = "grid";
                    } else {
                    cartas[i].style.display = "none";
                        }
                }
            }
        }