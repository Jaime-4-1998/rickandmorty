import styled from "styled-components";
import { Link } from 'react-router-dom';
export const ContainerBegin = styled.section`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:4rem;
    grid-gap:5rem;
    @media screen and (max-width:900px){
        grid-template-columns:1fr;
        padding:1rem;
        grid-gap:3rem;
    }
`;
export const ContainerFirst = styled.div`
    width:100%;
`;
export const ContainerSecond = styled.div`
    width:100%;
`;
export const TitleContainer = styled.h1`
    font-size:3rem;
    margin-bottom:2rem;
    color:#fff;
    @media screen and (max-width:900px){
        font-size:2rem;
        text-align:center;
    }
`;
export const ParrContainer = styled.p`
    font-size:1.5rem;
    color:#fff;
    margin-bottom:2rem;
    line-height:1.3;
    @media screen and (max-width:900px){
        font-size:1.2rem;
        text-align:left;
    }
`;
export const Button = styled(Link)`
    text-decoration:none;
    background: rgb(9,9,121);
    background: radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 75%); 
    padding:14px 48px;
    color: #fff;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    border-radius:10px;
    width:30%;
    font-weight:900;
    text-align:center;
    @media screen and (max-width:900px){
        display:flex;
        width:100%;
        justify-content:center;
        margin-bottom:2rem;
    }
`;
export const Img = styled.img`
    width:100% !important;
    height:100% !important;
    object-fit:cover;
    border-radius:10px;
`;
export const LinkBtn = styled.a`
    text-decoration:none;
    background: #000;
    padding:14px 48px;
    color: #fff;
    outline:none;
    border:none;
    cursor:pointer;
    align-items:center;
    transition:all 0.2s ease-in-out;
    border-radius:10px;
    width:30%;
    font-weight:900;
    margin-left:1rem;
    font-style:italic;
    @media screen and (max-width:900px){
        display:flex;
        width:100%;
        margin-left:0rem;
        justify-content:center;
    }
`;