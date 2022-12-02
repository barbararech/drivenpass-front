import MuiButton from "@mui/material/Button";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Button({ variant = "contained", children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledMuiButton variant={variant} {...props}>
        {children}
      </StyledMuiButton>
    </ThemeProvider>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 10px !important;
`;

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#7343dd",
      pastel: "#967bb6",
    },
  },
});
