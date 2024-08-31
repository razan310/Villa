
import styles from './Featured.module.css'; 
import Accordion from './Accordion'
import propertyImage from './../../assets/images/property-01.jpg'; 
import icon1 from './../../assets/images/info-icon-01.png'; 
import icon2 from './../../assets/images/info-icon-02.png'; 
import icon3 from './../../assets/images/info-icon-03.png'; 
import icon4 from './../../assets/images/info-icon-04.png'; 
import page_heading_bg from './../../assets/images/page-heading-bg.jpg';


const Featured = () => {
    return (
        <>
          <div className={styles.container}>
                <div className={styles.title} style={{ backgroundImage: `url(${page_heading_bg})` }}>
                    <button className={styles.homediv}>HOME / SINGLE PROPERTY</button>
                    <h1>SINGLEPROPERTY</h1>
                </div>
        </div>
        <div className={styles.propertyCard}>
            <div className={styles.propertyImageContainer}>
                <img src={propertyImage} alt="Property" className={styles.propertyImage} />
                <div className={styles.pargra}>
            <button>Apartment</button>
            <h1>24 New Street miami,OR 97219</h1>
            <hr className={styles.hrstyle}/>
            <p className={styles.bestLinks}>
                            Get <span className={styles.span_1}>the best villa</span> 
                            website template in HTML CSS and Bootstrap for your business.
                            TemplateMo provides you the ,tell your friends about ourwebsite.
                            <span className={styles.span_2}>best free CSS templates</span> 
                            in the world. Please tell your friends about it.
                            when you really need to download free CSS templetes,
                            please remember our website 
                            TEMPLEATEMO. Also ,tell your friends about ourwebsite.
                            <br/><br/>Thank you for visiting.
                            website template in HTML CSS and Bootstrap for your business.
                            TemplateMo provides you the ,tell your friends about ourwebsite.
                            There is avrity of Bootstrap HTML CSS templetes on our website.
                            if you need more information,please contact Us
                        </p>

        
        <div className={styles.propertyDetails}>
        <div className={styles.propertyDetailsDiv}>
            <Accordion 
                title="Best useful links? "
                titleClass="titleRed"
                content={
                    <>
                        <p className={styles.bestLinks}>
                            Get <span className={styles.span_1}>the best villa</span> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span className={styles.span_3}>best free CSS templates</span> in the world. Please tell your friends about it.
                        </p>
                    </>
                }
            />
            <Accordion
                title="How does this work?"
                content="Lorem "
            />
            <Accordion
                title="Why is Villa Agency the best?"
                content="Lorem "
            />
        </div>
        </div>
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
        
    </>
    );
}

export default Featured;
