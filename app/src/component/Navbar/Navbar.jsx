import React , {useState,useEffect} from "react";
import './Navbar.css'

const Navbar = () => {

    const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMenuOpen,setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }


  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbarHeight = 70; 
    const isVisible = (prevScrollPos > currentScrollPos) || currentScrollPos < navbarHeight;

    setVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);


    
    return(
        <nav className={`${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
        <div class="nav-brand">
            <h4>Wonderfull Sul-Sel</h4>
        </div>
        <ul className={isMenuOpen ? 'slide' : ''}>
            <li><a href="">Home</a></li>
            <li><a href="">Paket Wisata</a></li>
            <li><a href="">Galery</a></li>
            <li><a href="">Kontak</a></li>
            <li><a href="">About</a></li>
        </ul>

        <div class="menu-toggle" onClick={handleMenuToggle} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    )
}

export default Navbar