import styled from "styled-components";
export const ConatinerDocu = styled.section`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:4rem;
    grid-gap:2rem;
    margin-top:2rem;
    @media screen and (max-width:900px){
        grid-template-columns:1fr;
        padding:1rem;
    }
`;
export const DocuFirst = styled.div`
    width:100%;
`;
export const DocuSecond = styled.div`
    width:100%;
    padding:2rem;
    @media screen and (max-width:900px){
        padding:1rem;
    }
`;
export const DocuTitle = styled.h3`
    color:#fff;
    font-size:1.8rem;
    text-align:center;
    @media screen and (max-width:900px){
        font-size:1.5rem;
    }
`;
export const DocuRef = styled.a`
    color:#fff;
    text-decoration:none;
    padding:1rem;
    background: rgb(9,9,121);
    background: radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 75%); 
    border-radius:5px;
    margin:auto;
    display:block;
    width:60%;
    text-align:center;
    @media screen and (max-width:900px){
        width:100%;
    }
`;