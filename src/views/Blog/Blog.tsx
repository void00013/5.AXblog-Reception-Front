import styles from './Blog.module.scss'
import { headerStore, blogStore, articleStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Blog() {
  // console.log(params)
  // console.log('blog', blogStore)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    blogStore.clearArticleList()
    articleStore.clearArticleDetail()
    params.path ? blogStore.getArticleList(params.path) : blogStore.getTypeList()
    headerStore.setTitle(params.path ? `博客-${params.path}` : '博客')
  }, [params.path])

  const typeList = blogStore.typeList.map(
    item => (
      <div className={styles.type} key={item.typeId} onClick={ () => navigate(`/page/blog/${item.typeTitle}`) }>
        <div>
          <img src={item.typeIco} alt='类型图标' />
          <br />
          <span>{item.typeTitle}</span>
        </div>
      </div>
    )
  )

  const articleList = blogStore.articleList.map(
    item => (
      <div className={styles.articleItem} key={item.articleId} onClick={ () => navigate(`/page/article?id=${item.articleId}`) }>
        <div className={styles.articleTitle}>{item.articleTitle}</div>
        <div className={styles.articleBriefly}>{item.articleBriefly}</div>
      </div>
    )
  )

  return (
    <div className={styles.blog}>
      <div className={styles.content}>
        { params.path ? articleList : typeList }
      </div>
    </div>
  )
}

export default observer(Blog)