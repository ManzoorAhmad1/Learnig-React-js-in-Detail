import { useCallback, useState } from "react"
import Todo from "./Todo"
const UseCallBackComponent = (props) => {
    const [count, setCount] = useState(0);
    const [addTodo, setAddTodo] = useState(0)
    const countHandler = () => {
        setCount(count + 1)
        console.log("counter")
    }
    const addTodoHandler = useCallback(() => {
        setAddTodo(addTodo + 1)
        console.log("todo")
    }, [addTodo])
    return (
        <div>
            <h1>{count}</h1>
            <Todo addTodo={addTodo} addTodoHandler={addTodoHandler} />
            <button onClick={countHandler}>Count_CallBack</button>
        </div>
    )
}
export default UseCallBackComponent;