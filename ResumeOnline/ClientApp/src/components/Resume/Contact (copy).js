
import React from "react";
import resumeData from "./Resume";

const basicList = resumeData.basics;

export function Contact() {
    return (
        <div id="contact" className="row">
            <h1>{basicList.name}</h1>
            <h1>Contact Information</h1>
            <br />
            <div>

                <ul>
                    <div>
                        <h2>Email </h2>
                        <h3><a href={`mailto:${basicList.email}`}>{basicList.email}</a></h3>
                        
                        <br/>
                        <h2>LinkedIn</h2>
                        <h3><a href={'//' + basicList.linkedin} target="_blank">{basicList.linkedin}</a></h3>
                        <br />
                        <h2>Phone</h2>
                        <h3>{basicList.phone}</h3>
                        <br />
                    </div>
                </ul>

            </div>
        </div>
    )

};