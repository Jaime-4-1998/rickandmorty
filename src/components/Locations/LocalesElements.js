import styled from "styled-components";
export const CharacterTitle = styled.h1`
    color:#fff;
    text-align:center;
    margin-top:2rem;
`;
export const ContainerChara = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding:4rem;
    @media screen and (max-width:1400px){
        grid-template-columns:1fr 1fr 1fr;
        padding:1rem;
    }
    @media screen and (max-width:900px){
        grid-template-columns:1fr;
        padding:1rem;
    }
`;
export const CardContent = styled.div`
    padding:1rem;
    display:flex;
    flex-direction: column;
`;
export const CardDesingBord = styled.div`
    border:2px solid #000;
    padding:2rem;
    border-radius:10px;
    box-shadow:-1px 1px 3px 3px #000;
`;
export const CardTitle = styled.h2`
    font-size:1.5rem;
    text-align:center;
    color:#fff;
    margin-bottom:2rem;
`;
export const CardDescription = styled.div`
   display:flex;
   flex-direction:column;
`;
export const CardParagrahp = styled.p`
    color:#fff;
    margin-bottom:1rem;
`;
export const ParrStatusUnk = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#3e3b3d;
    padding:0.5rem;
    border-radius:10px;
    text-align:center;
`;