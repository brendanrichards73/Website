import React, { Component } from "react";
import css from "../About/About.module.css";
import MyPic from "./MyPic.png";

class About extends Component {
    render() {
        return (
            <>
                <div>
                    <div className={css.loadingContainer}>
                        <div className={css.loading}>
                            <span className={css.dataText + " " + css.A}>
                                A
                            </span>
                            <span className={css.dataText + " " + css.b}>
                                b
                            </span>
                            <span className={css.dataText + " " + css.o}>
                                o
                            </span>
                            <span className={css.dataText + " " + css.u}>
                                u
                            </span>
                            <span className={css.dataText + " " + css.t}>
                                t
                            </span>
                            <span className={css.dataText + " " + css.space}>
                                _
                            </span>
                            <span className={css.dataText + " " + css.M}>
                                M
                            </span>
                            <span className={css.dataText + " " + css.e}>
                                e
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={css.container}>
                        <h3 className={css.infoBox}>
                            I am a disciplined, highly-motivated, committed and
                            professional individual with an ability to lead,
                            manage, support and guide team members, recognising
                            and respecting the many different personalities of
                            those I engage with. My career path to-date has made
                            me an accomplished and fluent communicator who is
                            competent conversing with directors, managers,
                            colleagues, parents and children. Through my
                            experiences I have developed competent skills in
                            management, problem-solving and decision-making,
                            combined with a pragmatic approach and sound
                            business acumen. I have extensive experience of
                            exceeding business expectations and delivering
                            against business and customer needs in an efficient
                            and professional manner at all times.
                        </h3>
                        <img className={css.pic} src={MyPic} alt="pic" />
                    </div>
                </div>
            </>
        );
    }
}

export default About;
