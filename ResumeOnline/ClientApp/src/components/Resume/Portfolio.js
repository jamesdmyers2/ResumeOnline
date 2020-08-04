import React from "react";
import resumeData from "./Resume";
import { Container, Row } from "react-bootstrap";
import { FetchFHIRData } from './../FHIR/FetchFHIRData';


const portfolioList = resumeData.portfolio;

export function Portfolio() {
    return (
        <section id="portfolio">

            <div className="row">

                <div className="twelve columns collapsed">

                    <h1>Sample Projects</h1>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"
                        style={{border: "double", padding: "2rem", borderColor: "black"}}
                    >
                        <Container>
                            <Row>

                                <h1 style={{ borderBottom: "1px solid grey", padding: "2rem" }}> Below is a sample program written in React with a C# backend that connects with the Epic FHIR Sandbox
                            to pull FHIR data that is then parsed and displayed on the screen.
                                    </h1>

                            </Row>
                            <Row style={{display: "block"}}>
                                <FetchFHIRData />
                            </Row>

                        </Container>

                    </div>
                </div>
            </div>
        </section>
        )
};