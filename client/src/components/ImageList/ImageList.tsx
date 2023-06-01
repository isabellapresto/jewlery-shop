import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import '../ImageList/ImageList.css'

export default function ImageList() {
  return (

    <Grid container width='80%' margin='auto' marginTop='40px' marginBottom='50px' spacing={2}>

        <Grid item margin='auto' xs={12} sm={6} md={6} lg={3}>
            <div className="imageContainer">
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/66a.jpg'
                alt= "earrings"
                height="250px"
                width="250px"
                className='imageBox'
                />
            </Link>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="imageContainer">
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/brace-12.jpg'
                alt= "bracelets"
                width="250px"
                height="250px"
                className='imageBox'
                />
            </Link>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="imageContainer">
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/mn.jpg'
                alt= "necklaces"
                width="250px"
                height="250px"
                className='imageBox'
                />
            </Link>
            </div>
        </Grid>  

        <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="imageContainer ">
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/ring.jpg'
                alt= "rings"
                width="250px"
                height="250px"
                className='imageBox'
                />
            </Link>
            </div>
        </Grid>
        
    </Grid>
)};