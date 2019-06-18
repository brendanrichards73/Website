import React, { Component } from "react";
import css from "../Home/Home.module.css";

class Home extends Component {
    render() {
        return (
            <>
                <div className={css.loadingContainer}>
                    <div className={css.loading}>
                        <span className={css.dataText + " " + css.B}>B</span>
                        <span className={css.dataText + " " + css.r}>r</span>
                        <span className={css.dataText + " " + css.e}>e</span>
                        <span className={css.dataText + " " + css.n}>n</span>
                        <span className={css.dataText + " " + css.d}>d</span>
                        <span className={css.dataText + " " + css.a}>a</span>
                        <span className={css.dataText + " " + css.n}>n</span>
                        <span className={css.dataText + " " + css.space}>
                            .
                        </span>
                        <span className={css.dataText + " " + css.R}>R</span>
                        <span className={css.dataText + " " + css.i}>i</span>
                        <span className={css.dataText + " " + css.c}>c</span>
                        <span className={css.dataText + " " + css.h}>h</span>
                        <span className={css.dataText + " " + css.a}>a</span>
                        <span className={css.dataText + " " + css.r}>r</span>
                        <span className={css.dataText + " " + css.d}>d</span>
                        <span className={css.dataText + " " + css.s}>s</span>
                    </div>
                </div>
                <div className={css.titleContainer}>
                    <span className={css.title}>Web Developer</span>
                </div>

                <div className={css.container}>
                    <h3 className={css.infoBox}>
                        I began my career in web development attending a 16 week
                        Coding Bootcamp at the School of Code in Birmingham.
                        <br />
                        <br />
                        During the course I have worked in Agile teams producing
                        a variety of web based applications. The skills I have
                        learned have provided me with a solid platform to which
                        I can build upon as I continue my journey in web
                        development utilising my creative skills to provide
                        technological solutions to help people.
                    </h3>
                </div>
                <br />
                <div className={css.footerContainer}>
                    <footer className={css.footertext}>
                        A junior developer with a passion for learning.
                    </footer>
                </div>
            </>
        );
    }
}

export default Home;
