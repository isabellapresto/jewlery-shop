import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  'https://lilyandrose.se/wp-content/uploads/2023/04/statement-gift-guide-kategori-1000x417.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/04/kategori-everyday-pieces.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/05/kategoribanner-spring-clearance-1000x417.jpg',
]


export default function Banner() {
    return (
      <div className="container">
        <div className="slideshow">
          <img src={images[0]} alt="slides" className="slides" />
          <button className="prevBtn"><ArrowBackIosIcon /></button>
          <button className="nextBtn"><ArrowForwardIosIcon /></button>
        </div>
      </div>
    )
  }

