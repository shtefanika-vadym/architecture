import type { FC } from 'react'

interface IProps {
  content: string
}

const Certification: FC<IProps> = ({ content }) => {
  return <div>{content}</div>
}

export default Certification
