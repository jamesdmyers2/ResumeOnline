import React, { Component } from "react";
import {  Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from 'react-router-dom';
import './sidebar.css'



export class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (

            <div>

                < Navbar collapseOnSelect expand="lg" variant="light" >


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="col-md-12 d-none d-md-block sidebar"
                            activeKey="/home"
                        //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                        >
                            <div className="sidebar-sticky"></div>


                              <Navbar.Brand style={{ color: "white", width: "inherit", fontSize: "large", textAlign: "center", backgroundColor: "grey"}}>Resume</Navbar.Brand>

                            <Nav.Item>
                                <Nav.Link tag={Link}  href="/prof-summary">Proffessional Summary</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link tag={Link}  href="/tech-skills">Technical Skills</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link tag={Link} href="/prof-experience">Professional Experience</Nav.Link>
                            </Nav.Item>


                            <Nav.Item>
                                <Nav.Link tag={Link} href="/education">Education</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link tag={Link} href="/contact">Contact</Nav.Link>
                            </Nav.Item>

                            {/*<NavDropdown title="Proffesional Experience" id="collasible-nav-dropdown" className="dropright">
                                <NavDropdown.Item href="/prof-experience">Overview</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item tag={Link} className="text-dark" to="/fetch-data-fhir">Akamai</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pursuant Health</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ingenious Med</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >

            </div>

        );
    };
}
export default Sidebar

