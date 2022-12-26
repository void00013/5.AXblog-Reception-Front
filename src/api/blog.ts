import { myReq } from "@/utils/request";

const getBlogTypeList = () => {
  return myReq.get('/blog/typelist')
}

export { getBlogTypeList }
