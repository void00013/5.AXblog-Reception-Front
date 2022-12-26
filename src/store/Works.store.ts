import { makeAutoObservable, runInAction } from 'mobx'
import { getWorksTypeList, getWorksList } from '@/api'

interface worksTypeList {
  typeId: number,
  typeTitle: string,
  typeIco: string
}

interface displayItem {
  num: number,
  img: string,
  tip: string
}

interface worksList {
  id: number,
  cover: string,
  title: string,
  description: string,
  displayList: displayItem[]
}

class WorksStore {
  constructor() {
    makeAutoObservable(this)
  }

  worksTypeList: worksTypeList[] = []
  worksList: worksList[] = []
  displayTitle: string = ''
  displayList: displayItem[] = []
  displayItem: displayItem = {
    num: 0,
    img: '',
    tip: ''
  }

  clearWorksList() {
    this.worksList = []
  }

  updateDisplayTitle(title: string) {
    this.displayTitle = title
  }

  updateDisplayList(list: displayItem[]) {
    this.displayList = list
  }

  updateDisplayItem(displayItem: displayItem) {
    this.displayItem = displayItem
  }

  async initWorksTypeList() {
    try {
      const { data: res } = await getWorksTypeList()
      // console.log('worksTypeList', res)
      if(res.code !== 200) {
        return console.log(res.msg)
      }
      runInAction(() => {
        this.worksTypeList = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async initWorksList(type: string) {
    try {
      const { data: res } = await getWorksList(type)
      console.log('worksList', res)
      if(res.code !== 200)
        return console.log(res.msg)
      // console.log(res.msg)
      runInAction(() => {
        this.worksList = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const worksStore = new WorksStore()

export default worksStore
