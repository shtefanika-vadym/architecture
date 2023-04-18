import type { FC } from 'react'

interface IProps {
  message: string
}

type ComponentType = 'error' | 'success' | 'warning'

type Components = Record<ComponentType, FC<IProps>>

const components: Components = {
  error: ({ message }: IProps) => <div className='error'>{message}</div>,
  success: ({ message }: IProps) => <div className='success'>{message}</div>,
  warning: ({ message }: IProps) => <div className='warning'>{message}</div>,
}

const createComponent = (type: ComponentType) => components[type]

export const Solution = () => {
  return (
    <div>
      {createComponent('success')({ message: 'Success!' })}
      {createComponent('warning')({ message: 'Warning!' })}
      {createComponent('error')({ message: 'Error!' })}
    </div>
  )
}
