import { FC, useContext, useEffect, useState } from "react";
import { Todos, TodosContext } from "../../App";
import { log } from "console";

const TodoFilter : FC =  () => {

    const todosFromContext = useContext (TodosContext)

    if (!todosFromContext) {
        return <h1>error on getting todos</h1>
    }
    const {todos, setTodos} = todosFromContext

    const showCompleated= () => {

        const allTodos = localStorage.getItem("McTodos")
        if (!allTodos)
            return 

        let parsedTodos: Todos[] = JSON.parse(allTodos)

        const filteredCompleatedTodos = parsedTodos.filter(todoElement => todoElement.done == true)
        
        setTodos(filteredCompleatedTodos)
    }

    const showUncompleated= () => {

        const allTodos = localStorage.getItem("McTodos")
        if (!allTodos)
            return

        let parsedTodos: Todos[] = JSON.parse(allTodos)

        const filteredUncompleatedTodos = parsedTodos.filter(todoElement => todoElement.done == false)

        setTodos(filteredUncompleatedTodos)
    }

    const showAll =() => {
        const allTodos = localStorage.getItem("McTodos")
        if (!allTodos)
            return

        let parsedTodos: Todos[] = JSON.parse(allTodos)

        setTodos(parsedTodos)
    }

    const clearCompleated = () => {

        const allTodos = localStorage.getItem("McTodos")
        if (!allTodos)
            return

        let parsedTodos: Todos[] = JSON.parse(allTodos)

        const filteredUncompleatedTodos = parsedTodos.filter(todoElement => todoElement.done == false)
        
        localStorage.setItem("McTodos", JSON.stringify(filteredUncompleatedTodos))
        showAll()
    }


    return (
        <div className="todoFilter">
            <div className="todoFilter_lefts">
                <p> 
                    {
                        todos.filter((todoElement: Todos) => todoElement.done == false).length
                    } lefts todos
                </p>

                <button onClick={() => clearCompleated()}>
                    Clear compleated
                </button>
            </div>

            <div className="todoFilter_filters">
                <button onClick={() => showAll()}>All</button>
                <button onClick={() => showUncompleated()}>Active</button>
                <button onClick={() => showCompleated() }>Compleated</button>
            </div>
        </div>
    )
}

export default TodoFilter    