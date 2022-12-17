import styles from './Article.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { headerStore, articleStore } from '@/store'

function Article() {
  const [ searchParams ] = useSearchParams()

  console.log(searchParams.get('id'));

  useEffect(() => {
    headerStore.setTitle('文章')
  }, [])

  useEffect(() => {
    articleStore.getArticleDetail(searchParams.get('id'))
  }, [searchParams])

  // todo:解决在切换文章时文章标题内容显示上一篇文章的BUG

  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{articleStore.articleDetail.articleTitle}</h1>
      <div className={styles.auth}>作者</div>
      <div className={styles.content}>
        {articleStore.articleDetail.articleText}
      </div>
    </div>
  )
}

export default observer(Article)
