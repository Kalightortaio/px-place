import styles from '../styles/Chunk.module.css'
import Cell from './Cell'

export default function Chunk() {
    let cells = [];
    for (let i=0; i<100; i++) {
        cells.push(<Cell key={i} />);
    }
    return <div className={styles.container}>
        {cells}
    </div>
}