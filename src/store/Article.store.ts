import { makeAutoObservable, runInAction } from "mobx";
import { myReq } from "@/utils/request";

interface articleDetail {
    typeId: number,
    articleId: number,
    articleTitle: string,
    articleBriefly: string,
    articleText: string
}

class ArticleStore {
  constructor() {
    makeAutoObservable(this)
  }

  // 存储文章详情
  articleDetail: articleDetail = {
    typeId: 1,
    articleId: 1,
    articleTitle: '',
    articleBriefly: '',
    articleText: ''
  }

  // 注意：清除文章详情的方法(数据在mobx中会缓存，每个文章对应的数据不同，在刚进入文章页面时会渲染之前缓存的数据，为了避免这个情况需要在进入博客页面时清除一下缓存)
  clearArticleDetail() {
    this.articleDetail = {
      typeId: 1,
      articleId: 1,
      articleTitle: '',
      articleBriefly: '',
      articleText: ''
    }
  }

  // 获取文章详情
  async getArticleDetail(id: string | null) {
    try {
      const { data: res } = await myReq.get(`/article/${id}`)
      // console.log(res)
      if(res.code !== 200) return console.log(res.msg)
      // mobx中只能在acrion中重新赋值,异步导致赋值操作被加载到队列中,在action外面了, runInAction 函数将赋值操作包裹在action内部.
      runInAction(() => {
        this.articleDetail = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const articleStore = new ArticleStore()

export { articleStore }
