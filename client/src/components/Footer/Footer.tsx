import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Footer() {
  const socialIconsUrl = 'https://medieinstitutet.se/';

  return (
    <div style={{ backgroundColor: '#EDD6D3', padding: '20px 0', width:'100vw' }}>
      <Grid container spacing={2}>
        {/* Nyhetsbrev */}
        <Grid item xs={12}>
          <div style={{ marginBottom: '10px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5em' }}>JOIN OUR NEWSLETTER</h3>
            <p style={{ fontSize: '1em' }}>ENJOY 15% OFF</p>
          </div>
          <div style={{width: '90%', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',margin: 'auto', marginBottom: '10px' }}>
            <TextField label="Your Email" variant="outlined" size="small" style={{width: '250px'}} />
            <Button variant="contained" color="primary" style={{width: '100px', backgroundColor: 'black' }}>Subscribe</Button>
          </div>
          <div style={{ textAlign: 'center', fontSize: '20%', padding:'20px' }}>
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
        <Grid item xs={12}  md={3}>
          <ul className="" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <li>Returns and Exchanges</li>
            <li>The Story</li>
            <li>Career</li>
          </ul>
        </Grid>

        {/* Kolumn 2 */}
        <Grid item xs={12}  md={3}>
          <ul className="" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <li>Payment Terms</li>
            <li>Privacy Policy</li>
            <li>Payment Terms</li>
          </ul>
        </Grid>

        {/* Kolumn 3 */}
        <Grid item xs={12}  md={3}>
          <ul className="" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <li>Retailers</li>
            <li>Contact</li>
            <li>Care Instructions</li>
          </ul>
        </Grid>

        {/* Sociala ikoner */}
        <Grid item xs={12} md={3}>
        <ul className="social-icons" style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
