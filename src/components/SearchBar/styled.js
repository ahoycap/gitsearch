import styled from "styled-components";

export const BarWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 750px;
`;

export const InputSearch = styled.input`
  width: 67.4%;
  height: 50px;
  font-size: 1.4rem;
  color: #5c5c5c;
  font-family: "Raleway", sans-serif;
  border: 1px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  outline: none;

  @media only screen and (max-width: 499px) {
    font-size: 1rem;
  }
`;

export const ButtonSearch = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ac53f2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border: 1px;
  cursor: pointer;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  outline: none;
  &:hover {
    background-color: #9b4ad9;
    transition: all 0.2s ease-in-out;
  }
`;
