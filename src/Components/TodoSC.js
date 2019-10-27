import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
  font-size: 1.2em;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    box-sizing: border-box;
    font-size: 0.9em;
    padding: 0;
    padding-top: 50px;
    width: 340px;
  }
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
  width: 430px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 340px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: solid 1px black;
  font-size: 1.05em;
  :focus-within {
    ::placeholder {
      color: transparent;
    }
  }
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
  margin: 0.5em;
  padding: 0.1em 0.5em;
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
  padding: 0.1em 0.4em;
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
  padding: 0.15em 0.4em;
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
  /* font-family: "Indie Flower", cursive; */
  font-size: 1.5em;
  border-bottom: 1px solid gray;
  border-bottom-style: dashed;
  border-bottom-color: palevioletred;
  padding: 0;
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;
