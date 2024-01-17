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
            {/* Quantifi 2, Quantifi 3, Contact, Join Waitlist 1 */}
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
            {/* Home, About, Q Band Features, In App Features */}
            <div className={styles.homeAboutQContainer}>
                <p className={styles.wellnessInsightsHrv} onClick={() => handleScroll("heroSection")} style={{ cursor: "pointer" }}>
                    Home
                </p>
                <p className={styles.wellnessInsightsHrv} onClick={() => handleScroll("aboutSection")} style={{ cursor: "pointer" }}>
                    About
                </p>
                <p className={styles.wellnessInsightsHrv} onClick={() => handleScroll("qBandSection")} style={{ cursor: "pointer" }}>
                    Q Band Features
                </p>
                <p className={styles.wellnessInsightsHrv} onClick={() => handleScroll("inAppSection")} style={{ cursor: "pointer" }}>
                    In App Features
                </p>
            </div>
            {/* Email, LinkedIn, Instagram, Twitter */}
            <div className={styles.emailLinkedinInstagramContainer}>
                <p className={styles.wellnessInsightsHrv} style={{ cursor: "pointer" }}>
                    Email
                </p>
                <p className={styles.wellnessInsightsHrv} style={{ cursor: "pointer" }}>
                    LinkedIn
                </p>
                <p className={styles.wellnessInsightsHrv} style={{ cursor: "pointer" }}>
                    Instagram
                </p>
                <p className={styles.wellnessInsightsHrv} style={{ cursor: "pointer" }}>
                    Twitter
                </p>
            </div>
            {/* Waitlist Button */}
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
