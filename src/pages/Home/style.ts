import styled from "styled-components";
const logo = require("../../assets/imgs/movies.jpg");

export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    padding: 0 15px;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100vh;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
    width: 100%;
    filter: blur(10px);
    z-index: -999;
`;

export const ContainerWrap = styled.div`
    background: #eee;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: Black;
    margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
    font-size: 1em;
    font-weight: normal;
    text-align: center;
    color: Black;
    margin-bottom: 30px;
`;


export const ButtonsDiv = styled.div`
    display: flex;
    gap: 25px;
`;

export const OptionButton = styled.button`
    background-color: #eee;
    border: 1px solid #000;
    color: #000;
    padding: 10px 50px;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
