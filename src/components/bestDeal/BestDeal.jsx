import { useState } from 'react';
import styles from './BestDeal.module.css';
import appartmentImage from './../../assets/images/deal-01.jpg';
import villaImage from './../../assets/images/villa.jpg';
import penthouseImage from './../../assets/images/penthouse.jpg';

const BestDeal = () => {
  // استخدام useState لإدارة المحتوى بناءً على الزر المضغوط
  const [property, setProperty] = useState({
    type: 'Appartment',
    image: appartmentImage,
    space: '185 m2',
    floor: '26th',
    rooms: '4',
    parking: 'Yes',
    payment: 'Bank',
    titleInfo:'Extra Info About property',
    extraInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. when you need free CSST template you can simply type templateMO in any search engine website. in addition, you can type templets portifile when you need free CSST template you can simply type templateMO in any search engine website. in addition, you can type templets portifile,templete one page layoutis,ect.'
  });
  const handleButtonClick = (type) => {
    if (type === 'Appartment') {
      setProperty({
        type: 'Appartment',
        image: appartmentImage,
        space: '185 m2',
        floor: '26th',
        rooms: '4',
        parking: 'Yes',
        payment: 'Bank',
        titleInfo:'Extra Info About property',
        extraInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. when you need free CSST template you can simply type templateMO in any search engine website. in addition, you can type templets portifile when you need free CSST template you can simply type templateMO in any search engine website. in addition, you can type templets portifile,templete one page layoutis,ect.'    
      });
    } else if (type === 'Villa House') {
      setProperty({
        type: 'Villa House',
        image: villaImage,
        space: '300 m2',
        floor: '2nd',
        rooms: '6',
        parking: 'Yes',
        payment: 'Cash',
        titleInfo:'Delail Info About Villa',
        extraInfo:'Lorem ipsum dolor sit amet,  Villa House consectetur adipiscing elit, do eiusmod tempor incididunt ut Villa House dolore magna aliqua quised ipsum suspendisse.Villa House dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore Villa House aliqua quised ipsum suspendisse. when you need free CSST template you can simply type Villa House in any search engine website. in addition, you can type templets portifile when you need free CSST template you can simply type Villa House in any search engine website. in addition, you can type templets portifile,templete one page layoutis,ect.'
        
      });
    } else if (type === 'Penthouse') {
      setProperty({
        type: 'Penthouse',
        image: penthouseImage,
        space: '250 m2',
        floor: '30th',
        rooms: '5',
        parking: 'Yes',
        payment: 'Mortgage',
        titleInfo:'Delail Info About Penthouse',
        extraInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Lorem ipsum dolor sit amet, Penthouse adipiscing elit, do eiusmod tempor Penthouse ut labore et dolore magna aliqua quised ipsum suspendisse. when you need free CSST template you can simply type Penthouse in any search engine website. in addition, you can type templets portifile when you need free CSST template you can simply type Penthouse in any search engine website. in addition, you can type templets portifile,templete one page layoutis,ect.'
        
      });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.deal}>| BEST DEAL</p>
      <div className={styles.header}>
        <h1 className={styles.title}>Find Your Best<br/> Deal Right Now!</h1>
        <div className={styles.buttons}>
          <button 
            className={`${styles.button} ${styles.appartment}`}
            onClick={() => handleButtonClick('Appartment')}
          >
            Appartment
          </button>
          <button 
            className={`${styles.button} ${styles.villa}`}
            onClick={() => handleButtonClick('Villa House')}
          >
            Villa House
          </button>
          <button 
            className={`${styles.button} ${styles.penthouse}`}
            onClick={() => handleButtonClick('Penthouse')}
          >
            Penthouse
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <p><span>Total Flat Space</span> {property.space}</p>
          <hr className={styles.linestyle}/>
          <p><span>Floor number</span> {property.floor}</p>
          <hr className={styles.linestyle}/>
          <p><span>Number of rooms</span> {property.rooms}</p>
          <hr className={styles.linestyle}/>
          <p><span>Parking Available</span> {property.parking}</p>
          <hr className={styles.linestyle}/>
          <p><span>Payment Process</span> {property.payment}</p>
        </div>
        <div className={styles.image}>
          <img src={property.image} alt={property.type} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.titleInfo}>{property.titleInfo}</h2>
          <p className={styles.extraInfo}>{property.extraInfo}</p>
          <button className={styles.visitButton}>Schedule a visit</button>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
