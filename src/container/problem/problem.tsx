import type { ChangeEvent } from 'react'
import { useState } from 'react'

export const TodoList = () => {
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
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(
          (todo: string, index: number): JSX.Element => (
            <li key={index}>{todo}</li>
          ),
        )}
      </ul>
    </div>
  )
}
