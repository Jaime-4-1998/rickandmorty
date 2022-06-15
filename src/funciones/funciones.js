import axios from 'axios'



const datainfo = async (id,state) =>{
    const petition = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(petition.data)
}

export {
    datainfo
}