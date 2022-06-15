import React from 'react'
import { ContainerBegin,ContainerFirst,ContainerSecond,TitleContainer,ParrContainer,Button,Img } from './HommeElements'
const Homme = ({ImgGan}) => {
  return (
    <>
    <ContainerBegin>
      <ContainerFirst>
        <TitleContainer>
          Consumo de la API Rick and Morty
        </TitleContainer>
        <ParrContainer>
          Para hacer el consumo de esta api, utilize axios mostrando la infomación
          con una función de flecha y por ultimo para el diseño implemente styled-components  
        </ParrContainer>
        <Button to="/InicioPer">Ver Personajes</Button>
      </ContainerFirst>
      <ContainerSecond>
        <Img loading="lazy" src={ImgGan} alt='Jaime Ivan Ramirez Osorio eljimmyramz' title='Jaime Ivan Ramirez Osorio eljimmyramz' width="100" height="100"/>
      </ContainerSecond>
    </ContainerBegin>
    </>
  )
}

export default Homme