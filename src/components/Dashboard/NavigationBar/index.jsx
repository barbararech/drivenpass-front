import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";

import {
  FaRegPlusSquare,
  FaSignInAlt,
  FaRegFileAlt,
  FaWallet,
  FaWifi,
  FaSignOutAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";

import { NavigationButton, LogoutButton } from "./NavigationButton";

import UserContext from "../../../contexts/UserContext";

export default function NavigationBar() {
  const location = useLocation();
  const { logOut } = useContext(UserContext);

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <IconContext.Provider value={{ color: "#5e25da" }}>
      <Container>
        <Link to="/dashboard/new">
          <NavigationButton active={isActive("/dashboard/new")}>
            <FaRegPlusSquare />
            <span>Novo registro</span>
          </NavigationButton>
        </Link>

        <Link to="/dashboard/credentials">
          <NavigationButton active={isActive("/dashboard/credentials")}>
            <FaSignInAlt />
            <span>Credenciais</span>
          </NavigationButton>
        </Link>

        <Link to="/dashboard/safenotes">
          <NavigationButton active={isActive("/dashboard/safenotes")}>
            <FaRegFileAlt />
            <span>Notas seguras</span>
          </NavigationButton>
        </Link>

        <Link to="/dashboard/cards">
          <NavigationButton active={isActive("/dashboard/cards")}>
            <FaWallet />
            <span>Cartões</span>
          </NavigationButton>
        </Link>

        <Link to="/dashboard/networks">
          <NavigationButton active={isActive("/dashboard/networks")}>
            <FaWifi />
            <span>Senhas de Wi-Fi</span>
          </NavigationButton>
        </Link>

        <SignOut>
          <Link to="/">
            <LogoutButton active={isActive("/")} action={logOut}>
              <FaSignOutAlt />
              <span>Log Out</span>
            </LogoutButton>
          </Link>
        </SignOut>
      </Container>
    </IconContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  span {
    width: 80px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;

const SignOut = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-end;
  height: 27%;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    height: 0;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
