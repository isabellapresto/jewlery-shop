import earringsFrontpage from '../../assets/earringsFrontpage.jpg';
import braceletsFrontpage from '../../assets/braceletsFrontpage.jpg';
import necklacesFrontpage from '../../assets/necklacesFrontpage.jpg';
import ringsFrontpage from '../../assets/ringsFrontpage.jpg';
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
                src={earringsFrontpage}
                alt= "earrings"
                className='imageBox'
                />
            </Link>
        </Box>
        
        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>
            <Link to='http://localhost:5173/shop'>
                <img
                src={braceletsFrontpage}
                alt= "bracelets"
                className='imageBox'
                />
            </Link>
        </Box>

        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>
            <Link to='http://localhost:5173/shop'>
                <img
                src={necklacesFrontpage}
                alt= "necklaces"
                className='imageBox'
                />
            </Link>
        </Box>  

        <Box sx={{width: '250px', height: '250px', position: 'relative'}}>  
            <Link to='http://localhost:5173/shop'>
                <img
                src={ringsFrontpage}
                alt= "rings"
                className='imageBox'
                />
            </Link>
        </Box>   
    </Container>
    );
}