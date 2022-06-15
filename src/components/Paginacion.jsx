import React from 'react'

const Paginacion = ({prev,next,onprev,onnext}) => {

    const handleNextPage = () => {
        onprev();
    };
    
    const handlePreviousPage = () => {
        onnext();
    };

  return (
    <div>
        {
            prev ?(
                <button onClick={handleNextPage}>Previous</button>
            ) : null
        }
        {
            next ? (
                
                <button onClick={handlePreviousPage}>Next</button>
            ) : null
        }
    </div>
  )
}

export default Paginacion