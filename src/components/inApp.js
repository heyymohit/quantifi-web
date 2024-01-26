// InAppSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const InAppSection = () => {
    return (
        <div className={styles.aiImageInApp} id="inAppSection">
            <div className={styles.inAppFeatures}>
                <div className={styles.feature1_2}>
                    <div className={styles.feature1Card} />
                    <b className={styles.feature1_2Heading}>
                        Specialized Gym Clubs
                    </b>
                    <b className={styles.joinAndConnectContainer}>
                        <ul className={styles.clubs}>
                            <li className={styles.joinAndConnect}>
                                Join and connect with like-minded individuals sharing similar
                                fitness goals for collective growth.
                            </li>
                            <li className={styles.joinAndConnect}>
                                Create a platform for sharing insights, tips, and tricks within
                                the community.
                            </li>
                            <li>
                                Cultivate a dynamic support system where members uplift and
                                motivate each other.
                            </li>
                        </ul>
                    </b>
                </div>
                <div className={styles.feature2_1}>
                    <div className={styles.feature2Card} />
                    <b className={styles.feature2_2Heading}>
                        Muscle Training Library
                    </b>
                    <b className={styles.feature2_2Content}>
                        Featuring a diverse range of science-backed exercises for every
                        muscle group. Clear technique demonstrations ensure proper form,
                        making your workouts effective and safe. Whether you're a beginner
                        or a seasoned enthusiast, customize your routine with confidence,
                        knowing each exercise is grounded in scientific principles.
                    </b>
                </div>
                <div className={styles.feature3_1}>
                    <div className={styles.feature3Card} />
                    <b className={styles.feature3_2Heading}>Everyday Streak</b>
                    <b className={styles.feature3_2Content}>
                        <p>
                            Transform consistency into triumph with our Everyday Streak
                            feature. Whether it's fitness, learning, or mindfulness, this tool
                            keeps you accountable, turning daily actions into significant
                            victories. Visualize your progress, celebrate milestones, and
                            receive daily encouragement, making each day a step towards
                            lasting positive change. Elevate your journey with the power of
                            the Everyday Streak – where consistency becomes the key to your
                            ongoing success.
                        </p>
                    </b>
                </div>
                <div className={styles.feature4_2}>
                    <div className={styles.feature4Card} />
                    <b className={styles.feature4_2Heading}>Blog/Article section</b>
                    <b className={styles.feature4_2Content}>
                        <p>
                            Discover a trove of insights in our Blog/Article section. From
                            expert advice and workout routines to nutritional guidance and
                            success stories, find everything you need to enhance your wellness
                            journey. Stay informed, inspired, and connected with our
                            community. Elevate your well-being—dive into our articles for a
                            healthier, happier you.
                        </p>
                    </b>
                </div>
                <b className={styles.inAppFeaturesContainer}>
                    <p>In app</p>
                    <p>features</p>
                </b>
            </div>
        </div>
    );
};

export default InAppSection;
