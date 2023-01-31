import React from 'react'
import {ConatinerButton,PrevButton,NextButton} from './PaginationElements'
const Pagination = ({prev,next,onprev,onnext}) => {

    const handleNextPage = () => {
        onprev();
    };
    
    const handlePreviousPage = () => {
        onnext();
    };

  return (
    <>
        <ConatinerButton>
            {
                prev ?(
                    <PrevButton onClick={handleNextPage}>Pagina Anterior</PrevButton>
                ) : null
            }
            {
                next ? (
                    
                    <NextButton onClick={handlePreviousPage}>Pagina Siguiente</NextButton>
                ) : null
            }
        </ConatinerButton>
    </>
  )
}

export default Pagination