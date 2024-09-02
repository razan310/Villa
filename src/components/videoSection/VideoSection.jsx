
import styles from './VideoSection.module.css';
import videoThumbnail from './../../assets/images/video-frame.jpg'; 
import videoBackground from './../../assets/images/videoBackground.jpeg'; 
import Counter from './../Counter/Counter'
const VideoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero} style={{ backgroundImage: `url(${videoBackground})` }}>
        <h2>| VIDEO VIEW</h2>
        <h1>Get Closer View <br /> & Different<br/> Feeling</h1>
      </div>
      <div className={styles.videoWrapper}>
        <img src={videoThumbnail} alt="Thumbnail" className={styles.thumbnail} />
        <div className={styles.playButton}></div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.circle}></div>
          <h3><Counter endNumber={34} duration={2000} /></h3>
          <p>Buildings<br/> Finished Now</p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.circle}></div>
          <h3><Counter endNumber={12} duration={2000} /></h3>
          <p>Years<br/> Experience</p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.circle}></div>
          <h3><Counter endNumber={24} duration={2000} /></h3>
          <p>Awards<br/> Won 2023</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
