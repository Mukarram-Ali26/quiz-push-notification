import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: rgb(255, 255, 252);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
  text-align: center;
  p {
    font-size: 1.2rem;
    font-style: bolder;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "blue"};
    border: blue;
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
