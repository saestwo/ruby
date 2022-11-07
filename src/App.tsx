import { useState } from 'react'
import Avatar from './components/Avatar'
import ContextMenu from './components/ContextMenu'

function App() {
  return (
    <div className="bg-fair-500 text-fair-100 p-16 flex gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        altText="Colm Tuite"
        fallbackText="CT"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        altText="Pedro Duarte"
        fallbackText="PD"
      />

      <ContextMenu />
    </div>
  )
}

export default App
