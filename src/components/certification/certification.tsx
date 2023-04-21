import type { FC } from 'react'

import Link from 'components/link/link'

interface IProps {
  content: string
}

const Certification: FC<IProps> = ({ content }) => {
  return (
    <div>
      {content} <Link to='/test' />
    </div>
  )
}

export default Certification
