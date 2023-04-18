import type { FC } from 'react'
import { Fragment } from 'react'

import Certification from 'components/certification/certification'
import Header from 'components/header/header'

interface IProps {
  title: string
  certification: string
}

const Home: FC<IProps> = ({ certification, title }) => {
  return (
    <Fragment>
      <Header />
      <h1>{title}</h1>
      <Certification content={certification} />
    </Fragment>
  )
}

export default Home
