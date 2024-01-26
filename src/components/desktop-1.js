import styles from "./desktop-1.module.css";
import AboutSection from "./about";
import FooterSection from "./footer";
import QBandSection from "./qband";
import InAppSection from "./inApp";
import HeroAndNavbarSection from "./heroAndNavbar";

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

export default Desktop1;
