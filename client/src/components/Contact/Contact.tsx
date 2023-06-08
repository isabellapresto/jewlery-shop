import { FormEvent } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./Contact.css";
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#ef9a9a',
  '&:hover': {
    backgroundColor: '#e57373',
  },
}) as typeof Button;


export default function Contact() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Container className="contact-container">
      <Typography variant="h6" component="h2" gutterBottom>
        Contact Us
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
        <CustomButton type="submit" variant="contained" className="CustomButton">
          Submit
        </CustomButton>
      </form>
    </Container>
  );
}
