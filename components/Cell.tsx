import { useState } from 'react';
import styles from '../styles/Cell.module.css'

export default function Cell() {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(current => !current);
    };

    return (
        <div 
            className={styles.container} 
            onClick={handleClick} 
            style={{
                backgroundColor: isActive ? 'black' : '',
            }}>
        </div>
    );
}