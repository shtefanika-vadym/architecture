import type { FC } from 'react'

import type { ITodo } from 'interfaces/todo.interface'

export const TodoCard: FC<ITodo> = ({ todo }) => {
  return <div>{todo}</div>
}
