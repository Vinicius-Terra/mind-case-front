import styled from "styled-components";

export const Ambient = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 150px;
`;

export const Top = styled.div`
  width: 90%;
  height: 100px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  button{
    background: inherit;
    border: none;
    font-size: 26px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    cursor:pointer;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 3px;
  margin-bottom: 50px;
  background: gray;
  border-radius: 3px;
  border: 3px solid gray;
`;

export const NavBox = styled.div`
  position: fixed;
  bottom: 30%;
  left: 5%;
`;