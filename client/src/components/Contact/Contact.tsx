import { FormEvent } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./Contact.css";


export default function Contact() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Container className="contact-container">
       <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500} style={{padding:'50px'}}>
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
        <Button type="submit" variant="outlined" className="CustomButton">
          Submit
        </Button>
      </form>
    </Container>
  );
}
