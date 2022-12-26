import styles from './Blog.module.scss'
import { headerStore, blogStore, articleStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TypeList from '@/components/TypeList/TypeList'

function Blog() {
  // console.log(params)
  // console.log('blog', blogStore)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    blogStore.clearArticleList()
    articleStore.clearArticleDetail()
    params.path ? blogStore.initArticleList(params.path) : blogStore.initBlogTypeList()
    headerStore.setTitle(params.path ? `博客-${params.path}` : '博客')
  }, [params.path])

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
      { params.path ? <div className={styles.articleList}>{ articleList }</div> : <TypeList page='blog' typeList={blogStore.typeList} /> }
    </div>
  )
}

export default observer(Blog)