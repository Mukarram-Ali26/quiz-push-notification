import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    background: linear-gradient(45deg, rgba(30,30,156,1) 35%, rgba(0,212,255,1) 100%);

    background-size: cover;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: white;
  }
  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    color: white;
    font-weight: 400;
    background-size: 100%;

    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: #ece50b;
    border: yellow;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
