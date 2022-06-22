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
                    <PrevButton onClick={handleNextPage}>Previous</PrevButton>
                ) : null
            }
            {
                next ? (
                    
                    <NextButton onClick={handlePreviousPage}>Next</NextButton>
                ) : null
            }
        </ConatinerButton>
    </>
  )
}

export default Pagination