// HeroAndNavbarSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const HeroAndNavbarSection = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.heroAndNavbarContainer} id="heroSection">
            <div className={styles.navbar}>
                <b className={styles.quantifi1} onClick={() => handleScroll("heroSection")} style={{ cursor: "pointer" }}>
                    Quantifi
                </b>
                <b className={styles.about} onClick={() => handleScroll("aboutSection")} style={{ cursor: "pointer" }}>
                    about
                </b>
                <b className={styles.features} onClick={() => handleScroll("qBandSection")} style={{ cursor: "pointer" }}>
                    features
                </b>
                <b className={styles.join} style={{ cursor: "pointer" }}>
                    join
                </b>
            </div>
            <div className={styles.heroSection}>
                <img
                    className={styles.downChevron1Icon}
                    alt="Down Chevron"
                    src="/downchevron-1@2x.png"
                    onClick={() => handleScroll("qBandSection")}
                    style={{ cursor: "pointer" }}
                />
                <img
                    className={styles.screenshot202312270229231}
                    alt="Screenshot"
                    src="/screenshot-20231227-022923-1@2x.png"
                />
                <b className={styles.heading}>
                    Quantify Fitness Analytics with AI and Smart Sensors
                </b>
                <div className={styles.description}>
                    Catering to the Personalized Needs of Powerlifters, Bodybuilders, and
                    Gym Enthusiasts – Seizing the Future of Quantified Self
                </div>
                <div className={styles.button}>
                    <div className={styles.joinWaitlist}>Join Waitlist</div>
                </div>
            </div>
        </div>
    );
};

export default HeroAndNavbarSection;
