import Menu from '@/layout/components/Menu/Menu'
import styles from './About.module.scss'
import Header from '@/layout/components/Header/Header'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { headerStore } from '@/store'

function About() {
  useEffect(() => {
    headerStore.setTitle('关于')
  }, [])
  return (
    <div className={styles.about}>
      {/* <Header title="关于" /> */}
      {/* <Menu /> */}
      <div className={styles.content}>
        一名大四学生，专业电子信息工程，目前在海尔旗下的一个公司实习，热爱技术，做过嵌入式，由于一些原因，大三开始转行前端，目前从事前端开发
      </div>
    </div>
  )
}

export default observer(About)