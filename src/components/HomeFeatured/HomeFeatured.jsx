import styles from './HomeFeatured.module.css'; 
import Accordion from "../Accordion/Accordion"
import propertyImage from './../../assets/images/featured.jpg'; 
import propertyIcon from './../../assets/images/featured-icon.png';
import icon1 from './../../assets/images/info-icon-01.png'; 
import icon2 from './../../assets/images/info-icon-02.png'; 
import icon3 from './../../assets/images/info-icon-03.png'; 
import icon4 from './../../assets/images/info-icon-04.png'; 

const HomeFeatured = () => {
    return (
        <div className={styles.propertyCard}>
            <div className={styles.propertyImageContainer}>
                
                <img src={propertyImage} alt="Property" className={styles.propertyImage} />
                <div className={styles.propertyImageIconContainer}>
                    <img src={propertyIcon} alt="PropertyIcon" className={styles.propertyImageIcon} />
                </div>
            </div>

            <div className={styles.secendcol}>
                <div className={styles.propertyDetails}>
                    <span className={styles.featured}>| FEATURED</span>
                    <h1 className={styles.title}>Best<br/>Appartment<br/>& Sea View</h1>
                </div>
                <div className={styles.propertyDetailsDiv}>
                    <Accordion 
                        title="Best useful links? "
                        titleClass="titleRed"
                        content={
                            <>
                                <p className={styles.bestLinks}>
                                    Get <span className={styles.span_1}>the best villa</span> website template in HTML CSS and <span className={styles.span_2}>Bootstrap </span>for your business. TemplateMo provides you the <span className={styles.span_3}>best free CSS templates</span> in the world. Please tell your friends about it.
                                </p>
                            </>
                        }
                    />
                    <Accordion
                        title="How does this work?"
                        titleClass="titleRed"
                        content="This is a brief description of how the application or service works."
                    />
                    <Accordion
                        title="Why is Villa Agency the best?"
                        titleClass="titleRed"
                        content="Villa Agency stands out due to its exceptional service, competitive pricing, and a wide range of properties to choose from."
                    />
                </div>
            </div>

            <div className={styles.propertyIcons}>
                <div className={styles.iconCard}>
                    <img src={icon1} alt="Icon 1" className={styles.iconImage} />
                    <p>250 m2<br/><span>Total Flat Space</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon2} alt="Icon 2" className={styles.iconImage} />
                    <p>Contract<br/><span>Contract Ready</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon3} alt="Icon 3" className={styles.iconImage} />
                    <p>Payment<br/><span>Payment <br/>Process</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon4} alt="Icon 4" className={styles.iconImage} />
                    <p>Safety<br/><span>24/7 Under <br/>Control</span></p>
                    
                </div>
            </div>
        </div>
    );
}

export default HomeFeatured;
