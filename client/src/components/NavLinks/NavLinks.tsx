import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography, List, ListItem, ListItemText, Button, Drawer, IconButton, useMediaQuery, useTheme, Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavLinks.css";

export default function NavLinks() {
  const theme: Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => { 
    setDrawerOpen(!isDrawerOpen);
  };

  return (
  
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton >
   
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}> 
            <List>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                onClick={toggleDrawer}
              >
                <ListItem >
                  <ListItemText
                    primary={
                      <Typography className="text-menu" variant="body1">
                        HOME
                      </Typography>
                    }
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/shop"
                style={{ textDecoration: "none" }}
                onClick={toggleDrawer}
              >
                <ListItem >
                  <ListItemText
                    primary={
                      <Typography className="text-menu" variant="body1">
                        SHOP
                      </Typography>
                    }
                  />
                </ListItem>
              </NavLink>

              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                onClick={toggleDrawer}
              >
                <ListItem >
                  <ListItemText
                    primary={
                      <Typography className="text-menu" variant="body1">
                        ABOUT
                      </Typography>
                    }
                  />
                </ListItem>
              </NavLink>

              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                onClick={toggleDrawer}
              >
                <ListItem >

                  <ListItemText
                    primary={
                      <Typography className="text-menu" variant="body1">
                        CONTACT
                      </Typography>
                    }
                  />
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </>
      ) : (
        <List
          component="nav"
          aria-labelledby="nav-links"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "35px",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button
              className="active menu-hover-effect"
              component={ListItem}
              disableRipple
            >
              <ListItemText
                primary={
                  <Typography className="text-menu" variant="body1">
                    HOME
                  </Typography>
                }
              />
            </Button>
          </NavLink>
          <NavLink to="/shop" style={{ textDecoration: "none" }}>

            <Button
              className="menu-hover-effect"
              component={ListItem}
              disableRipple
            >
              <ListItemText
                primary={
                  <Typography className="text-menu" variant="body1">
                    SHOP
                  </Typography>
                }
              />
            </Button>
          </NavLink>

          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Button
              className="menu-hover-effect"
              component={ListItem}
              disableRipple
            >
              <ListItemText
                primary={
                  <Typography className="text-menu" variant="body1">
                    ABOUT
                  </Typography>
                }
              />
            </Button>
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <Button
              className="menu-hover-effect"
              component={ListItem}
              disableRipple
            >
              <ListItemText
                primary={
                  <Typography className="text-menu" variant="body1">
                    CONTACT
                  </Typography>
                }
              />
            </Button>
          </NavLink>
        </List>
      )}
    </>
  );
}
