import React, { useState } from "react";
import { Ambient, Top, Line, SignBox, SingIn } from "./style";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { postSignUp } from "../../../services/api";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Changed the state variable name
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
    const response = await postSignUp(email, password, confirmPassword); // Passing confirmPassword to API call
    console.log(response);
    if (response.status === 201) {
      setIsloading(false);
      alert("Cadastro realizado com sucesso");
      navigate("/");
    }else{
      setIsloading(false);
      console.log(isloading);
    }
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  if(isloading){
    return (
      <Ambient>
        <Top>
          <button onClick={() => navigate("/")}>
            <h2>Mind-Case</h2>
          </button>
          <button onClick={() => navigate("/login")}>
            <Avatar />
          </button>
        </Top>
        <Line />
        <SignBox>
          <div className="signin-container">
          <form className="signin-form">
              <h2>Cadastro</h2>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Senha:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Confirmar Senha:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={true}
                />
              </div>
              <ThreeCircles color="#00BFFF" height={80} width={80} />
            </form>
          </div>
        </SignBox>  
      </Ambient>
    );
  }
  else{
  return (
      <Ambient>
        <Top>
          <button onClick={() => navigate("/")}>
            <h2>Mind-Case</h2>
          </button>
          <button onClick={() => navigate("/login")}>
            <Avatar />
          </button>
        </Top>
        <Line />
        <SignBox>
          <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
              <h2>Cadastro</h2>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirmar Senha:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Fazer Cadastro</button>
            </form>
          </div>
          <SingIn onClick={() => navigate("/login")}>
            <p>Já tem uma conta? faça login</p>
          </SingIn>
        </SignBox>
      </Ambient>
    );
  }
}

export default SignUp;