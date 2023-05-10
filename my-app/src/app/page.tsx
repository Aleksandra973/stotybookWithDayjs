import styles from './page.module.css';
import { Button } from 'library';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Hello world
        <Button label='library button'/>
      </div>
    </main>
  )
}
