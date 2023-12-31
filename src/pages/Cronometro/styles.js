import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;
`;

export const CronometroTitle = styled.div`
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #030712;
  background: black;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  background: black;
  background: black;
  border: 0;
`;

export const Nunber = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 40rem;
  line-height: 8rem;
  /* Aplica a cor vermelha quando a prop isVermelho for verdadeira */
  color: ${(props) => (props.isVermelho ? "red" : "#84cc16")};
`;
