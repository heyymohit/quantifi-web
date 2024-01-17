// InAppSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const InAppSection = () => {
    return (
        <div className={styles.aiImageInApp} id="inAppSection">
            <div className={styles.inAppFeatures}>
                {/* Feature 1.1 */}
                <div className={styles.feature11}>
                    <div className={styles.feature1Child} />
                    <b className={styles.specializedSocialClubs}>
                        Specialized Gym Clubs
                    </b>
                    <b className={styles.joinAndConnectContainer}>
                        <ul className={styles.joinAndConnectWithLikeMin}>
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

                {/* Feature 2.1 */}
                <div className={styles.feature21}>
                    <div className={styles.feature2Child} />
                    <b className={styles.muscleTrainingLibrary}>
                        Muscle Training Library
                    </b>
                    <b className={styles.featuringADiverse}>
                        Featuring a diverse range of science-backed exercises for every
                        muscle group. Clear technique demonstrations ensure proper form,
                        making your workouts effective and safe. Whether you're a beginner
                        or a seasoned enthusiast, customize your routine with confidence,
                        knowing each exercise is grounded in scientific principles.
                    </b>
                </div>

                {/* Feature 3.1 */}
                <div className={styles.feature31}>
                    <div className={styles.feature3Child} />
                    <b className={styles.everydayStreak}>Everyday Streak</b>
                    <b className={styles.transformConsistencyIntoContainer}>
                        <p className={styles.wellnessInsightsHrv}>
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

                {/* Feature 4.1 */}
                <div className={styles.feature41}>
                    <div className={styles.feature4Child} />
                    <b className={styles.blogarticleSection}>
                        <p className={styles.wellnessInsightsHrv_H}>Blog/Article section</p>
                    </b>
                    <b className={styles.discoverATroveContainer}>
                        <p className={styles.wellnessInsightsHrv}>
                            Discover a trove of insights in our Blog/Article section. From
                            expert advice and workout routines to nutritional guidance and
                            success stories, find everything you need to enhance your wellness
                            journey. Stay informed, inspired, and connected with our
                            community. Elevate your well-being—dive into our articles for a
                            healthier, happier you.
                        </p>
                    </b>
                </div>

                {/* In-App Features Heading */}
                <b className={styles.inAppFeaturesContainer}>
                    <p className={styles.wellnessInsightsHrv_H}>In app</p>
                    <p className={styles.wellnessInsightsHrv_H}>features</p>
                </b>
            </div>
        </div>
    );
};

export default InAppSection;
