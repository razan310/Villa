import styles from './properties.module.css';
import page_heading_bg from './../../assets/images/page-heading-bg.jpg'
import HomeProperties from '../HomeProperties/HomeProperties';

const Properties = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero} style={{ backgroundImage: `url(${page_heading_bg})` }}>
                    <button className={styles.homediv}>HOME / PROPERTIES</button>
                    <h1>PROPERTIES</h1>
                </div>
            </div>
            <HomeProperties/>
        </>
    );
};

export default Properties;
