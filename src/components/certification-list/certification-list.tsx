import type { FC } from 'react'

import Certification from 'components/certification/certification'

interface IProps {
  list: string[]
}

export const CertificationList: FC<IProps> = ({ list }) => {
  return (
    <div>
      {list.map((content, index: number) => (
        <Certification key={index} content={content} />
      ))}
    </div>
  )
}
