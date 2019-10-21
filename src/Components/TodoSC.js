import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  margin: 0 auto;
  text-align: center;
`;

export const InnerDiv = styled.div`
  font-family: cursive;
`;
export const TodosLeft = styled.div`
  padding-top: 4rem;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: #e28da9;
    border: 2px solid #e28da9;
  }
`;
export const ButtonAdd = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: floralwhite;
    border: 2px solid palevioletred;
  }
`;
export const ButtonAlert = styled.button`
  background: #dc000b;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid #dc000b;
  border-radius: 3px;
  :hover {
    background: #ac000b;
    border: 2px solid #ac000b;
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const ButtonX = styled.button`
  background-color: transparent;
  color: red;
  font-size: 1rem;
  margin-left: 1.1rem;
  border: none;
  display: inline-block;
`;

export const Todo = styled.div`
  word-wrap: anywhere;
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  border-bottom: 1px solid gray;
  border-bottom-style: dashed;
  border-bottom-color: palevioletred;
  padding: 0;
`;
