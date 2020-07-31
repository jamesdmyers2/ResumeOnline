import React from "react";
import resumeData from "./Resume";

export const ResumeData = () => {
    return (
        <>
            <div className="stock-container">
                {resumeData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.basics.name +
                                " , " +
                                data.basics.label +
                                " ," +
                                data.basics.email +
                                ", " +
                                data.basics.phone}
                        </div>
                    );
                })}
            </div>
        </>
    );
};