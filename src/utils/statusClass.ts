import styles from '../components/CardsList/CardsList.module.css'

export const getStatusClass = (status: string): string => {
  switch (status) {
    case 'Alive':
      return styles.green
    case 'Dead':
      return styles.red
    default:
      return styles.grey
  }
}
