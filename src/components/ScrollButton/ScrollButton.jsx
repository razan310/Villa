import styles from "./ScrollButton.module.css";
import { RxPinTop } from "react-icons/rx"; // استخدام CSS Modules

const ScrollButton = () => {
  const scrollToNavbar = () => {
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={styles.scrollToNavbar} onClick={scrollToNavbar}>
     <RxPinTop />
    </button>
  );
};

export default ScrollButton;
