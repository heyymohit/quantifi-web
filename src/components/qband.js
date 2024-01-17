// QBandSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const QBandSection = () => {
    return (
        <div className={styles.aiImageQband} id="qBandSection">
            <div className={styles.qBandFeatures}>
                {/* Feature 1 */}
                <div className={styles.feature1}>
                    <b className={styles.autoTrackingOf}>Auto-Tracking of Workouts</b>
                    <b className={styles.introducingAutoTrackingEff}>
                        Introducing Auto-Tracking: Effortless Workout Monitoring. Smart
                        sensors precisely count reps and sets in real-time, providing
                        instant feedback and historical data analysis. Save time, stay
                        motivated, and make every workout count.
                    </b>
                </div>

                {/* Feature 2 */}
                <div className={styles.feature2}>
                    <b className={styles.realTimeExerciseRecognition}>
                        Real-Time Exercise Recognition
                    </b>
                    <b className={styles.discoverTheFuture}>
                        Discover the future of fitness with Real-Time Exercise Recognition.
                        Our technology automatically identifies your exercises, providing
                        live progress tracking. Elevate your workouts with efficiency,
                        precision, and motivation – no manual input required.
                    </b>
                </div>

                {/* Feature 3 */}
                <div className={styles.feature3}>
                    <b className={styles.velocityBasedTraining}>
                        Velocity-Based Training
                    </b>
                    <b className={styles.leaveTraditional1rmContainer}>
                        <p className={styles.wellnessInsightsHrv}>
                            Leave traditional 1RM behind Velocity-Based Training (VBT) is the
                            game-changer for powerlifting programming and strength athletes
                            fortified by advanced accelerometer technology. By acknowledging
                            user fatigue and real-time conditions, VBT dynamically adjusts
                            loads, ensuring personalized and efficient workouts. It's not just
                            a method; it's the future of precision training for strength
                            athletes, offering adaptability and optimization like never
                            before.
                        </p>
                    </b>
                </div>

                {/* Feature 4 */}
                <div className={styles.feature4}>
                    <b className={styles.wellnessInsightsHrvContainer}>
                        <p className={styles.wellnessInsightsHrv_H}>
                            Wellness Insights: HRV & Heart Rate Metrics
                        </p>
                    </b>
                    <b className={styles.optimizeYourWellBeingContainer}>
                        <p className={styles.wellnessInsightsHrv}>
                            Optimize your well-being with our technology measuring Heart Rate
                            Variability (HRV) and heart rate. HRV indicates stress
                            adaptability, while real-time heart rate data guides optimal
                            recovery and performance. Manage stress, tailor workouts, and
                            prioritize well-being with personalized insights. Elevate your
                            self-care journey, harnessing the power of data for a balanced and
                            resilient life.
                        </p>
                    </b>
                </div>

                {/* Feature 5 */}
                <div className={styles.feature5}>
                    <b className={styles.intensityAndVolume}>Intensity and Volume</b>
                    <b className={styles.monitorRealTimeIntensity}>
                        Monitor real-time intensity with a heart rate sensor, ensuring optimal
                        effort. The volume graph effortlessly tracks reps and sets,
                        providing a clear visual of progress. These insights empower smart
                        decisions, optimizing the fitness journey for efficiency and success.
                        Elevate workouts with data-driven clarity and precision.
                    </b>
                </div>

                {/* The Q Band Heading */}
                <b className={styles.theQBandContainer}>
                    <p className={styles.wellnessInsightsHrv_H}>The Q Band</p>
                    <p className={styles.wellnessInsightsHrv_H}>Features</p>
                </b>
            </div>
        </div>
    );
};

export default QBandSection;
