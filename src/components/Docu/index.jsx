import React from 'react'
import {ConatinerDocu,DocuFirst,DocuSecond,DocuTitle,DocuRef} from './DocuElemets'
function Docu() {
  return (
    <>
     <ConatinerDocu>
        <DocuFirst>
            <DocuTitle>
                If you read the complete documetation of Rick and Morty API, you can understand how it´s works
            </DocuTitle>
        </DocuFirst>
        <DocuSecond>
            <DocuRef href="https://rickandmortyapi.com/documentation">
               Read More
            </DocuRef>
        </DocuSecond>
     </ConatinerDocu>
    </>
  )
}

export default Docu