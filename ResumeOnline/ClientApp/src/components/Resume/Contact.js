
import React from "react";
import resumeData from "./Resume";

//ajax call performed in init.js on submit

const basicList = resumeData.basics;
const message = "Thank you for viewing my profile, please reach out below."
export function Contact() {
    function handleChange(e) {
        
    }


    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Get In Touch.</span></h1>

                </div>

                <div className="ten columns">

                    <p className="lead">{message}</p>

                </div>

            </div>

            <div className="row">
                <div className="eight columns">

                    <form method="post" id="contactForm" name="contactForm">
                        <fieldset>

                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            {basicList.name}<br />
                            {basicList.location.city}, {basicList.location.state} {basicList.location.postalCode}<br />
                            <span>{basicList.phone}</span>
                        </p>
                    </div>

                   
                </aside>
            </div>
        </section>
    )

};