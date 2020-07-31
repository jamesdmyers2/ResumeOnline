import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { Row, Col } from "react-bootstrap";
import "../custom.css";
import { Sidebar } from "./sidebar.js";
import './sidebar.css';

export function Layout(props) {
    return (
        <div>
            <NavMenu />

            <Container fluid id="sidebar-container" >
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

