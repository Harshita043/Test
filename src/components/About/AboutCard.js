import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Harshita Singh </span>
                        from <span className="purple"> Kanpur, India.</span>
                        <br />I am pursuing B.Tech in Computer Science and Engineering  in Shri Ramswaroop Memorial College Of Engineering and Management ,Lucknow.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Singing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Literary Writing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Harshita</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;