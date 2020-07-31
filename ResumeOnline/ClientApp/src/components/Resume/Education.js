
import React from "react";
import resumeData from "./Resume";

const educationList = resumeData.education;

export function Education() {
    return (
        <div id="education" className="row">
            <h1>Education</h1>
            <br />
            <div>

                <ul>
                    {educationList.map(e => (
                    <div>
                            <h2><b>College</b></h2>
                            <h3>{e.institution}</h3>

                        <br />
                            <h2><b>Major</b></h2>
                                <h3>{e.area}</h3>
                                <br />
                                <h2><b>Degree</b></h2>
                                    <h3>{e.studyType}</h3>

                        <br />
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )

};