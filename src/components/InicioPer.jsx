import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Paginacion from './Paginacion'
const InicioPer = () => {
    const [personajes, setPersonajes] = useState(null) 
    const [info, setInfo] = useState({});
    const url = "https://rickandmortyapi.com/api/character";
    const data = async (url) =>{
        const petition = await axios.get(url)
        setPersonajes(petition.data.results)
        setInfo(petition.data.info);
    }
    const onprev = () => {
     data(info.prev);
    };
    const onnext = () => {
    data(info.next);
    };
    useEffect(() => {
        data(url);
    }, []);
  return (
    <>
        { personajes != null ? (
            personajes.map(personaje =>(
                <div key={personaje.id}>
                    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                </div>
            ))
        ) : ('Sin Datos')}
        <p>Paginacion</p>
        <Paginacion prev={info.prev} next={info.next} onprev={onprev} onnext={onnext}/>
    </>
  )
}

export default InicioPer