import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { API_LOCAL } from "../../services";
import { Content } from "./styles";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  Header,
  Menu,
  Textfield,
} from "../../components";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const results = await axios.post(`${API_LOCAL}/login`, {
        name,
        password,
      });
      login(results.data.token);
      navigate("/");
    } catch (e) {
      alert("Sorry, the error occurred: " + e?.response?.data?.message);
    }
  };

  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h4>Faça seu</h4>
          <h1>Login</h1>
          <p> Para aproveitar todas funcionalidades do portal</p>
        </Header>
        <Content>
          <Form handleSubmit={handleSubmit}>
            <Textfield
              type="text"
              label="Nome"
              name="name"
              value={name}
              handleChange={(event) => setName(event.target.value)}
            ></Textfield>
            <Textfield
              type="password"
              label="Senha"
              name="password"
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
            ></Textfield>
            <Button type="submit" value="Entrar"></Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Login;
