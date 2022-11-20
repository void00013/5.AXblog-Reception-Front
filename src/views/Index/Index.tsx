// import './Index.scss'
import indexStyles from './Index.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
  return (
    <div className={indexStyles.index}>
      <div className={indexStyles.title}>VOID的个人站</div>
      <div className={indexStyles.enter}>
        <img src={require('@/assets/avatar.jpg')} alt="头像" />
        <div className={indexStyles.icon} onClick={() => { navigate('/blog') }}>
          <img src={require('@/assets/Blog.png')} alt="博客" />
          <span>博客</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { document.location.href = 'https://github.com/void00013' }}>
          <img src={require('@/assets/github.png')} alt="Github" />
          <span>Github</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/works') }}>
          <img src={require('@/assets/作品.png')} alt="作品" />
          <span>作品</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/work') }}>
          <img src={require('@/assets/工作.png')} alt="工作" />
          <span>工作</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/resume') }}>
          <img src={require('@/assets/简历.png')} alt="简历" />
          <span>简历</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/about') }}>
          <img src={require('@/assets/about.png')} alt="关于" />
          <span>关于</span>
        </div>
      </div>
    </div>
  )
}