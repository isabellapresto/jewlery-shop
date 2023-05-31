import Logo from "../Logo/Logo";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import LoginBtn from "../LoginBtn/LoginBtn";
import { Container, Typography } from "@mui/material";

// import Login from "../Login/Login";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  return (
    <header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "red",
          width: "100%",
          height: "50px",
          paddingRight: "0",
          paddingLeft: "0",
        }}
      >
        <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
          1 YEAR WARRANTY
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",

            paddingRight: "0px",
            gap: "20px",
          }}
        >
          <ShoppingCartIcon />
          <LoginBtn />
        </Container>
      </Container>

      <Container>
        <Logo />
      </Container>
      <Container>
        <NavLinks />
      </Container>
    </header>
  );
}
