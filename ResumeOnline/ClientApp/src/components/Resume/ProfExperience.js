
import React from "react";
import resumeData from "./Resume";
import dateFormat from 'dateformat';
import "./resume.css";

const workList = resumeData.work;
const educationList = resumeData.education;
const skillsList = resumeData.skills;

var skills = skillsList.map(function (skills) {
    var className = 'bar-expand ' + skills.name.toLowerCase();
    return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
})

export function ProfExperience() {


    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {educationList.map(e => (
                                <div key={e.institution}><h3>{e.institution}</h3>
                                    <p className="info">{e.area}</p>
                                    <p className="info">{e.studyType}</p>
                                    </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    <ul>
                        {workList.map(s => (
                            <div key={s.company} className="nine colums main-col">
                                <div ><h3>{s.company}</h3>
                                    <p className="info">{s.position}<span>&bull;</span> <em className="date">{dateFormat(s.startDate, "mm-dd-yyyy")} - {dateFormat(s.endDate, "mm-dd-yyyy")}</em></p>
                                    <li>{s.summary}</li>
                                    {s.highlights.map(h => (
                                        <li key={h}>{h}</li>
                                    )
                                    )}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div id="bars" className="nine columns main-col">

                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
               

        </section>
    )

};