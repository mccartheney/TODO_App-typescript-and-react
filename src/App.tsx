// import react stuff
import React, { createContext, useState } from 'react';
// import component to create todos
import TodoInputComponent from './components/todosInputComponent/TodoInputComponent';

// create a type for todos
export interface Todos {
  id : number,
  value : string
  done : boolean
}

// create a type for context (to hold todos state) 
interface TodoStateType {
  todos: Todos[] | null;  
  setTodos: React.Dispatch<React.SetStateAction<Todos[] | null>>;
}

// create context for todos, receive 2 types :
//  - null : to initialize empty
//  - TodoStateType : for hold todo State
export const TodosContext = createContext<TodoStateType | null>(null);

// app component
function App() {

  // todos states
  const [todos, setTodos] = useState<Todos[] | null>([]);

  // TODO: initialize localStorage using useEffect
  // TODO: - if empty create a empty array to save states
  // TODO: - if have something, get it and load on state 

  return (
    // create a provider for context and pass states
    <TodosContext.Provider value={{ todos, setTodos }}>
      <TodoInputComponent/>
    </TodosContext.Provider>
  );
}

export default App;