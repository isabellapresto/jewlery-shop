import Banner from '../Banner/Banner'
import ImageList from '../ImageList/ImageList';
import './Home.css'

export default function Home() {
    return (
        <div className='backgroundColor'>
            <Banner></Banner>
            <ImageList></ImageList>
        </div>

    );
  }