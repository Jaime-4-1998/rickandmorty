import React from 'react'
import Homme from '../components/Homme/'
import {Begin} from '../components/Homme/Data'
import Cards from '../components/Cards/'
import {Cardsbegin} from '../components/Cards/Data'
const Home = () => {
  return (
    <>
      <Homme {...Begin} />
      <Cards {...Cardsbegin}/>
    </>
  )
}

export default Home