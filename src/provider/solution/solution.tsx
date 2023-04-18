import { createContext, useContext, useMemo, useState } from 'react'

interface IProps {
  theme: string
}

const ThemeContext = createContext<IProps | null>(null)

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme] = useState<string>('dark')

  const value = useMemo(() => ({ theme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
