import React, {useState} from 'react'

function PokemonForm(props) {
    const [allPokemon] = useState([]) 

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" >
            Fetch Pokemon</button>
        </form>
    )
}

export default PokemonForm