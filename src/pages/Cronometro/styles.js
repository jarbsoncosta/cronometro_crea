import { styled } from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:#030712;
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
background-color:#030712;
color:#030712
`;

export const Button = styled.button`
font-size: 16px;
padding: 10px 20px;
cursor: pointer;
background-color:#030712;
color:#030712;
border:0
`;

export const Nunber = styled.p`
font-family: 'Roboto Mono', monospace;
  font-size: 25rem;
  line-height: 8rem;
  color: #84cc16
`;