import styled from "styled-components";

export const Ambient = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 150px;
  font-family: 'Inter', sans-serif;

  

  .text-box{
    width: 90%;
    border-radius: 0 0 41px 41px;
    background:  #171a3d;
    padding: 10px 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 22px;
    color: #FFFFFF;
  }
  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 22px;
    color: #FFFFFF;
  }
  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
  }
  }
  

  .image-box{
    width: 90%;
    height: 300px;
  }
  .image-box img{
    width: 100%;
    height: 100%;
    border-radius: 41px 41px 0 0 ;
    object-fit: cover;
  }
  .name-category{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category-box{
    width: 250px;
    height: 30px;
    background: grey;
    border-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
    border: none;
    background-color: inherit;
    cursor: pointer;
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

export const Box = styled.div`
  width: 90%;
  
`;

export const NavBox = styled.div`
  position: fixed;
  bottom: 30%;
  left: 5%;
`;

