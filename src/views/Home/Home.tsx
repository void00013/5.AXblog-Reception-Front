// import './Index.scss'
import indexStyles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
  return (
    <div className={indexStyles.index}>
      <div className={indexStyles.title}>VOID的个人站</div>
      <div className={indexStyles.enter}>
        {/* 注意：从public文件夹导入的图片不需要使用require，如果从src/assets下导入图片需要这样写：<img src={require('@/assets/Blog.png')} alt="博客" /> */}
        {/* 这是因为public文件夹下的资源不会编译，会直接打包 */}
        <img src="/static/avatar.jpg" alt="头像" />
        <div className={indexStyles.icon} onClick={() => { navigate('/page/blog') }}>
          <img src="/static/Blog.png" alt="博客" />
          <span>博客</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { document.location.href = 'https://github.com/void00013' }}>
          <img src="/static/github.png" alt="Github" />
          <span>Github</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/page/works') }}>
          <img src="/static/作品.png" alt="作品" />
          <span>作品</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/page/work') }}>
          <img src="/static/工作.png" alt="工作" />
          <span>工作</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/page/resume') }}>
          <img src="/static/简历.png" alt="简历" />
          <span>简历</span>
        </div>
        <div className={indexStyles.icon} onClick={() => { navigate('/page/about') }}>
          <img src="/static/about.png" alt="关于" />
          <span>关于</span>
        </div>
      </div>
    </div>
  )
}