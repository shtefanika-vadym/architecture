import type { FC } from 'react'
import { useState } from 'react'

import { THEME_CONSTANTS } from '../theme.type'
import type { APP_THEME } from '../theme.type'

interface IProps {
  theme: APP_THEME
}

export const Parent = () => {
  const [theme] = useState<APP_THEME>(THEME_CONSTANTS.DARK)
  return (
    <div>
      <Child1 theme={theme} />
    </div>
  )
}

const Child1: FC<IProps> = ({ theme }) => {
  return (
    <div>
      <Child2 theme={theme} />
    </div>
  )
}

const Child2: FC<IProps> = ({ theme }) => {
  return (
    <div>
      <Child3 theme={theme} />
    </div>
  )
}

const Child3: FC<IProps> = ({ theme }) => {
  return <div>{theme}</div>
}
