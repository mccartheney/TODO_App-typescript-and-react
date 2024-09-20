import { FC, useContext } from "react"
import { Todos, TodosContext } from "../../App"
import TodoItem from "./TodoItemCompoonent"

const TodoList: FC= () => {
    const todosFromContext = useContext (TodosContext)

    if (!todosFromContext) {
        return <h1>Error on todos</h1>
    }

    const {todos, setTodos} = todosFromContext

    return (
        <div className="todos">
            {
                todos.map(todoItem => {
                    
                    return(
                        <div key={todoItem.id}>
                            <TodoItem value={todoItem.value} id={todoItem.id} done={todoItem.done}/>
                        </div>
                    ) 

                })
            }
        </div>
    )
}

export default TodoList