import React, {useEffect, useState} from 'react'
import Navigation from '../Nav/Navigation'
import { useParams } from 'react-router-dom'
import { datainfo } from '../../funciones/funciones'
import {ContainerPerso,CardImg,Img} from './PersonajeElements'
import { PersoId,PersoTitle,PersoAtri,PersoParr } from './PersonajeElements'
const Personaje = () => {
    const [personaje,setPersonaje] = useState(null)
    const params = useParams()
    useEffect(()=>{
        datainfo(params.id,setPersonaje)
    },[])
  return (
    <>
     <Navigation />
        {personaje != null ? (
            <div key={personaje.id}>
               <ContainerPerso>
                  <PersoId>Identificador: {params.id}</PersoId>
                  <PersoTitle>{personaje.name}</PersoTitle>
                  <PersoAtri>
                    <PersoParr>
                      Estatus: {personaje.status}
                    </PersoParr>
                    <PersoParr>
                      Especie: {personaje.species}
                    </PersoParr>
                    <PersoParr>
                      Genero: {personaje.gender}
                    </PersoParr>
                    <PersoParr>
                     Origen: {personaje.origin.name}
                    </PersoParr>
                    <PersoParr>
                      Localización Actual: {personaje.location.name}
                    </PersoParr>
                  </PersoAtri>
                  <CardImg>
                    <Img loading="lazy" src={personaje.image} alt={personaje.name} title={personaje.name} width="100" height="100"/>
                  </CardImg>
               </ContainerPerso>
            </div>
        ) : ('no hay')}
    </>
  )
}

export default Personaje