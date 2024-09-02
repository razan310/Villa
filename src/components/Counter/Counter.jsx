import { useState, useEffect } from 'react';

const Counter = ({ endNumber, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endNumber / (duration / 10);

        const timer = setInterval(() => {
            start += increment;
            if (start >= endNumber) {
                clearInterval(timer);
                start = endNumber;
            }
            setCount(Math.floor(start));
        }, 10);

        return () => clearInterval(timer);
    }, [endNumber, duration]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;
