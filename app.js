fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((tipoDeDatos) => tipoDeDatos.json())
    .then((data) => {
        // console.log(data.results)
        data.results.forEach(function(pokemon) {
            fetch(pokemon.url)
                .then(t => t.jason())
                .then((data_2) => {
                    console.log(data_);
                })

        })
    });