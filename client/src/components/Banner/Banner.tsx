import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Banner/Banner.css'
import { useState } from 'react';
import {motion, AnimatePresence, Variants} from 'framer-motion';

const images = [
  'https://lilyandrose.se/wp-content/uploads/2023/05/kategoribanner-spring-clearance-1000x417.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/04/kategori-everyday-pieces.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/04/statement-gift-guide-kategori-1000x417.jpg',
]

const variants : Variants = {
    initial: direction => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
  
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: {type: 'spring', stiffness: 300, damping: 20}
      }
    }, 
  
    exit: direction => {
      return {
        x: direction > 0 ? -500 : 500,
        opacity: 0,
      };
    }
  }

  export default function Banner() {
      
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)
      
    function nextStep() {
      setDirection(1)
      if(index === images.length -1) {
        setIndex(0)
        return
      }
      setIndex(index + 1)
    }
      
    function prevStep() {
      setDirection(-1)
      if (index === 0) {
        setIndex(images.length - 1)
        return
      }
      setIndex(index - 1)
    }
      
    return (
      <div className="bannerContainer">
        <div className="slideshow">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img 
              variants={variants} 
              initial="initial"
              animate="animate" 
              exit="exit" 
              src={images[index]} 
              alt="slides" 
              className="slides" 
              key={images[index]}
              custom={direction}
              />
            </AnimatePresence>

            <button className="prevBtn" onClick={prevStep}><ArrowBackIosIcon /></button>
            <button className="nextBtn" onClick={nextStep}><ArrowForwardIosIcon /></button>

        </div>
      </div>
    )
} 
  

