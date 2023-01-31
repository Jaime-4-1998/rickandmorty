import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from '../Pagination/'
import Search from '../Search/'
import Navigation from '../Nav/Navigation'
import { BiBadgeCheck,BiMaleSign,BiFemaleSign } from 'react-icons/bi'
import { SlClose,SlQuestion } from 'react-icons/sl'
import { BsPersonCircle } from 'react-icons/bs'
import { RiAliensFill,RiUserLocationFill } from 'react-icons/ri'
import {CharacterTitle,ContainerChara,ParrStatusAlive,ParrStatusDead,ParrStatusUnk,ParrSpeciesHm,ParrSpeciesUnk,ParrSpeciesAl,ParrGender,ParrGenderFm,Button} from './CharacterElements'
import {CardDesing,CardContent,CardImg,CardTitle,CardDescription,Img,CardAtributtes,CardStatus,CardType} from './CharacterElements'

const Character = () => {
    const [personajes, setPersonajes] = useState(null) 
    const [info, setInfo] = useState({});
    const [search, setSearch] = useState("");
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
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
    }, [url]);
  return (
    <>
    <Navigation />
    <CharacterTitle>Characters of Rick and Morty</CharacterTitle>
    <Search setSearch={setSearch}/>
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
                                            < RiUserLocationFill />  {personaje.location.name}  < RiUserLocationFill />
                                        </CardDescription>
                                        <CardAtributtes>
                                            <CardStatus>
                                            {
                                            /*in this conditional show the the specie of the character*/
                                                (() => {
                                                    if (personaje.species === "Human") {
                                                        return (
                                                            <ParrSpeciesHm>
                                                              <BsPersonCircle/> Es un Humano 
                                                            </ParrSpeciesHm>
                                                    );} else if (personaje.species === "Alien") {
                                                        return (
                                                            <ParrSpeciesAl>
                                                                <RiAliensFill/> Es un Alien
                                                            </ParrSpeciesAl>
                                                    );} else {
                                                        return (
                                                            <ParrSpeciesUnk>
                                                             < SlQuestion /> Especie desconocida
                                                            </ParrSpeciesUnk>
                                                    );}
                                                })()
                                            }
                                            </CardStatus>
                                            <CardType>
                                                {
                                                /*in this conditional show the the specie of the character*/
                                                    (() => {
                                                        if (personaje.gender === "Male") {
                                                            return (
                                                                <ParrGender>
                                                                   <BiMaleSign/> Es un Hombre
                                                                </ParrGender>
                                                        );} else if (personaje.gender === "Female") {
                                                            return (
                                                                <ParrGenderFm>
                                                                    <BiFemaleSign/> Es una Mujer
                                                                </ParrGenderFm>
                                                        );} else {
                                                            return (
                                                                <ParrSpeciesUnk>
                                                                < SlQuestion /> Especie desconocida
                                                                </ParrSpeciesUnk>
                                                        );}
                                                    })()
                                                }
                                            </CardType>
                                        </CardAtributtes>
                                        {
                                            /*in this conditional show the status of the character*/
                                            (() => {
                                                if (personaje.status === "Dead") {
                                                    return (
                                                        <ParrStatusDead>
                                                        Personaje Muerto < SlClose/>
                                                        </ParrStatusDead>
                                                );} else if (personaje.status === "Alive") {
                                                    return (
                                                        <ParrStatusAlive>
                                                        Personaje Viviendo < BiBadgeCheck/>
                                                        </ParrStatusAlive>
                                                );} else {
                                                    return (
                                                        <ParrStatusUnk>
                                                        No se sabe si esta Vivo o Muerto < SlQuestion />
                                                        </ParrStatusUnk>
                                                );}
                                            })()
                                        }
                                    <Button href={`/personaje/${personaje.id}`}>About {personaje.name}</Button>
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