import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Featured.module.css'; 

const Accordion = ({ title, content, titleClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
                <h3 className={styles[titleClass]}>{title}</h3>
                <span>{isOpen ? '' : ''}</span>
            </div>
            {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
};

// Define PropTypes
Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    titleClass: PropTypes.string,
};

export default Accordion;
