import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_LOCAL } from "../../services";
import { login } from "../../services/auth";
import { Content } from "./styles";
import {
  Button,
  Container,
  Form,
  Header,
  Menu,
  Textfield,
} from "../../components";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const results = await axios.post(`${API_LOCAL}/user`, {
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
          <h1>Faça seu Cadastro</h1>
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
            <Button type="submit" value="Cadastrar"></Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Register;
