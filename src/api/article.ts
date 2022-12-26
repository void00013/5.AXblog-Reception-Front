import { myReq } from "@/utils/request";

const getArticleList = (type: string) => {
  return myReq.get(`/articleList/${type}`)
}

const getArticleDetail = (id: string | null) => {
  return myReq.get(`/article/${id}`)
}

export { getArticleList, getArticleDetail }
