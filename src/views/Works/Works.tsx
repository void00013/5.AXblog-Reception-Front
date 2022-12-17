import { observer } from 'mobx-react-lite'
import { headerStore } from '@/store'
import { useEffect } from 'react'

function Works() {
  useEffect(() => {
    headerStore.setTitle('作品')
  }, [])

  return (
    <div className="works">
      作品
    </div>
  )
}

export default observer(Works)