import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesContextValue = {
  likes: number
  addLike: () => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes((n) => n + 1)
  }

  return (
    <LikesContext value={{ likes, addLike }}>
      {children}
    </LikesContext>
  )
}

export function useLikes() {
  const context = useContext(LikesContext)

  if (!context) {
    throw new Error('useLikes must be used inside LikesProvider')
  }

  return context
}