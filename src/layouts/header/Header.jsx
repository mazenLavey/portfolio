import { Link } from "react-router-dom";
import Nav from "./Nav";
import HeaderCSS from './styles/Header.module.css';

const Header = ()=>{
    return (
        <header className={HeaderCSS.postion}>
            <div className={`${HeaderCSS.wrapper} container`}>
                <Link path="/" className={HeaderCSS.logo}>M</Link>
                <Nav />
            </div>
        </header>
    )
};

export default Header;