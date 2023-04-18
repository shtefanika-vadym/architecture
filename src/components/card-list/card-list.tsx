import type { FC } from 'react'

import Card from 'components/card/card'

interface IProps {
  list: string[]
}

export const CardList: FC<IProps> = ({ list }) => {
  return (
    <div>
      {list.map((content, index: number) => (
        <Card key={index} content={content} />
      ))}
    </div>
  )
}
