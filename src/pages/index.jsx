import React from 'react'
import Homme from '../components/Homme/'
import {Begin} from '../components/Homme/Data'
import Cards from '../components/Cards/'
import {Cardsbegin} from '../components/Cards/Data'
import Docu from '../components/Docu/'
import Footer from '../components/Footer/'
import {fott} from '../components/Footer/Data'
import Navigation from '../components/Nav/Navigation'
const Home = () => {
  return (
    <>
      <Navigation />
      <Homme {...Begin} />
      <Cards {...Cardsbegin}/>
      <Docu />
      <Footer {...fott}/>
    </>
  )
}

export default Home