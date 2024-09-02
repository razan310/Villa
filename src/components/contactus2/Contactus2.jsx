import styles from './contactus.module.css'
import page_heading_bg from './../../assets/images/page-heading-bg.jpg';
import phoneIcon from "./../../assets/images/phone-icon.png";
import emailIcon from "./../../assets/images/email-icon.png";
function Contactus2() {
  return (
    <div>

        <div className={styles.container}>
                <div className={styles.title} style={{ backgroundImage: `url(${page_heading_bg})` }}>
                    <button className={styles.homediv}>HOME / CONTACT US</button>
                    <h1>CONTACT US</h1>
                </div>
        </div>
        <div className={styles.div1}></div>
        <div className={styles.infoCon}>
            <div className={styles.getTouch}>
                <div className={styles.info}>
                    <h2>| CONTACT US</h2>
                    <h1>Get In Touch <br />We Our Agents</h1>
                    <p className={styles.parag}>when you really need to download free CSS templetes,please remember our website 
                        TEMPLEATEMO. Also ,tell your friends about ourwebsite.<br/>Thank you for visiting.
                        There is avrity of Bootstrap HTML CSS templetes on our website.<br/>if you need more 
                        information,please contact Us
                    </p>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoItem}>
                        <img src={phoneIcon} alt="Phone Icon" />
                        <div className={styles.infoDetales}>
                            <p>010-020-0340</p>
                            <h1>phone Number</h1>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img src={emailIcon} alt="Email Icon" />
                    <div className={styles.infoDetales}>
                            <p>info@villa.com</p>
                            <h1>Business Emaill</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <form className={styles.contactForm}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="Your Name..." />
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="Your E-mail..." />
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" placeholder="Subject..." />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Message"></textarea>
                    <button className={styles.button1} type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <div className={styles.mapContainer}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.3319827429596!2d-80.12284138450198!3d25.94203768358164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab23692c5a6d%3A0x2b13edc62cc50d24!2sSunny%20Isles%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2seg!4v1692240000000!5m2!1sen!2seg"
                style={{ border: 0, borderRadius: '8px', width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
            ></iframe>
        </div>
    </div>
  )
}

export default Contactus2
