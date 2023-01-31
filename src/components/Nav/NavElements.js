import styled from "styled-components";

export const Container = styled.header`
    background:#000;
`;

export const NavAtributtes = styled.div`
    display:flex;
    flex-direction:row;
    gap:3rem;
    justify-content: center;
    @media screen and (max-width:900px){
        flex-direction:column;
        gap:0.5rem;
    }
`;
export const NavParr = styled.a`
    color:#fff;
    padding:2rem;
    text-decoration:none;
    @media screen and (max-width:900px){
        padding:1.5rem;
        text-align:center;
    }
`;