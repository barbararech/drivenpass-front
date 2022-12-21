// import { useState, useContext } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// import AuthLayout from '../../layouts/Auth';

// import Input from '../../components/Form/Input';
// import Button from '../../components/Form/Button';
// import Link from '../../components/Link';
// import { Row, Title, Label } from '../../components/Auth';

// import UserContext from '../../contexts/UserContext';

// import useSignIn from '../../hooks/api/useSignIn';

// import logo from '../../assets/images/padlock.png'
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import RenderCategory from '../../components/NewEntry/categoriesList'

export default function NewEntry() {
  return (
    <Container>
      <StyledTypography variant="h4">Novo registro</StyledTypography>
      <span>Selecione a categoria</span>
      <RenderCategory/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  span {
    width: 564px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
  font-size: 32px;
`;
