import { makeAutoObservable, runInAction } from 'mobx'
import { myReq } from '@/utils/request'

interface typeList {
  typeId: number,
  typeTitle: string,
  typeIco: string,
}

interface articleList {
  typeId: number,
  typeTitle: string,
  articleId: number,
  articleTitle: string,
  articleBriefly: string
}

class BlogStore {
  constructor() {
    makeAutoObservable(this)
  }

  // 类型列表
  typeList: typeList[] = []
  // 文章列表
  articleList: articleList[] = []

  // 注意：清除文章列表的方法(数据在mobx中会缓存，每个类型对应的文章列表不同，在刚进入文章列表页面时会渲染之前缓存的数据，为了避免这个情况需要在进入博客页面时清除一下缓存)
  // 博客类型列表是一次性请求的，数据不会改变，所以不需要清除类型列表的数据
  clearArticleList() {
    this.articleList = []
  }

  // 在类中直接写的方法本身就是挂载到原型上的
  // 从接口请求类型列表数据
  async getTypeList() {
    try {
      const { data: res } = await myReq.get('/typelist')
      // console.log(res)
      if(res.code !== 200) return console.log(res.msg)
      // mobx中只能在acrion中重新赋值,异步导致赋值操作被加载到队列中,在action外面了, runInAction 函数将赋值操作包裹在action内部.
      runInAction(() => {
        this.typeList = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  // 从接口请求文章列表
  async getArticleList(type: string) {
    try {
      const { data: res } = await myReq.get(`/articleList/${type}`)
      // console.log(res)
      if(res.code !== 200) return console.log(res.msg)
      runInAction(() => {
        this.articleList = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const blogStore = new BlogStore()

export { blogStore }
