import { myReq } from "@/utils/request";

const getWorksTypeList = () => {
  return myReq.get('/works/typelist')
}

const getWorksList = (type: string) => {
  return myReq.get(`/works/${type}`)
}

export { getWorksTypeList, getWorksList }
