import React, { useState } from "react";
import { Ambient, Top, Line, SignBox, SingUp } from "./style";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { postLogin } from "../../../services/api";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Renamed the variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    console.log("Email:", email, "Password:", password);
    
    try {
      // Attempt login
      const response = await postLogin(email, password);
      console.log(response);
      
      if (response.status === 200) {
        localStorage.setItem("UserInfo", JSON.stringify({
          token: response.data.token,
          name: response.data.name,
          email: response.data.email,
          id: response.data.id
        }));
        navigate("/");
      }
      
      setIsLoading(false); // Stop loading
    } catch (error) {
      setIsLoading(false); // Stop loading in case of error
      console.log(error);
    }
  };

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
            <h2>Login</h2>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading} // Disable input while loading
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading} // Disable input while loading
              />
            </div>
            <button type="submit" disabled={isLoading}>Entrar</button>
            {isLoading && (
              <ThreeCircles color="#00BFFF" height={80} width={80} />
            )}
          </form>
        </div>
        <SingUp onClick={() => navigate("/signup")}>
          <p>Ainda não possui cadastro? cadastre-se</p>
        </SingUp>
      </SignBox>
    </Ambient>
  );
}

export default SignIn;