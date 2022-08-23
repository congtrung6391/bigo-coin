import { Container } from "@mui/material";
import Header from "./components/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
  </>
);

export default Layout;
