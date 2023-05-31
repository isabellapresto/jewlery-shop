import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Banner/Banner.css'
import { useState } from 'react';

const images = [
  'https://lilyandrose.se/wp-content/uploads/2023/04/statement-gift-guide-kategori-1000x417.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/04/kategori-everyday-pieces.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/05/kategoribanner-spring-clearance-1000x417.jpg',
]

export default function Banner() {

  const [index, setIndex] = useState(0)

  function nextStep() {
    if(index === images.length -1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

    return (
      <div className="bannerContainer">
        <div className="slideshow">
          <img src={images[index]} alt="slides" className="slides" />
          <button className="prevBtn" onClick={prevStep}><ArrowBackIosIcon /></button>
          <button className="nextBtn" onClick={nextStep}><ArrowForwardIosIcon /></button>
        </div>
      </div>
    )
  }

