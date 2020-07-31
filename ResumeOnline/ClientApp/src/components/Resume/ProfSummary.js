
import React from "react";
import resumeData from "./Resume";

const basicList = resumeData.basics;

export function ProfSummary() {
    return (
        <div id="profsummary" className="row">
            <h1>Professional Summary</h1>
            <br/>
            <div>

                <ul>
                    <div>
                        {basicList.summary}
                        {basicList.highlights.map(h => (
                            <li>{h}</li>
                        )
                        )}
                        <br />
                    </div>
                </ul>

            </div>
        </div>
    )

};