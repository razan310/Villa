import { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import image1 from './../../assets/images/banner-01.jpg';
import image2 from './../../assets/images/banner-02.jpg';
import image3 from './../../assets/images/banner-03.jpg';

const Slider = () => {
    const slides = [
        {
            image: image1,
            location: 'Toronto, Canada',
            text: 'HURRY!\nGET THE\nBEST VILLA\nFOR YOU'
        },
        {
            image: image2,
            location: 'Miami, USA',
            text: 'YOUR DREAM\nVILLA IS JUST\nA CLICK AWAY'
        },
        {
            image: image3,
            location: 'Toronto, Canada',
            text: 'YOUR DREAM\nVILLA IS JUST\nA CLICK AWAY'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // تغيير الشريحة كل 5 ثوانٍ

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={styles.slider}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentSlide ? styles.slide_active : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                    <span className={styles.location}>
                        {slide.location.split(/(USA|Canada)/).map((part, index) =>
                            part === "USA" || part === "Canada" ? (
                                <span key={index} className={styles.highlighted}>{part}</span>
                            ) : (
                                part
                        )
                        )}
                    </span>
                        <h1>
                            {slide.text.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                            ))}
                        </h1>
                    </div>
                </div>
            ))}
            
            <div className={styles.arrows}>
                <span className={`${styles.arrows_span} ${styles.arrows_span_left}`} onClick={prevSlide}>&#10094;</span>
                <span className={`${styles.arrows_span} ${styles.arrows_span_right}`} onClick={nextSlide}>&#10095;</span>
            </div>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.dot_active : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
