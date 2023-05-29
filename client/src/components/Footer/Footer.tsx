import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

  return (
    <div className="">
        <div className="">
            <ul className="" style={{ listStyle: 'none' }}>
                <li>Skötselråd</li>
                <li>Återförsäljare</li>
                <li>Kontakt</li>
                <li>Betalningsvillkor</li>
                <li>Leveransvillkor</li>
                <li>Byten och returer</li>
                <li>Om Jewelry Shop</li>
                <li>Karriär</li>
                <li>Press</li>
                <li>Privacy Policy</li>
                <li>Presentkort</li>
            </ul>
        </div>
        <div className="footer-right">
            <ul className="social-icons" style={{ listStyle: 'none' }}>
                <li>{<InstagramIcon />}</li>
                <li>{<FacebookOutlinedIcon />}</li>
                <li>{<PinterestIcon />}</li>
                <li>{<LinkedInIcon />}</li>
            </ul>
        </div>
    </div>
  )
}
