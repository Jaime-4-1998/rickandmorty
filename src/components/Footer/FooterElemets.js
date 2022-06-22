import styled from "styled-components";
export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    border-top:2px solid #000;
    padding:2rem;
`;
export const FooterDiv = styled.div`
    text-align:center;
    @media screen and (max-width:900px){
        text-align:left;
    }
`;
export const FooterImg = styled.img`
    width:50% !important;
    height:100% !important;
    object-fit:cover;
    border-radius:5px;
    @media screen and (max-width:900px){
        width:70% !important;
        margin-bottom:2rem;
    }
`;
export const FooterTitle = styled.h4`
    color:#fff;
    margin-bottom:2rem;
    @media screen and (max-width:900px){
        margin-top:2rem;
    }
`;
export const Icon = styled.i`
    font-size:1.2rem;
`;
export const FooterRef = styled.a`
    text-decoration:none;
    display:flex;
    justify-content:center;
    color:#fff;
    margin-bottom:2rem;
    :hover{
        text-decoration:underline;
    }
    @media screen and (max-width:900px){
        justify-content:initial;
    }
`;