import styles from './TypeList.module.scss'
import { useNavigate } from 'react-router-dom'

interface typeList {
  typeId: number,
  typeTitle: string,
  typeIco: string,
}

interface typeListProps {
  page: string
  typeList: typeList[]
}

function TypeList(props: typeListProps) {
  const navigate = useNavigate()

  const typeList = props.typeList.map(
    item => (
      <div className={styles.type} key={item.typeId} onClick={ () => navigate(`/page/${props.page}/${item.typeTitle}`) }>
        <div>
          <img src={item.typeIco} alt='类型图标' />
          <br />
          <span>{item.typeTitle}</span>
        </div>
      </div>
    )
  )

  return (
    <>
      <div className={styles.typeList}>
        { typeList }
      </div>
    </>
  )
}

export default TypeList
