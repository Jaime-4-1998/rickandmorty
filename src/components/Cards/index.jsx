import React from 'react'
import { ContainerCards,ConatinerCardHead,CardDesing,CardContent,CardImg,Img,CardTitle,CardDescription,Button} from './CardsElemets'
const Cards = ({ImgGan,ImgSec}) => {
  return (
    <>
    <ConatinerCardHead>Datos de la API</ConatinerCardHead>
    <ContainerCards>
        <CardDesing>
           <CardContent>
                <CardImg>
                <Img loading="lazy" src={ImgGan} alt='Jaime Ivan Ramirez Osorio eljimmyramz' title='Jaime Ivan Ramirez Osorio eljimmyramz' width="100" height="100"/>
                </CardImg>
                <CardTitle>
                    Personajes
                </CardTitle>
                <CardDescription>
                    Clic para ver a los personajes de este universo.
                </CardDescription>
                <Button to="/Character">Ver Personajes</Button>
           </CardContent>
        </CardDesing>
        <CardDesing>
            <CardContent>
                <CardImg>
                <Img loading="lazy" src={ImgSec} alt='Jaime Ivan Ramirez Osorio eljimmyramz' title='Jaime Ivan Ramirez Osorio eljimmyramz' width="100" height="100"/>
                </CardImg>
                <CardTitle>
                  Localizaciones
                </CardTitle>
                <CardDescription>
                    Explora todas las localizaciones dando un clic en el siguiente Botón.
                </CardDescription>
                <Button to="/Locations">Ver Localizaciones</Button>
           </CardContent>
        </CardDesing>
    </ContainerCards>
    </>
  )
}

export default Cards