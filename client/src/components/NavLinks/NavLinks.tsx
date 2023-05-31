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
      sx={{ display: "flex", justifyContent: "center", gap: "35px" }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Button component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography variant="body1">Home</Typography>}
          />
        </Button>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <Button component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography variant="body1">ABOUT</Typography>}
          />
        </Button>
      </NavLink>
      <NavLink to="/contact" style={{ textDecoration: "none" }}>
        <Button component={ListItem} disableRipple>
          <ListItemText
            primary={<Typography variant="body1">CONTACT</Typography>}
          />
        </Button>
      </NavLink>
    </List>
  );
}

export default NavLinks;
