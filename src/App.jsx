
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithHook } from './02-useEffect/FormWithHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
 import { Layout } from './05-useLayoutEffect/Layout'
import { HookMemo } from './06-memo/HookMemo'
import { HookCallback } from './07-useCallback/HookCallback'
import { Tarea } from './08-Tarea/Tarea'
import { Memorize } from './06-memo/Memorize'
import { SimpleForm } from './02-useEffect/SimpleForm'

import './09-reducer/intro-reducer'
import { TodoApp } from './09-reducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'
import './App.css'

function App() {

   return (
    <div className="App">
      <h1>Hooks App</h1>
      <MainApp/>
      <hr />
      <TodoApp/>
      <hr />
      <Tarea/>
      <hr />
      <HookCallback/>
      <hr />
      <HookMemo/>
      <hr />
      <Memorize/>
      <hr />
      <Layout/>
      <hr />
      <FocusScreen/>
      <hr />
      <MultipleCustomHook/>
      <hr />
      <CounterApp />
      <hr />

      <CounterWithCustomHook />
      <hr />
      <SimpleForm />
      <hr />
      <FormWithHook />
      
      
    </div>
  )
}

export default App
