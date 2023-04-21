import type { FC } from 'react'

import Button from 'components/button/button'

interface IProps {
  content: string
}

const Card: FC<IProps> = ({ content }) => {
  return (
    <div>
      {content}
      <Button>Delete</Button>
    </div>
  )
}

export default Card
