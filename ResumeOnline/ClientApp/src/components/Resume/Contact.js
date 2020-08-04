
import React, { useState } from "react";
import resumeData from "./Resume";
import axios from 'axios';
import { Fade } from 'react-bootstrap';

const basicList = resumeData.basics;
const message = "Thank you for viewing my profile, please reach out below."
export function Contact() {

    const [fadeInImageLoader, setFadeInImageLoader] = useState(false);
    const [fadeInMessageWarning, setFadeInMessageWarning] = useState(false);
    const [messageWarning, setMessageWarning] = useState('');
    const [fadeInMessageSuccess, setFadeInMessageSuccess] = useState(false);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactSubject, setContactSubject] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState('true');

    function handleChange(e) {

    }

    function handleSubmit(event) {
        event.preventDefault();
        sendMailData();
    }

    async function sendMailData() {
        setFadeInImageLoader(true);
        setFadeInMessageWarning(false);
        setFadeInMessageSuccess(false);

        var data = {
            Name: contactName,
            Email: contactEmail,
            Subject: contactSubject,
            Message: contactMessage
        }

        var endPoint = "/sendmail";

        axios.post(endPoint, data).then(res => {
            var resMessage = res.data[0].message
            if (resMessage === 'Accepted') {
                setShowSuccessMessage(true);
                setFadeInImageLoader(false);
                setFadeInMessageWarning(false);
                setFadeInMessageSuccess(true);
            } else {
                setShowSuccessMessage(false);
                setFadeInImageLoader(false);
                setMessageWarning(resMessage);
                setFadeInMessageWarning(true);
            }
        }).catch(error => {
            console.log(JSON.stringify(error));
        })
    }

    const showMessageWarning = (
        <Fade in={fadeInMessageWarning} className="col3">
            <div id="message-warning">{messageWarning}</div>
        </Fade>
    );

    const showMessageSuccess = (
        <Fade in={fadeInMessageSuccess} className="col3">
            <div id="message-success">

                <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
        </Fade>
        )

    const messages = showSuccessMessage
        ? showMessageSuccess
        : showMessageWarning;

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

                    <form onSubmit={handleSubmit} method="post" id="contactForm" name="contactForm">
                        <fieldset>

                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setContactName(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => setContactEmail(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setContactSubject(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onBlur={e => setContactMessage(e.target.value)}></textarea>
                            </div>
                            <div>
                                <div className="col1">
                                    <button className="submit">Submit</button>
                                </div>

                                <Fade in={fadeInImageLoader} className="col2">
                                    <div>
                                        <img alt="" src="images/loader.gif" />
                                    </div>
                                </Fade>
                                {messages}
                            </div>

                        </fieldset>
                    </form>
                    

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