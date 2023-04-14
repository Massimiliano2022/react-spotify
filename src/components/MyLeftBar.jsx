import logo from '../Spotify_Logo.png'
import { Button, Col, Form, FormControl } from "react-bootstrap";

const MyLeftBar = () => {
    return (
        <>
            {/*<Col sm={2} style={{zIndex:1 , position: 'fixed' }}>*/}
            <Col sm={2} style={{ zIndex: 1}}>
                <nav className="navbar-dark bg-dark vh-100">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} alt='Logo' style={{ width: "130px", height: "40px" }} />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link">
                                Your library
                            </a>
                        </li>
                    </ul>
                    <Form className="d-flex" role="search">
                        <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </nav>
                <nav className='d-flex flex-column fixed-bottom'>
                    <Button variant="light" type="submit" style={{ width: "230px" }}>Sign up</Button>
                    <Button variant="dark" type="submit" style={{ width: "230px" }}>Login</Button>
                    <ul className="navbar-nav text-light">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cookie Policy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </nav>
            </Col>
        </>
    );
}
export default MyLeftBar;