import Logo from "../Logo/Logo";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
// import Login from "../Login/Login";
// import NavLinks from "../NavLinks/NavLinks";


export default function Header() {
 return (
   <header>
    <div className="HeaderAreaOne">
    <p>1 YEAR WARRANTY</p>
    {/* <Login/> */}
    <ShoppingCartIcon/>
    </div>


    <div className="HeaderAreaTwo">
     <Logo/>
     {/* <NavLinks/> */}
    </div>
   </header>
 );
}
