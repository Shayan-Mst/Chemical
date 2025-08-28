// src/context/UIContext.tsx
import { createContext, useContext, useState} from "react"
import type { ReactNode } from "react"

type UIContextType = {
  sidebarOpen: boolean
  toggleSidebar: () => void
  openSidebar: () => void
  closeSidebar: () => void
  // you can add more UI states here later (darkMode, modalOpen, etc.)
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <UIContext.Provider
      value={{ sidebarOpen, toggleSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error("useUI must be used within UIProvider")
  return ctx
}
