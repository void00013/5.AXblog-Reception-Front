import { observer } from 'mobx-react-lite'
import { headerStore } from '@/store'
import { useEffect } from 'react'

function Resume() {
  useEffect(() => {
    headerStore.setTitle('简历')
  }, [])

  return (
    <div className="resume">
      简历
    </div>
  )
}

export default observer(Resume)