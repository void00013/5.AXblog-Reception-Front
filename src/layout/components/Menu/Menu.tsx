import styles from './Menu.module.scss'
import { useNavigate } from 'react-router-dom'
// 导入连接mobx和react的中间件
import { observer } from 'mobx-react-lite'
import { menuStore } from '@/store'

function Menu() {
  const navigate = useNavigate()
  const menu = menuStore.menuList.map(
    item => {
      return (
        <div className={styles.ico} key={item.text} onClick={
          () => {
            item.route && item.route === '/' ? navigate(item.route) :navigate('/page' + item.route)
            if(item.link) {
              document.location.href = item.link
            }
          }
        }>
          {/* 注意：动态绑定的图片资源必须放在public文件夹中，public文件夹的资源不会编译，src/assets文件夹下的图片会编译导致找不到资源 */}
          {/* src/assets下的图片要这样引入：<img src={require('@/assets/首页.png')} alt="首页" /> */}
          {/* public下的文件直接引入即可 */}
          <img src={item.img} alt={item.text} />
          { item.text }
        </div>
      )
    }
  )
  return (
    <div className={styles.menu}>
      { menu }
    </div>
  )
}

export default observer(Menu)