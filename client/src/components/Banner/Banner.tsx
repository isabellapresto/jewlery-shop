import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Banner/Banner.css'
import { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { wrap } from "popmotion";

const images = [
  'https://lilyandrose.se/wp-content/uploads/2023/04/statement-gift-guide-kategori-1000x417.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/04/kategori-everyday-pieces.jpg',
  'https://lilyandrose.se/wp-content/uploads/2023/05/kategoribanner-spring-clearance-1000x417.jpg',
]

const variants = {
  enter: (direction : number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    //transition: 'ease-in',
    /*transition: {
      x: {type: 'spring', stiffness: 300, damping: 20}
    }*/
  }, 

  exit: (direction : number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      //transition: 'ease-in',
    };
  }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Banner = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

    return (
      <div className="bannerContainer">
        <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
          key={page}
          src={images[imageIndex]} 
          variants={variants} 
          initial="enter"
          animate="center" 
          exit="exit" 
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          alt="slides" 
          className="slides" 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          />
        </AnimatePresence>
          <button className="prevBtn" onClick={() => paginate(1)}><ArrowBackIosIcon /></button>
          <button className="nextBtn" onClick={() => paginate(-1)}><ArrowForwardIosIcon /></button>
        </div>
      </div>
    )
  }

