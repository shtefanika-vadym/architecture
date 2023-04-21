import type { FC } from 'react'

import type { ITodo } from 'interfaces/todo-interfaces'

export const TodoCard: FC<ITodo> = ({ todo }) => {
  return <div>{todo}</div>
}
