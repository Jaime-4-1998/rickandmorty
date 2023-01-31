import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from '../Pagination/'
import Search from '../Search/'
import Navigation from '../Nav/Navigation'
import {CharacterTitle,ContainerChara,CardParagrahp,CardDesingBord,CardContent,CardTitle,CardDescription} from './LocalesElements'

const Locations = () => {
    const [locales, setLocalest] = useState(null) 
    const [info, setInfo] = useState({});
    const [search, setSearch] = useState("");
    const url = `https://rickandmortyapi.com/api/location?name=${search}`;
    const data = async (url) =>{
        const petition = await axios.get(url)
        setLocalest(petition.data.results)
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
    }, [url]);
  return (
    <>
    <Navigation />
    <CharacterTitle>Locations of Rick and Morty</CharacterTitle>
    <Search setSearch={setSearch}/>
        <ContainerChara>
            { locales != null ? (
                locales.map(local =>(
                    <div key={local.id}>
                        <CardContent>
                            <CardDesingBord>
                                <CardTitle>
                                        {local.name}
                                </CardTitle>
                                <CardDescription>
                                        <CardParagrahp>
                                            Tipo: {local.type}
                                        </CardParagrahp>
                                        <CardParagrahp>
                                            Dimensión: {local.dimension}
                                        </CardParagrahp>
                                        <CardParagrahp>
                                            
                                            Creación: {local.created}
                                        </CardParagrahp>
                                </CardDescription>
                            </CardDesingBord>
                        </CardContent>
                    </div>
                ))
            ) : ('Cargando Datos')}
        </ContainerChara>
        <Pagination prev={info.prev} next={info.next} onprev={onprev} onnext={onnext}/>
    </>
  )
}

export default Locations