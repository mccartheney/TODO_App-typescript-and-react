// import react stuff
import { FC, useContext } from "react";
// import context from App File
import { TodosContext } from "../../App";

// input component
const TodoInputComponent : FC = () => {
    // gert todo state from context
    const todosFromContext = useContext(TodosContext)

    // Type Guard for null Context:
    // if context is null warn to prevent the app broke
    if (!todosFromContext) {
        return <h1>No todos props received from todoInput</h1>
    }

    // descontruture todos from context
    const { todos, setTodos } = todosFromContext;
    console.log(todos, setTodos);
    
    // TODO: get input value with useRef
    // TODO: get all todos from localStorage and transgorm in json
    // TODO: add a new todo on json from localStorage, transform on string and send back to localStorage
    
    return(
        // TODO: create HTML for input area to create todos
        <>

        </>
    )
}

export default TodoInputComponent