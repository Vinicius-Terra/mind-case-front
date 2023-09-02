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

export const SingIn = styled.div`
  width: 40%;
  font-family: 'Inter', sans-serif;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    border: none;
    font-size: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    background: #FFFFFF;
    color: #007bff;
  }
  cursor:pointer;
`;


export const SignBox = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signin-form {
    font-family: 'Inter', sans-serif;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
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

