// AboutSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const AboutSection = () => {
    return (
        <div className={styles.aiImageAboutus} id="aboutSection">
            <div className={styles.aboutUs}>
                {/* Quantifi Is Born Container */}
                <div className={styles.quantifiIsBornContainer}>
                    <p className={styles.wellnessInsightsHrv}>
                        <span>
                            Quantifi is born from a vision to bridge the gap between fitness
                            tracking technology, particularly in the realm of gym workouts, and
                            automation. The concept originated from a desire to create something
                            truly innovative – envisioning{" "}
                        </span>
                        <span className={styles.socialCommunitiesAnd}>
                            social communities and clubs tailored for gym enthusiasts
                        </span>
                        <span className={styles.seamlesslyIntegratedWith}>
                            {", seamlessly integrated with "}
                        </span>
                        <span className={styles.socialCommunitiesAnd}>
                            automated fitness analytics tracking
                        </span>
                        <span className={styles.seamlesslyIntegratedWith}>
                            {". Our aspiration is to democratize high-end technologies like "}
                        </span>
                        <span className={styles.socialCommunitiesAnd}>
                            Velocity-Based Training (VBT)
                        </span>
                        <span className={styles.seamlesslyIntegratedWith}>
                            {", making them accessible to the general public for a more inclusive "}
                        </span>
                        <span className={styles.socialCommunitiesAnd}>
                            fitness experience. At the core of Quantifi's development is the
                            creation of a revolutionary
                        </span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.socialCommunitiesAnd}>
                            fitness band designed not only to track physical health but also to
                            contribute to overall mental wellness
                        </span>
                        <span className={styles.seamlesslyIntegratedWith}>
                            {". As we navigate through the development process, we are on the brink "}
                        </span>
                        <span className={styles.socialCommunitiesAnd}>
                            {`of executing our vision, determined to reshape the landscape of fitness `}
                        </span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.socialCommunitiesAnd}>
                            {`technology and bring a new era of holistic well-being to individuals worldwide.`}
                        </span>
                        <span className={styles.span}>{` `}</span>
                    </p>
                    <p className={styles.stayTunedForTheUnveilingO}>
                        <span>
                            Stay tuned for the unveiling of Quantifi – where innovation meets
                            empowerment in your fitness journey
                        </span>
                        <span className={styles.seamlesslyIntegratedWith}>.</span>
                    </p>
                </div>
                {/* About Us Section Heading */}
                <b className={styles.aboutUs1}>
                    <p className={styles.wellnessInsightsHrv_H}>ABOUT US</p>
                </b>
            </div>
        </div>
    );
};

export default AboutSection;
