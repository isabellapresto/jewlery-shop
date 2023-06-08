import { Typography, Container } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import "./About.css";

function About() {
  return (
    <div className="root">
      <Container>
        <div className="imageContainer">
          <img
            src="https://lilyandrose.se/wp-content/uploads/2023/04/news.jpg"
            alt="Jewelry 1"
            className="image"
          />
        </div>
        <div className="about-content">
        <br />
        <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
          About Us
        </Typography>
        <br />
        <Typography variant="body1" className='body1' gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
          Welcome to our jewelry shop! We are passionate about creating
          exquisite and unique pieces that celebrate the beauty and elegance of
          jewelry.
        </Typography>
        <Typography variant="body1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
          Our team of skilled artisans and designers work tirelessly to bring
          you stunning collections that reflect the latest trends while
          maintaining a timeless appeal. Each piece is meticulously crafted with
          attention to detail and quality.
          Whether you're looking for a special gift for a loved one or want to
          treat yourself to something extraordinary, our wide range of jewelry
          options caters to all tastes and occasions. From delicate necklaces to
          sparkling earrings, statement rings to personalized bracelets, we have
          something for everyone.
        </Typography>
        <Typography variant="body1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
          At our jewelry shop, we believe in providing exceptional customer
          service and ensuring your shopping experience is delightful. Our
          knowledgeable staff is always ready to assist you in finding the
          perfect piece or answer any questions you may have.
          Thank you for choosing our jewelry shop. We look forward to helping
          you find the jewelry that adds a touch of elegance and beauty to your
          life. <br />
        </Typography>
        <Typography variant="body1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Ajsha, Elin, Isabella, Sandra and Viola / Designers and Creative Directors
        </Typography>
        <LoyaltyIcon fontSize="large" className="customLoyaltyIcon" />
        </div>
      </Container>
    </div>
  );
}

export default About;
