// Importing styles from the corresponding CSS module
import styles from "./desktop-1.module.css";
import AboutSection from "./about"; // Import other components similarly
import FooterSection from "./footer";
import QBandSection from "./qband";
import InAppSection from "./inApp";
import HeroAndNavbarSection from "./heroAndNavbar";

// Desktop1 component
const Desktop1 = () => {
  return (
    <div className={styles.quantifi}>
      <HeroAndNavbarSection />
      <QBandSection />
      <InAppSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

// Exporting the Desktop1 component as default
export default Desktop1;
