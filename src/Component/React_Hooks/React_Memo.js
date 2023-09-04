import React from "react";
import ReactMemoChild from "./React_Memo_Child";
import { useState, memo } from "react";
const ReactMemo = (props) => {
    const [count] = useState("hello")
    const [todo, setTodo] = useState("")

    const todoHandler = () => {
        setTodo(todo + 1);
        console.log("todoHandler")
    }
    return (
        <div>
            <ReactMemoChild count={count} />
            {<h1>{todo}</h1>}
            <button onClick={todoHandler}>todo</button>
        </div>
    )
}
export default (ReactMemo);