// FooterSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const FooterSection = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.quantifiLogo}>
                <img
                    className={styles.quantifiLogo}
                    alt="QUANTIFI"
                    src="/screenshot-20231227-022923-1@2x.png"
                />
            </div>
            <div className={styles.quantifi3}>quantifi</div>
            <div className={styles.contact}>
                contact
            </div>
            <div className={styles.joinWaitlist1}>
                join waitlist
            </div>
            <div className={styles.homeAboutQContainer}>
                <p onClick={() => handleScroll("heroSection")} style={{ cursor: "pointer" }}>
                    Home
                </p>
                <p onClick={() => handleScroll("aboutSection")} style={{ cursor: "pointer" }}>
                    About
                </p>
                <p onClick={() => handleScroll("qBandSection")} style={{ cursor: "pointer" }}>
                    Q Band Features
                </p>
                <p onClick={() => handleScroll("inAppSection")} style={{ cursor: "pointer" }}>
                    In App Features
                </p>
            </div>
            <div className={styles.emailLinkedinInstagramContainer}>
                <p style={{ cursor: "pointer" }}>
                    Email
                </p>
                <p style={{ cursor: "pointer" }}>
                    LinkedIn
                </p>
                <p style={{ cursor: "pointer" }}>
                    Instagram
                </p>
                <p style={{ cursor: "pointer" }}>
                    Twitter
                </p>
            </div>
            <div className={styles.waitlistButton}>
                <div className={styles.waitlistButtonChild} />
                <div className={styles.emailAddress}>Email Address</div>
                <div className={styles.rectangleGroup}>
                    <div className={styles.groupItem} />
                    <div className={styles.submit}>submit</div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
