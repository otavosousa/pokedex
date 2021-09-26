import Table from '../Table'
import Pagination from '../Pagination'
import Poke from '../../factories/Poke'
import { useEffect, useState } from 'react'

function Main(){

    const poke = new Poke()
    const [pokeData, setPokeData] = useState({})

    async function handlePoke(pagination){
        console.log(pagination)
        const data = await poke.index(pagination)
        setPokeData(data)
    }

    useEffect(() => {
        handlePoke()
    }, [])

    if(Object.keys(pokeData).length === 0) {
        return (
            <main>
                <span>Carregando...</span>
            </main>
        )
    }
    
    return (
        <main>
            <Table data={pokeData}/>
            <Pagination data={pokeData} setData={handlePoke}/>
        </main>
    )
}

export default Main