import React from 'react'
import {Container,NavAtributtes,NavParr} from './NavElements'
const Navigation = () => {
  return (
    <>
        <Container>
            <NavAtributtes>
                <NavParr href="/">
                    Inicio
                </NavParr>
                <NavParr href="/Character">
                    Personajes de la API
                </NavParr>
                <NavParr href="/Locations">
                    Localizaciones de la API
                </NavParr>
            </NavAtributtes>
        </Container>
    </>
  )
}

export default Navigation