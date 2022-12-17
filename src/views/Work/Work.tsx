import { observer } from 'mobx-react-lite'
import { headerStore } from '@/store'
import { useEffect } from 'react'

function Work() {
  useEffect(() => {
    headerStore.setTitle('工作')
  }, [])

  return (
    <div className="work">工作</div>
  )
}

export default observer(Work)