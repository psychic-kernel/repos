import {useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import ProfileBadge from './ProfileBadge';
import '../stylesheets/NavComponent.css';
const NavComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <nav>
            <Navbar className="nav-bar">
                <NavbarBrand href="/">
                    <ProfileBadge/>
                </NavbarBrand>
                {/* display: none => min 900px */}
            
                <NavbarToggler onClick={toggle} />
                <Collapse className="collapse" isOpen={isOpen} navbar>
                    <Nav className="nav-items-container" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="navlink" href="/">Main</NavLink>
                            <NavLink className="navlink" href="/academics">Academics</NavLink>
                            <NavLink className="navlink" href="/projects">Projects</NavLink>
                            <NavLink className="navlink" href="/bio">Bio</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                
            </Navbar>

        </nav>
    )
};
export default NavComponent;