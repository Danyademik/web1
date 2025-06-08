import styles from '../../styles/Counter.module.scss'

export const Counter = ({ value }) => {
  return (
    <div className={styles.counter}>
      <h2>Credits: {value}</h2>
    </div>
  )
}