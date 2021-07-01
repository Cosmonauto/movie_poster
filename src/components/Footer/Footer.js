import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 300">
                <path fill="rgb(255, 0, 0)" fill-opacity="1" d="M0,192L30,170.7C60,149,120,107,180,112C240,117,300,171,360,192C420,213,480,203,540,218.7C600,235,660,277,720,266.7C780,256,840,192,900,186.7C960,181,1020,235,1080,266.7C1140,299,1200,309,1260,288C1320,267,1380,213,1410,186.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            <Box>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "-20px"
                }}>
                    Movie Poster
                </h1>
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Writing</FooterLink>
                            <FooterLink href="#">Internships</FooterLink>
                            <FooterLink href="#">Coding</FooterLink>

                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="#">Bishkek</FooterLink>
                            <FooterLink href="#">Texas</FooterLink>
                            <FooterLink href="#">Brussels</FooterLink>

                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>

                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </>
    );
};
export default Footer;
