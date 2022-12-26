// import './Index.scss'
import indexStyles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { menuStore } from '@/store'
// todo: 根据菜单的项数动态均匀渲染
function Index() {
  // console.log(menuStore.menuList[0])
  // console.log(menuStore.menuList.filter((item) => {
  //   return item.route !== '/'
  // }))

  const navigate = useNavigate()

  const menuList = menuStore.menuList.filter((item) => {
    return item.route !== '/'
  }).map((item, index, arr) => (
    <>
      <div
        onClick={() => {
          item.route ? navigate(`/page${item.route}`) : document.location.href = 'https://github.com/void00013'
        }}
        className={indexStyles.icon}
        style={{transform: `translate(-50%, -50%) rotate(${360/arr.length * index}deg) translateY(170px)`}}
      >
        <img src={item.img} alt={item.text} />
        <span>{item.text}</span>
      </div>
    </>
  ))

  return (
    <div className={indexStyles.index}>
      <div className={indexStyles.title}>VOID的个人站</div>
      <div className={indexStyles.enter}>
        {/* 注意：从public文件夹导入的图片不需要使用require，如果从src/assets下导入图片需要这样写：<img src={require('@/assets/Blog.png')} alt="博客" /> */}
        {/* 这是因为public文件夹下的资源不会编译，会直接打包 */}
        <img src="/static/user/avatar.jpg" alt="头像" />
        { menuList }
      </div>
    </div>
  )
}

export default observer(Index)