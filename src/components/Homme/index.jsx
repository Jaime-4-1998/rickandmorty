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
          EL fin de hacer esta pequeña Landing Page es para poder saber que Data contiene la API de Rick and Morty
        </ParrContainer>
        <ParrContainer>
          Para mostrar toda la información de está misma, utilize axios haciendo uso de funciones
          async/await.
        </ParrContainer>
        <ParrContainer>
          El diseño del consumo de está API esta realizada con styled-components, utilize está herramienta
          para poder llevar un mejor control de todo mi CSS, ademas de que me ayuda a poder definir clases CSS
          por default y no como lo hace SASS o Taiwind CSS
        </ParrContainer>
        <ParrContainer>
          Al dar clic en "Ver Personajes" podras visualizar una lista completa de los personajes, con su respectiva
          barra de busqueda y paginación para no sobrecargar de data la pagina.
        </ParrContainer>
       
        <Button to="/Character">Ver Personajes</Button>
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