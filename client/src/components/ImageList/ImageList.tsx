import earringsFrontpage from '../../assets/earringsFrontpage.jpg';
import braceletsFrontpage from '../../assets/braceletsFrontpage.jpg';
import necklacesFrontpage from '../../assets/necklacesFrontpage.jpg';
import ringsFrontpage from '../../assets/ringsFrontpage.jpg';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Container } from "@mui/material";

export default function ImageList() {
  return (

    <Container 
        sx={{ 
            width: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}
    >

        <Box sx={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
     
            <div>
                <Link to='http://localhost:5173/shop'>
                    <img
                    src={earringsFrontpage}
                    alt= "earrings"
                    height= "350px"
                    width= "350px"
                    />
                </Link>
           </div>
  
           <div>
                <Link to='http://localhost:5173/shop'>
                    <img
                    src={braceletsFrontpage}
                    alt= "bracelets"
                    height= "350px"
                    width= "350px"
                    />
                </Link>
            </div>
        </Box>

        <Box sx={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
            <div>
                <Link to='http://localhost:5173/shop'>
                    <img
                    src={necklacesFrontpage}
                    alt= "necklaces"
                    width="350px"
                    height="350px"
                    />
                </Link>
            </div>

            <div>
                <Link to='http://localhost:5173/shop'>
                    <img
                    src={ringsFrontpage}
                    alt= "rings"
                    width="350px"
                    height="350px"
                    />
                </Link>
            </div>
        </Box>   
    </Container>
    );
}