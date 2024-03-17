import './AboutMe.css';
import React from 'react';

function AboutMe(props) {
    const name = props.name;
    const info = props.info
    return (
        <div id="sec2">
            <section id="about" className="bg-ligth">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 spacing">
                            <h1>About Me</h1>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4">Hi, My Name is {name}</h2>
                            <p className="lead">{info}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
