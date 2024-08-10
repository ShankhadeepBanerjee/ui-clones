
import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createLazyFileRoute('/youtube')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to YouTube!</h3>
    </div>
  )
}
