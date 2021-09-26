function Pagination({data, setData}){

    function handlePagination(pagination){
        if(pagination){
            const getUrl = pagination.split('v2')[1]
            setData(getUrl)
        } 
    }

    function Count(){

        const pokeList = data.results
        const previous = pokeList[0].url.split('/pokemon/')[1].split('/')[0]
        const next = pokeList[19].url.split('/pokemon/')[1].split('/')[0]

        return (
            <span>{`${previous}-${next} de ${data.count}`}</span>
        )
    }

    return (
        <div>
            <div>
                <Count />
                <button type="button" onClick={() => handlePagination(data.previous)} disabled={!data.previous ? true : false}>Voltar</button>
                <button type="button" onClick={() => handlePagination(data.next)} disabled={!data.next === data.count ? true : false}>Avançar</button>
            </div>
        </div>
    )
}

export default Pagination