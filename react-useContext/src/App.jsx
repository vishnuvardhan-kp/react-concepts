import { createContext } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './App.css'
export const MyContext = createContext();
const user = "Vichu";

function App() {

  return (
      <MyContext.Provider value = {user}>
        <ComponentA/>
        <ComponentB/>
      </MyContext.Provider>
  )
}

export default App
