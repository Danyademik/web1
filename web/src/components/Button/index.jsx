import styles from '../../styles/Button.module.scss'

export const Button = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}