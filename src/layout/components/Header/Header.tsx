import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'

interface headerProps {
  title: string
}

export default function Header(props: headerProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <img src='/static/header/返回.png' alt="返回" onClick={ () => { navigate(-1) } }/>
      { props.title }
    </div>
  )
}