import styles from './Works.module.scss'
import { observer } from 'mobx-react-lite'
import { headerStore, worksStore } from '@/store'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TypeList from '@/components/TypeList/TypeList'

function Works() {
  const params = useParams()
  // console.log(params)

  let [show1, setShow1] = useState(false)
  let [show2, setShow2] = useState(false)

  useEffect(() => {
    headerStore.setTitle('作品')
    worksStore.clearWorksList()
    !params.path ? worksStore.initWorksTypeList() : worksStore.initWorksList(params.path)
  }, [params.path])

  const worksList = worksStore.worksList.map(item => (
    <div className={styles.worksBox} key={item.id}>
      <div className={styles.worksItem} onClick={
        () => {
          worksStore.updateDisplayTitle(item.title)
          worksStore.updateDisplayList(item.displayList)
          setShow1(true)
          // console.log(worksStore.displayList)
        }
      }>
        <img src={item.cover} alt="封面" />
        {item.title}
      </div>
    </div>
  ))

  const displayList = worksStore.displayList.map(item => (
    <div className={styles.displayBox} key={item.num}>
      <div className={styles.displayItem} onClick={(e) => {
        // 阻止冒泡，以防止触发父级的点击事件使父级隐藏
        e.stopPropagation()
        worksStore.updateDisplayItem(item)
        setShow2(true)
      }}>
        <img src={item.img} alt={item.tip} />
        {item.tip}
      </div>
    </div>
  ))

  return (
    <>
      <div className={ styles.works }>
        {
          params.path
            ?<div className={styles.worksList}>{ worksList }</div>
            :<TypeList page='works' typeList={worksStore.worksTypeList}/>
        }
      </div>
      <div
        className={styles.mask1}
        style={show1 ? {display: 'block'} : {display: 'none'}}
        onClick={() => {setShow1(false)}}
      >
        <div className={styles.displayTitle}>
          { worksStore.displayTitle }
        </div>
        { displayList }
      </div>
      <div
        className={styles.mask2}
        style={show2 ? {display: 'block'} : {display: 'none'}}
        onClick={() => {setShow2(false)}}
      >
        <div className={styles.content}>
          <img
            src="/static/works/left.svg"
            alt="左"
            onClick={
              e => {
                e.stopPropagation()
                worksStore.displayItem.num >= 2 && worksStore.updateDisplayItem(worksStore.displayList[worksStore.displayItem.num - 2])
              }
            }
          />
          <div className={styles.imageText}>
            <img src={ worksStore.displayItem.img } alt="img" />
            { worksStore.displayItem.tip }
          </div>
          <img
            src="/static/works/right.svg"
            alt="右"
            onClick={
              e => {
                e.stopPropagation()
                worksStore.displayItem.num < worksStore.displayList.length && worksStore.updateDisplayItem(worksStore.displayList[worksStore.displayItem.num])
              }
            }
          />
        </div>
      </div>
    </>
  )
}

export default observer(Works)