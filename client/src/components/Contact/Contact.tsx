import { FormEvent } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./Contact.css";


export default function Contact() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Container sx={{width:['95%', '75%', '60%'], textAlign:'center', height: 550, boxShadow: 3, borderRadius: 2, px: 4, py: 6, marginTop:'50px', marginBottom:'50px' }} >
       <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
          Contact
        </Typography>
      <form onSubmit={handleSubmit} className="contact-form">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="email"
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />

        <Button type="submit" variant="outlined" className="CustomButton" style={{marginTop:'10px'}}>
          Submit
        </Button>
        
      </form>
    </Container>
  );
}
