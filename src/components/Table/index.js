function Table({data}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {data.results.map((pokemon, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <span>{pokemon.name}</span>
                            </td>
                            <td>
                                <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                                    {pokemon.url}
                                </a>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default Table