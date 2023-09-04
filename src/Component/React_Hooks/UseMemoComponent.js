
import React, { useState } from "react";

const UseMemoComponent = (props) => {
    const [todo, setTodo] = useState(0)
    const [count, setCount] = useState(0)
    const todoHandler = () => {
        setTodo(todo + 1)
        console.log("todo")
    }
    const countHandler = () => {
        setCount(count + 1)
        console.log("Count")

    }
    return (
        <div>
            {todo}
            {count}
            <button onClick={todoHandler}>Todo</button>
            <button onClick={countHandler}>Count</button>

        </div>
    )
}
export default UseMemoComponent;