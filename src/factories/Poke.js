import api from '../services/api'

function Poke() {

    async function index(url = '/pokemon'){

        const response = await api.get(url)
        const data = await response.data
        return data
    }

    return {
        index
    }
}

export default Poke