// import react stuff
import { FC, useContext, useRef } from "react";
// import context from App File
import { TodosContext } from "../../App";

// input component
const TodoInputComponent : FC = () => {
    // gert todo state from context
    const todosFromContext = useContext(TodosContext)

    // create ref to get input value
    const todoInput = useRef <HTMLInputElement | null > (null)

    // Type Guard for null Context:
    // if context is null warn to prevent the app broke
    if (!todosFromContext) {
        return <h1>No todos props received from todoInput</h1>
    }
    
    // descontruture todos from context
    const { todos, setTodos } = todosFromContext;

    return(
        <div className="todoInput">
            <div className="todoInput_isDone">
                <div/>
            </div>
            
            <div className="todoInput_input">
                <input type="text" placeholder="Create a new Todo" ref={todoInput} />
            </div>
        </div>
    )
}

export default TodoInputComponent