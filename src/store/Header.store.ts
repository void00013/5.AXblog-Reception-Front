import { makeAutoObservable } from "mobx";

class HeaderStore {
  constructor() {
    makeAutoObservable(this)
  }

  title = '标题'

  setTitle(title: string) {
    this.title = title
  }
}

const headerStore = new HeaderStore()

export default headerStore
