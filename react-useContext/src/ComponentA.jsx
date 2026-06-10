import React, { useContext } from 'react'
import {MyContext} from './App.jsx'

function ComponentA() {
    const user = useContext(MyContext);
  return (
    <div>
        <h2>This is {user} from the App.jsx and I'm Component A</h2>
    </div>
  )
}

export default ComponentA