import React, { useState, useMemo, useContext, createContext } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [tab, setTab] = useState('todo')

  const values = useMemo(() => (
    {
      tab,
      setTab
    }),
  [tab])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    console.error('Error context')
  }

  return context
}
