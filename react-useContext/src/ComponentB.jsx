import React, { useContext } from 'react'
import {MyContext} from './App.jsx'

function ComponentB() {
  const user = useContext(MyContext);
  return (
    <div>
        <h2>This is {user} from the App.jsx and I'm Component B</h2>
    </div>
  )
}

export default ComponentB