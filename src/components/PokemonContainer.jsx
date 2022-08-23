import React, {useState} from 'react'
import PokemonDisplay from './PokemonDisplay'
import PokemonForm from './PokemonForm'

function PokemonContainer() {
    const [showPokemon] = useState([])

    return (
        <fieldset>
            <PokemonForm/>
            <PokemonDisplay pokemonName={showPokemon}/>
        </fieldset>
    )
}

export default PokemonContainer