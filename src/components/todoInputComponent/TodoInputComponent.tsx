// import react stuff
import React, { FC, useContext, useRef } from "react";
// import context from App File
import { Todos, TodosContext } from "../../App";

// input component
const TodoInputComponent : FC = () => {
    // gert todo state from context
    const todosFromContext = useContext(TodosContext)

    // create ref to get input value
    const todoInput = useRef <HTMLInputElement | null > (null)

    // if context is null warn to prevent the app broke
    if (!todosFromContext) {
        return <h1>No todos props received from todoInput</h1>
    }
    
    // descontruture todos from context
    const { todos, setTodos } = todosFromContext;
    
    const createTodo = (event : React.FormEvent<HTMLFormElement>) => {
        // prevent when form submit reload page
        event.preventDefault()

        // get todo input value
        const todoValue : string = todoInput.current!.value;
        
        // get a random id
        const randomID: number = Date.now() 

        // set state for todo item
        const done : boolean = false

        // create a todo object
        const todoItem : Todos = {
            id : randomID,
            value : todoValue,
            done : done
        }

        // add todo on the list of todos
        setTodos (oldTodos => [...oldTodos , todoItem])

        const newTodos = [...todos, todoItem]
        
        // update data on localStorage
        localStorage.setItem("McTodos", JSON.stringify(newTodos))
    }

    return(
        <div className="todoInput">
            <div className="todoInput_isDone">
                <div/>
            </div>
            
            <div className="todoInput_input">
                <form onSubmit={(event) => createTodo(event)}>
                    <input type="submit" hidden />
                    <input type="text" placeholder="Create a new Todo" ref={todoInput} />
                </form>
            </div>
        </div>
    )
}

export default TodoInputComponent