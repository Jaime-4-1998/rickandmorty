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
    display:flex;
    flex-direction:column;
`;
export const CardStatus = styled.div`
    width:100%;
`;
export const CardType = styled.div`
    width:100%;
`;
export const ParrStatusAlive = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#57c15a;
    padding:0.5rem;
    border-radius:10px;
    text-align:center;
`;
export const ParrStatusDead = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#ab0d2f;
    padding:0.5rem;
    border-radius:10px;
    text-align:center;
`;
export const ParrStatusUnk = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#3e3b3d;
    padding:0.5rem;
    border-radius:10px;
    text-align:center;
`;
export const ParrSpeciesUnk = styled.p`
    color:#000;
    margin-bottom:0.5rem;
    background:#b7b3a8;
    padding:0.5rem;
    border-radius:10px;
`;
export const ParrSpeciesHm = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#5e5e5e;
    padding:0.5rem;
    border-radius:10px;
`;
export const ParrSpeciesAl = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background:#455b5e;
    padding:0.5rem;
    border-radius:10px;
`;
export const ParrGender = styled.p`
    color:#fff;
    margin-bottom:0.5rem;
    background: #3591d8;
    padding:0.5rem;
    border-radius:10px;
`;
export const ParrGenderFm = styled.p`
    color:#000;
    margin-bottom:0.5rem;
    background:#ff97d9;
    padding:0.5rem;
    border-radius:10px;
`;
export const Button = styled.a`
    color:#fff;
    text-decoration:none;
    background: transparent;
    border:1px solid #f3f3f3;
    padding:1rem;
    text-align:center;
    border-radius:5px;
`;