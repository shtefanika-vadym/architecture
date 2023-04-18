import type { FC } from 'react'

export const Solution = () => {
  return (
    <div>
      <Post src='#' title='Test 1'>
        <button>Delete</button>
      </Post>
      <Post src='#' title='Test 2'>
        <p>Description</p>
      </Post>
    </div>
  )
}

interface IProps {
  src: string
  title: string
  children: JSX.Element
}

const Post: FC<IProps> = ({ src, title, children }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <img src={src} alt='#' />
      {children}
    </div>
  )
}
