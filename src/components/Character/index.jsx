import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from '../Pagination/'
import {CharacterTitle,ContainerChara,ParrStatus,ParrSpecies,ParrGender,Button} from './CharacterElements'
import {CardDesing,CardContent,CardImg,CardTitle,CardDescription,Img,CardAtributtes,CardStatus,CardType} from './CharacterElements'

const Character = () => {
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
    <CharacterTitle>Characters of Rick and Morty</CharacterTitle>
        <ContainerChara>
            { personajes != null ? (
                personajes.map(personaje =>(
                    <div key={personaje.id}>
                        <CardDesing href={`/personaje/${personaje.id}`}>
                                <CardContent>
                                        <CardImg>
                                        <Img loading="lazy" src={personaje.image} alt={personaje.name} title={personaje.name} width="100" height="100"/>
                                        </CardImg>
                                        <CardTitle>
                                            {personaje.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {personaje.location.name}
                                        </CardDescription>
                                        <CardAtributtes>
                                            <CardStatus>
                                                <ParrStatus>
                                                 Status: {personaje.status}
                                                </ParrStatus>
                                                <ParrSpecies>
                                                Species: {personaje.species}
                                                </ParrSpecies>
                                            </CardStatus>
                                            <CardType>
                                                <ParrGender>
                                                    Gender: {personaje.gender}
                                                </ParrGender>
                                            </CardType>
                                        </CardAtributtes>
                                    <Button href={`/personaje/${personaje.id}`}>View {personaje.name}</Button>
                                </CardContent>
                            </CardDesing>
                    </div>
                ))
            ) : ('Cargando Datos')}
            
        </ContainerChara>
        <Pagination prev={info.prev} next={info.next} onprev={onprev} onnext={onnext}/>
    </>
  )
}

export default Character