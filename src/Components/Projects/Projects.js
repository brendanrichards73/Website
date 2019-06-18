import React, { Component } from "react";
import css from "../Projects/Projects.module.css";

class Projects extends Component {
    render() {
        return (
            <div>
                <div className={css.loadingContainer}>
                    <div className={css.loading}>
                        <span className={css.dataText + " " + css.M}>M</span>
                        <span className={css.dataText + " " + css.y}>y</span>
                        <span className={css.dataText + " " + css.space}>
                            _
                        </span>
                        <span className={css.dataText + " " + css.P}>P</span>
                        <span className={css.dataText + " " + css.r}>r</span>
                        <span className={css.dataText + " " + css.o}>o</span>
                        <span className={css.dataText + " " + css.j}>j</span>
                        <span className={css.dataText + " " + css.e}>e</span>
                        <span className={css.dataText + " " + css.c}>c</span>
                        <span className={css.dataText + " " + css.t}>t</span>
                        <span className={css.dataText + " " + css.s}>s</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
