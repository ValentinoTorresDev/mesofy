import React, { useState, useMemo, useContext, createContext } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false)
  const [tab, setTab] = useState('todo')
  const [song, setSong] = useState({
    id: 'cklmftwbkev6909746zu77irl',
    audio: 'https://media.graphcms.com/3hGIT6IhQOOtVX7Dmdzf',
    image: 'https://media.graphcms.com/xSpXvlmSQgSApgekiUGa',
    title: ' Te lo advertí',
    idAlbum: 'cklmfxmkwfadv0b68ej46zomu'
  })
  const [idPlaylist, setIdPlaylist] = useState('cklmfxmkwfadv0b68ej46zomu')
  const [loadingPlaylist, setLoadingPlaylist] = useState(true)
  const [playlist, setPlaylist] = useState('cklmfxmkwfadv0b68ej46zomu')
  const [positionPlaylist, setPositionPlaylist] = useState(0)

  const values = useMemo(() => (
    {
      playing,
      setPlaying,
      tab,
      setTab,
      song,
      setSong,
      idPlaylist,
      setIdPlaylist,
      playlist,
      setPlaylist,
      loadingPlaylist,
      setLoadingPlaylist,
      positionPlaylist,
      setPositionPlaylist
    }),
  [playing, tab, song, idPlaylist, playlist, loadingPlaylist, positionPlaylist])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    console.error('Error context')
  }

  return context
}
