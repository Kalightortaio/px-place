import styles from '../styles/Matrix.module.css'
import Chunk from './Chunk'

export default function Matrix() {
    let chunks = [];
    for (let i=0; i<100; i++) {
        chunks.push(<Chunk key={i} />);
    }
    return <div className={styles.container}>
        {chunks}
    </div>
}