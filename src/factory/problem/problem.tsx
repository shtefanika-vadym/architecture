import type { FC } from 'react'

interface IProps {
  message: string
  type: 'success' | 'warning' | 'error'
}

const Message: FC<IProps> = ({ type, message }) => {
  return (
    <div>
      {type === 'success' ? <div className='default'>{message}Dynamic Content</div> : null}
      {type === 'warning' ? <div className='small'>{message}Dynamic Content</div> : null}
      {type === 'error' ? <div className='large'>{message}Dynamic Content</div> : null}
    </div>
  )
}

export const Problem = () => {
  return (
    <div>
      <Message type='success' message='Success!' />
      <Message type='warning' message='Warning!' />
      <Message type='error' message='Error!' />
    </div>
  )
}
