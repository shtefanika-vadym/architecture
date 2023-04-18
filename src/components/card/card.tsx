import type { FC } from 'react'

import Button from 'components/atoms/button/button'

interface IProps {
  content: string
}

const Card: FC<IProps> = ({ content }) => {
  return (
    <div>
      {content}
      <Button />
    </div>
  )
}

export default Card
