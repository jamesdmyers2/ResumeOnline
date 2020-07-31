import React from "react";
import resumeData from "./Resume";


const testiList = resumeData.testimonials;

export function Testimonials() {
    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">

                    <div className="two columns header-col">
                        <h1><span>Testimonials</span></h1>
                    </div>

                    <div className="ten columns flex-container">
                        <ul className="slides">
                            {testiList.map(t => (
                                <li key={t.user}>
                                    <blockquote>
                                        <p>{t.text}</p>
                                        <cite>{t.user}</cite>
                                    </blockquote>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )
}