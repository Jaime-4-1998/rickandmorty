import React from 'react'
import { ContainerBegin,ContainerFirst,ContainerSecond,TitleContainer,ParrContainer,Button,Img,LinkBtn } from './HommeElements'
const Homme = ({ImgGan}) => {
  return (
    <>
    <ContainerBegin>
      <ContainerFirst>
        <TitleContainer>
          Consumo de la API Rick and Morty
        </TitleContainer>
        <ParrContainer>
          Para hacer el consumo de esta api, utilize axios haciendo uso de 
          async y await. Por ultimo para el diseño final implemente styled-components.  
        </ParrContainer>
        <Button to="/InicioPer">Ver Personajes</Button>
        <LinkBtn href="https://eljimmyramz.com/" target="_blank">El Jimmy Ramz</LinkBtn>
      </ContainerFirst>
      <ContainerSecond>
        <Img loading="lazy" src={ImgGan} alt='Jaime Ivan Ramirez Osorio eljimmyramz' title='Jaime Ivan Ramirez Osorio eljimmyramz' width="100" height="100"/>
      </ContainerSecond>
    </ContainerBegin>
    </>
  )
}

export default Homme