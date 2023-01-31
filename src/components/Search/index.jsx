import React from 'react'
import './desing.css'
const index = ({ setSearch }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };
  const reex = (e,regex) => {
    var theEvent = e || window.event;
    var key = e.key;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
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
            placeholder="Buscar Información"
            type="text"
            onKeyDown={(e) => reex(e,/([a-zA-Z])/)}
          />
        <button onClick={searchBtn} className='btn__api'>Buscar</button>
        </form>
      </div>
    </section>
  )
}

export default index