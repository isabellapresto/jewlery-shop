import JewelryShopLogo from "../../assets/JewelryShopLogo.png";
import { Container } from "@mui/material";
export default function PrintLogo() {
  return (
    <Container>
      <div>
        <img
          src={JewelryShopLogo}
          alt="JewelryShopLogo"
          style={{
            width: "70%",
            display: "block",
            margin: "auto",
            padding: "50px",
          }}
        />
      </div>
    </Container>
  );
}
