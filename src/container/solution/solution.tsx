import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'

export const TodoListContainer = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(target.value)
  }

  const handleAddTodo = (): void => {
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  return (
    <TodoListPresentation
      todos={todos}
      inputValue={inputValue}
      onAddTodo={handleAddTodo}
      onInputChange={handleInputChange}
    />
  )
}

interface IProps {
  todos: string[]
  inputValue: string
  onAddTodo: () => void
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const TodoListPresentation: FC<IProps> = ({ inputValue, onInputChange, onAddTodo, todos }) => {
  return (
    <div>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={onAddTodo}>Add</button>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
