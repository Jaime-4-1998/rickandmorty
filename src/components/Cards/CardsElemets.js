import styled from "styled-components";
import { Link } from 'react-router-dom';
export const ConatinerCardHead = styled.h2`
    text-align:center;
    color:#fff;
    font-size:2.5rem;
    font-weight:900;
    @media screen and (max-width:900px){
        margin-top:2rem;
    }
`;
export const ContainerCards = styled.section`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:4rem;
    grid-gap:2rem;
    @media screen and (max-width:900px){
        grid-template-columns:1fr;
        padding:1rem;
    }
`;
export const CardDesing = styled.div`
    border-radius:5px;
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
    font-size:2rem;
    text-align:center;
    color:#fff;
    margin-bottom:1rem;
`;
export const CardDescription = styled.p`
    font-size:1rem;
    text-align:center;
    color:#fff;
    margin-bottom:1rem;
`;
export const Button = styled(Link)`
    text-decoration:none;
    background: #000;
    white-space:nowrap;
    padding:1rem;
    color: #fff;
    outline:none;
    border:none;
    cursor:pointer;
    align-items:center;
    transition:all 0.2s ease-in-out;
    border-radius:10px;
    width:100%;
    font-weight:900;
    text-align:center;
    :hover{
        background: #fff;
        color:#000;
    }
`;