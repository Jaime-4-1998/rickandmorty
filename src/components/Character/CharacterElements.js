import styled from "styled-components";
export const CharacterTitle = styled.h1`
    color:#fff;
    text-align:center;
    margin-top:2rem;
`;
export const ContainerChara = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:4rem;
    @media screen and (max-width:900px){
        grid-template-columns:1fr;
        padding:1rem;
    }
`;
export const CardDesing = styled.a`
    border-radius:5px;
    text-decoration:none;
`;
export const CardContent = styled.div`
    padding:1rem;
    display:flex;
    flex-direction: column;
`;
export const CardImg = styled.div`
    max-width:100%;
    margin-bottom:1rem;
`;
export const Img = styled.img`
    width:100% !important;
    height:100% !important;
    object-fit:cover !important;
    border-radius:5px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.68);
`;
export const CardTitle = styled.h2`
    font-size:1.5rem;
    text-align:center;
    color:#fff;
    margin-bottom:1rem;
`;
export const CardDescription = styled.p`
    font-size:1rem;
    text-align:center;
    color:#fff;
    margin-bottom:1rem;
    font-style:italic;
`;

export const CardAtributtes = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items: center;
    text-align: center;
    margin-bottom:1rem;
`;
export const CardStatus = styled.div`
    width:100%;
`;
export const CardType = styled.div`
    width:100%;
`;
export const ParrStatus = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
`;
export const ParrSpecies = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
`;
export const ParrGender = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
`;
export const Button = styled.a`
    color:#fff;
    text-decoration:none;
    background: rgb(9,9,121);
    background: radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 75%); 
    padding:1rem;
    text-align:center;
    border-radius:5px;
`;