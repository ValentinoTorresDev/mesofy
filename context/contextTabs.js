import React, { useState, useMemo, useContext, createContext } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [tab, setTab] = useState('todo')
  const [song, setSong] = useState('https://media.graphcms.com/3hGIT6IhQOOtVX7Dmdzf')

  const values = useMemo(() => (
    {
      tab,
      setTab,
      song,
      setSong
    }),
  [tab, song])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    console.error('Error context')
  }

  return context
}
