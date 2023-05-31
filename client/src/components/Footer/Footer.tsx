import React from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const socialIconsUrl = 'https://medieinstitutet.se/';

  return (
    <div style={{ backgroundColor: '#EDD6D3', padding: '20px 0' }}>
      <Grid container spacing={2}>
        {/* Nyhetsbrev */}
        <Grid item xs={12}>
          <div style={{ marginBottom: '10px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5em' }}>JOIN OUR NEWSLETTER</h3>
            <p style={{ fontSize: '1em' }}>ENJOY 15% OFF</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
            <TextField label="Your Email" variant="outlined" style={{ marginRight: '10px', width: '200px' }} />
            <Button variant="contained" color="primary" style={{ backgroundColor: 'black' }}>Subscribe</Button>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.8em' }}>
            <FormControlLabel
              control={<Checkbox style={{ color: 'black' }} />}
              label="By subscribing to our newsletter, you accept our Privacy Policy."
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <hr style={{ borderTop: '1px solid white', width: '80%', margin: '0 auto' }} />
        </Grid>

        {/* Kolumn 1 */}
        <Grid item xs={3}>
          <ul className="" style={{ listStyle: 'none' }}>
            <li>Skötselråd</li>
            <li>Återförsäljare</li>
            <li>Kontakt</li>
          </ul>
        </Grid>

        {/* Kolumn 2 */}
        <Grid item xs={3}>
          <ul className="" style={{ listStyle: 'none' }}>
            <li>Betalningsvillkor</li>
            <li>Leveransvillkor</li>
            <li>Byten och returer</li>
          </ul>
        </Grid>

        {/* Kolumn 3 */}
        <Grid item xs={3}>
          <ul className="" style={{ listStyle: 'none' }}>
            <li>Om Jewelry Shop</li>
            <li>Karriär</li>
            <li>Press</li>
          </ul>
        </Grid>

        {/* Sociala ikoner */}
        <Grid item xs={3}>
          <ul className="social-icons" style={{ listStyle: 'none', display: 'flex' }}>
            <li style={{ marginRight: '10px' }}>
              <a href={socialIconsUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
                <InstagramIcon />
              </a>
            </li>
            <li style={{ marginRight: '10px' }}>
              <a href={socialIconsUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
                <FacebookOutlinedIcon />
              </a>
            </li>
            <li style={{ marginRight: '10px' }}>
              <a href={socialIconsUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href={socialIconsUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
