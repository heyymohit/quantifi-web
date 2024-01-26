// QBandSection.js
import React from "react";
import styles from "./desktop-1.module.css";

const QBandSection = () => {
    return (
        <div className={styles.aiImageQband} id="qBandSection">
            <div className={styles.qBandFeatures}>
                <div className={styles.feature1}>
                    <p className={styles.feature1Heading}>Auto-Tracking of Workouts</p>
                    <p className={styles.feature1Content}>
                        Introducing Auto-Tracking: Effortless Workout Monitoring. Smart
                        sensors precisely count reps and sets in real-time, providing
                        instant feedback and historical data analysis. Save time, stay
                        motivated, and make every workout count.
                    </p>
                </div>
                <div className={styles.feature2}>
                    <p className={styles.feature2Heading}>
                        Real-Time Exercise Recognition
                    </p>
                    <p className={styles.feature2Content}>
                        Discover the future of fitness with Real-Time Exercise Recognition.
                        Our technology automatically identifies your exercises, providing
                        live progress tracking. Elevate your workouts with efficiency,
                        precision, and motivation – no manual input required.
                    </p>
                </div>
                <div className={styles.feature3}>
                    <b className={styles.feature3Heading}>
                        Velocity-Based Training
                    </b>
                    <p className={styles.feature3Content}>
                        Leave traditional 1RM behind Velocity-Based Training (VBT) is the
                        game-changer for powerlifting programming and strength athletes
                        fortified by advanced accelerometer technology. By acknowledging
                        user fatigue and real-time conditions, VBT dynamically adjusts
                        loads, ensuring personalized and efficient workouts. It's not just
                        a method; it's the future of precision training for strength
                        athletes, offering adaptability and optimization like never
                        before.
                    </p>
                </div>
                <div className={styles.feature4}>
                    <p className={styles.feature4Heading}>
                        Wellness Insights: HRV & Heart Rate Metrics
                    </p>
                    <p className={styles.feature4Content}>
                        Optimize your well-being with our technology measuring Heart Rate
                        Variability (HRV) and heart rate. HRV indicates stress
                        adaptability, while real-time heart rate data guides optimal
                        recovery and performance. Manage stress, tailor workouts, and
                        prioritize well-being with personalized insights. Elevate your
                        self-care journey, harnessing the power of data for a balanced and
                        resilient life.
                    </p>
                </div>
                <div className={styles.feature5}>
                    <p className={styles.feature5Heading}>Intensity and Volume</p>
                    <p className={styles.feature5Content}>
                        Monitor real-time intensity with a heart rate sensor, ensuring optimal
                        effort. The volume graph effortlessly tracks reps and sets,
                        providing a clear visual of progress. These insights empower smart
                        decisions, optimizing the fitness journey for efficiency and success.
                        Elevate workouts with data-driven clarity and precision.
                    </p>
                </div>
                <b className={styles.theQBandContainer}>
                    <p >The Q Band</p>
                    <p >Features</p>
                </b>
            </div>
        </div>
    );
};

export default QBandSection;
