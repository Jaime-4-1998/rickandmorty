import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { datainfo } from '../funciones/funciones'

const Personaje = () => {
    const [personaje,setPersonaje] = useState(null)
    const params = useParams()
    useEffect(()=>{
        datainfo(params.id,setPersonaje)
    },[])
  return (
    <>
        {personaje != null ? (
           <div>
                <small>{params.id}</small>
                <h1>{personaje.name}</h1>
                <p>{personaje.status}</p>
           </div>
        ) : ('no hay')}
    </>
  )
}

export default Personaje