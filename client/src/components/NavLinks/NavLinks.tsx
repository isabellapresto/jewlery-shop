import { NavLink } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

import "./NavLinks.css";

function NavLinks() {

  return (
    <List
      component="nav"
      aria-labelledby="nav-links"
      sx={{ display: "flex", justifyContent: "center", gap: "35px"}}
    >
      <NavLink to="/" style={{textDecoration: "none" }}>
        <Button className="active menu-hover-effect" component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography className="text-menu" variant="body1">HOME</Typography>}
          />
        </Button>
      </NavLink>
      <NavLink to="/shop" style={{ textDecoration: "none" }}>
        <Button className="menu-hover-effect" component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography className="text-menu" variant="body1">SHOP</Typography>}
          />
        </Button>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <Button className="menu-hover-effect" component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography className="text-menu" variant="body1">ABOUT</Typography>}
          />
        </Button>
      </NavLink>
      <NavLink to="/contact" style={{ textDecoration: "none" }}>
        <Button className="menu-hover-effect" component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography className="text-menu" variant="body1">CONTACT</Typography>}
          />
        </Button>
      </NavLink>
    </List>
  );
}

export default NavLinks;
