import React from "react";
import { Link } from "react-router-dom";
import resumeData from "./Resume";
import ExportResume from "./ExportResume";

const basicList = resumeData.basics;

const filePath = "images/Resume.pdf";

export function About() {

    function handleClick(e) {
        ExportResume({ resumeData }, "output.html", "modern", "", "");

    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={basicList.picture} alt="James Myers Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{basicList.summary}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{basicList.name}</span><br />
                                <span>{basicList.location.city}, {basicList.location.state}
                                </span><br />
                                <span>{basicList.phone}</span><br />
                                <span>{basicList.email}</span>
                                <br/>
                                <a href={'//' + basicList.linkedin} target="_blank" >LinkedIn: James Myers</a>
                            </p>
                        </div>
                            <div className="columns download">
                                <p>
                                    <a href={filePath} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
            )
};