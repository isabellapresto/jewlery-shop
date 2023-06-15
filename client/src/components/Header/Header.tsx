import Logo from "../Logo/Logo";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import LoginBtn from "../LoginBtn/LoginBtn";
import { Container } from "@mui/material";
import NavLinks from "../NavLinks/NavLinks";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerAreaOne">

        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "0px",
            gap: "20px",
          }}
        >
          <LoginBtn />
          <ShoppingCartIcon/>
     
        </Container>
      </div>

      <div className="headerAreaTwo">
        <Container>
        <Logo />
      <NavLinks />
  </Container>
</div>
</header>
  );
}
