import styles from './contactus.module.css'
import page_heading_bg from './../../assets/images/page-heading-bg.jpg';

function Contactus2() {
  return (
    <div>

        <div className={styles.container}>
                <div className={styles.title} style={{ backgroundImage: `url(${page_heading_bg})` }}>
                    <button className={styles.homediv}>HOME / CONTACT US</button>
                    <h1>CONTACT US</h1>
                </div>
        </div>

    </div>
  )
}

export default Contactus2
