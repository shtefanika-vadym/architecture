import type { FC } from 'react'

interface IProps {
  to: string
}

const Link: FC<IProps> = ({ to }) => {
  return <a href={to}>Navigate</a>
}

export default Link
