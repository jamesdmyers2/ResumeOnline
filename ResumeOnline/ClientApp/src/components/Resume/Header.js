import React from "react";
import resumeData from "./Resume";


const basicList = resumeData.basics;

export function Header() {
    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{basicList.name}</h1>
                    <div id="intro">
                    <h3 >
                        {basicList.intro.map(i => (
                            <p>{i}</p>
                        )
                        )}
                            <br /><p style={{ fontSize: "75%" }}>Review the code on GitHub
                                <br/>
                                <a href={'//' + basicList.github} target="_blank" >{basicList.github}</a></p></h3>
                    
                        </div>
                    <hr />
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )

};