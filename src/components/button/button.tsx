import type { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const Button: FC<IProps> = ({ children }) => {
  return <button>{children}</button>
}

export default Button
