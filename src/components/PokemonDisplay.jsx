import React, {useState, useEffect} from 'react'
import axios from "axios"

function PokemonDisplay(props) {
    const {showPokemon} = props
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            // .then(res=>res.json())
            // console.log()
            .then(
                res=>{setPokemon(res.results)})
            // .catch(err=> console.log(err))
    }, [])
    console.log("this is pokemon", pokemon)
    return (
        <fieldset>
            {
                pokemon?
                <div>
                    <h1>{pokemon.map((item ,i) =><li key ={i}>{item.name}</li>)}</h1>
                </div>:
                <h3>Loading.....</h3>
            }
        </fieldset>
    )
}

export default PokemonDisplay