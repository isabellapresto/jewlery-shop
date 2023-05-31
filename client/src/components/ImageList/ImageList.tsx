import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Container } from "@mui/material";
import '../ImageList/ImageList.css'

export default function ImageList() {
  return (

    <Container 
        sx={{ 
            width: '75%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px'
            }}
    >

        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/66a.jpg'
                alt= "earrings"
                className='imageBox'
                />
            </Link>
        </Box>
        
        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/brace-12.jpg'
                alt= "bracelets"
                className='imageBox'
                />
            </Link>
        </Box>

        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/mn.jpg'
                alt= "necklaces"
                className='imageBox'
                />
            </Link>
        </Box>  

        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>  
            <Link to='http://localhost:5173/shop'>
                <img
                src='https://lilyandrose.se/wp-content/uploads/2023/04/ring.jpg'
                alt= "rings"
                className='imageBox'
                />
            </Link>
        </Box>   
    </Container>
    );
}