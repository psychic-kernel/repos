import {useState} from 'react';
import profile_image_url from '../assets/profile_pic.jpg';
import {
    Card,
    CardBody,
    CardTitle,

    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    
    Button,
    Form,    
    Label,
} from 'reactstrap';
import "../stylesheets/ProfileBadge.css";

// add to NavBrand
const ProfileBadge = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen( !isOpen );

    return (
        // container
        <main className="container"
        style={{
            position: "relative",
            boxShadow: "12px, 12px, 12px"
        }}>
            <Card className="bs-card" style={{ 
                border: "none",
                
                
                }}>
                <CardBody className="image-body">
                    <CardTitle className="card-title">Michael A. Robins</CardTitle>
                        <img
                        style={{borderRadius: 100, width: 70}}
                        src={profile_image_url} alt="Authors profile image"/>
                </CardBody>
                <Dropdown onClick={e => e.preventDefault()} isOpen={isOpen} toggle={toggle} direction="end">
                    <DropdownToggle style={{
                        position: "relative",
                        display: "flex",
                        border: "none",
                        padding: 5,
                        width: 18,
                        backgroundColor: "transparent",
                        color: "gray",
                        boxShadow: "2px 1px 1px",
                        left: 6 + "em",
                        bottom: 4 + "em"
                        
                        }}caret></DropdownToggle>
                    <DropdownMenu className="bs-dropdown-menu">
                        <DropdownItem className="dropdown-item-form-container">
                        {/* user sends email to me */}
                        <Form>
                                <Label for="message">Email Me:</Label><br/>
                                <textarea id="message" style={{width: 200, height: 60}}/>
                                <Button type="submit">Submit</Button>
                               
                        </Form>
                        </DropdownItem>
                        
                    </DropdownMenu>
                </Dropdown>
            </Card>

        </main>
    )
};
export default ProfileBadge;