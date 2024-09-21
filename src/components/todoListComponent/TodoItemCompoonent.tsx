import { FC, FormEvent, useContext, useEffect, useRef, useState } from "react"
import { Todos, TodosContext } from "../../App"


const TodoItem: FC<Todos> = (props) => {

    // get values from
    const {value, id, done} = props


    // ref for input to edit todo value
    const todoInputRef = useRef <HTMLInputElement|null>(null)

    // state to use as value of input (necessary to logic)
    const [todoInputValue, setTodoInputValue] = useState <string> (value)

    // when page is loaded put input to readonly mode and check if todo is checked
    useEffect(() => {
        // on load all inputs on read only
        todoInputRef.current!.readOnly = true

        // if this todo is compleated set checkbox to checked
        if (done) checkBoxRef.current!.checked = true
    },[])

    // creating editing state to activate and desactivate readonly mode
    const [editing, setEditing] = useState <boolean> (false)
    if (editing) todoInputRef.current!.readOnly=false // in case is editing true, disable readonly mode

    // ref to checkbox input to check and uncheck todo
    const checkBoxRef = useRef <HTMLInputElement | null> (null)

    const todosFromContext = useContext(TodosContext)

    // Type Guard for null Context:
    // if context is null warn to prevent the app broke
    if (!todosFromContext) {
        return <h1>No todos props received from todoInput</h1>
    }

    // descontruture todos from context
    const { todos, setTodos } = todosFromContext;

    // function activate edit mode
    const activateEdition = () => {
        // enable editing
        setEditing(true)

        // focus on input to edit
        todoInputRef.current?.focus()
    }

    // TODO: on change is need change todos to 

    // function to change todo state
    const changeTodoState = () => {
        // initilize checked
        let checked : boolean;

        // if todo is checked, set checked true, if not set false
        if (checkBoxRef.current!.checked) checked = true 
        else checked = false
    
        const oldTodos = localStorage.getItem("McTodos")

        if (oldTodos) {
        
            // set a new todos (modify to check this todo)
            const newTodos = JSON.parse(oldTodos).map((todoItem : Todos) => {
                if (todoItem.id === id) {
                    // modify done of this state
                    const newTodoItem: Todos = {
                        id: id,
                        value: value,
                        done: checked
                    }
                    
                    // return the modified todo
                    return newTodoItem
                }
                
                // return the old todo
                return todoItem
            })
            // update localstorage
            localStorage.setItem("McTodos", JSON.stringify(newTodos))
        }

        


    }

    // funtion to edit todo value
    const editTodo = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()                              
        
        // disable edition and take out user focus
        todoInputRef.current!.readOnly = true 
        todoInputRef.current!.blur() 

        const oldTodos = localStorage.getItem("McTodos")

        if (oldTodos){

            const parsedTodos = JSON.parse(oldTodos)

            // set a new todos (modify to check this todo)
            const newTodos = parsedTodos.map((todoItem : Todos) => {
                // if it is that todo
                if (todoItem.id === id) {
                    // modify done of this state
                    const newTodoItem : Todos = {
                        id : id,
                        value: todoInputValue,
                        done: done
                    } 
                    // return the modified todo
                    return newTodoItem
                }
                // return the old todo
                return todoItem
            })
            
            // update localstorage
            localStorage.setItem("McTodos", JSON.stringify(newTodos))
        }
    }
    
    return (
        <form className="todoItem" id={String(id)} onSubmit={(event) => { editTodo (event)}}>
            <div className="todoItem_checkbox">
                <input type="checkbox" ref={checkBoxRef} onClick={() => changeTodoState()}/>
            </div>

            <input type="text" ref={todoInputRef} value={todoInputValue} onChange={(e) => setTodoInputValue(e.target.value)}/>

            <div onClick={() => activateEdition()}>
                <span>
                    edit
                </span>
            </div>

            <button type="submit" hidden ></button>
        </form>
    )
}

export default TodoItem