import { TodoCardList } from 'components/todo-card-list/todo-card-list'
import { TODO_CONSTANTS } from 'constants/todo-constants'

export const TodoPage = () => {
  return (
    <div>
      <h2>{TODO_CONSTANTS.PAGE_TITLE}</h2>
      <TodoCardList todoList={[]} />
    </div>
  )
}
