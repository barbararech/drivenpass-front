import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

import useSignUp from "../../hooks/api/useSignUp";

import logo from "../../assets/images/padlock.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(email, password);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
      }
    }
  }

  return (
    <AuthLayout>
      <Row>
        <img src={logo} alt="Event Logo" width="110px" />
        <Title>drivenpass</Title>
      </Row>
      <Row>
        {/* <Label>Cadastre-se!</Label> */}
        <form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingSignUp}
          >
            Cadastrar
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/">Já está cadastrado? Faça login! </Link>
      </Row>
    </AuthLayout>
  );
}
