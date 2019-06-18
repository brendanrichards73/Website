import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";

class Header extends Component {
    render() {
        return (
            <div className={css.header}>
                <ul className={css.buttonContainer}>
                    <Link to="/" className={css.link}>
                        <button className={css.buttons}>Home</button>
                    </Link>

                    <Link className={css.link} to="/about">
                        <button className={css.buttons}>About Me</button>
                    </Link>

                    <Link className={css.link} to="/projects">
                        <button className={css.buttons}>My Projects</button>
                    </Link>

                    <Link className={css.link} to="/contact">
                        <button className={css.buttons}>Contact Me</button>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Header;
