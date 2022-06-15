import styled from "styled-components";
import { Link } from 'react-router-dom';
export const ContainerBegin = styled.section`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:4rem;
    grid-gap:5rem;
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
`;
export const ParrContainer = styled.p`
    font-size:1.5rem;
`;
export const Button = styled(Link)`
    text-decoration:none;
    background: #E8175D;
    white-space:nowrap;
    padding:14px 48px;
    color: #010606;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;
    border-radius:10px;
    width:30%;
`;
export const Img = styled.img`
    width:100% !important;
    height:100% !important;
    object-fit:cover;
    border-radius:10px;
`;