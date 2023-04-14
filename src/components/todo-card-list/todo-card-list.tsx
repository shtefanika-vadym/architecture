import type { FC } from 'react'

import { TodoCard } from 'components/todo-card/todo-card'
import type { ITodo } from 'interfaces/todo.interface'

interface IProps {
  todoList: ITodo[]
}

export const TodoCardList: FC<IProps> = ({ todoList }) => {
  return (
    <div>
      {todoList.map(
        ({ todo }, index): JSX.Element => (
          <TodoCard key={index} todo={todo} />
        ),
      )}
    </div>
  )
}
