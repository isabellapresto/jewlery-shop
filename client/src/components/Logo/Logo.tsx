import JewelryShopLogo from "../../assets/JewelryShopLogo.png";
import { Container } from "@mui/material";

export default function PrintLogo() {
  return (
    <Container sx={{ width: ["95%", "80%", "70%"] }}>
      <img
        src={JewelryShopLogo}
        alt="JewelryShopLogo"
        style={{
          width: "100%",
          paddingTop: "40px",
        }}
      />
    </Container>
  );
}

