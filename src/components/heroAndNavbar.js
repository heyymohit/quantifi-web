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
            {/* Navbar */}
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
                {/* Add more items as needed */}
                <b className={styles.join} style={{ cursor: "pointer" }}>
                    join
                </b>
            </div>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                {/* Down Chevron and Screenshot Images */}
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
                <b className={styles.quantifyFitnessAnalytics}>
                    Quantify Fitness Analytics with AI and Smart Sensors
                </b>
                <div className={styles.cateringToThe}>
                    Catering to the Personalized Needs of Powerlifters, Bodybuilders, and
                    Gym Enthusiasts – Seizing the Future of Quantified Self
                </div>
                {/* Join Waitlist Section */}
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.joinWaitlist}>Join Waitlist</div>
                </div>
            </div>
        </div>
    );
};

export default HeroAndNavbarSection;
