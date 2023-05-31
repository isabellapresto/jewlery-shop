import { FormEvent } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" className="customButton">
          Submit
        </Button>
      </form>
    </Container>
  );
}
