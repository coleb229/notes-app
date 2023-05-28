'use client'

import { useState, useClient } from 'react'

export default function Handoff() {
  const [handoff, setHandoff] = useState([])
  const [data, setData] = useState('')

  const submitData = async () => {
    const res = await fetch('/api/handoff', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const newHandoff = await res.json()
    console.log(newHandoff)
  }

  const fetchData = async () => {
    const res = await fetch('/api/handoff')
    const newHandoff = await res.json()
    setHandoff(newHandoff)
  }

  return (
    <div>
      <h1>Handoff Template</h1>
      <input
        type='text'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={submitData}>Submit</button>
      <button onClick={fetchData}>Fetch</button>
      {handoff.map((handoff) => (
        <div key={handoff.id}>
          <h2>{handoff.text}</h2>
        </div>
      ))}
    </div>
  )
}
