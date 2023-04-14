import type { FC } from 'react'

interface IProps {
  content: string
}

const Card: FC<IProps> = ({ content }) => {
  return <div>{content}</div>
}

export default Card
