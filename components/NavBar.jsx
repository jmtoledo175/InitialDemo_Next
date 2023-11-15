import ActiveLink from "./ActiveLink";
import styles from "../styles/Navbar.module.css"
const NavBar = () => {
    return ( 
        <nav className={styles['menu-container']}>
            <ActiveLink href="/" text="Home"></ActiveLink>
            <ActiveLink href="/about"text="About"></ActiveLink>
            <ActiveLink href="/contacto" text="Contact Us"></ActiveLink>
        </nav>
     );
}
 
export default NavBar;