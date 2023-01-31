import React from 'react'
import './desing.css'
const index = ({ setSearch }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    //form to find the character
    <section>
      <div className="search__api__cont">
        <form>
          <input
            className='input__api__search'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Buscar Personajes"
            type="text"
          />
        <button onClick={searchBtn} className='btn__api'>Buscar</button>
        </form>
      </div>
    </section>
  )
}

export default index