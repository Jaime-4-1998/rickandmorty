import React from 'react'

const index = ({ setSearch }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form>
    <input
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder="Buscar Personajes"
      type="text"
    />
    <button
      onClick={searchBtn}
    >
      Search
    </button>
  </form>
  )
}

export default index