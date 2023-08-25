import styled from "styled-components";

export const Box = styled.div`
  width: 70%;
  border-radius: 41px;
  background:  #171a3d;
  padding: 10px 20px;
  margin-bottom: 30px;
  cursor:pointer;
  position: relative;

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
  input{
    all: unset;
    padding: 0 10px;
    width: 80%;
    background: #FFFFFF;
    border-radius: 19px;
    font-family: 'Inter';
    font-style: normal;
    color: #171a3d;
    font-weight: 600;
    font-size: 24px;
  }

  .image-box{
    width: 100%;
    height: 80px;
  }
  .image-box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .name-category{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category-box{
    width: 200px;
    height: 30px;
    margin-top: 10px;
    background: grey;
    border-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete-icon-container {
  position: absolute;
  top: -4px;
  right: -15px; 
  background-color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}

.pencil-icon-container {
  position: absolute;
  top: 60px;
  right: 0px; 
  background-color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}


.pencil-icon {
  color: blue;
}

.delete-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: white;
  width: 300px;
  height: 200px;
  border-radius: 8px;
  z-index: 1000; /* Increase z-index to ensure it's above other content */
  color: white;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: white;
}

`;