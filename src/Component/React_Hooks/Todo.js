import React, { memo } from "react";

const Todo = (props) => {
    console.log(
        "its a Todo component function"
    )
    return (
        <div>
            <h1>{props.addTodo}</h1>
            <button onClick={props.addTodoHandler}>Todo</button>
        </div>
    )
}
export default memo(Todo);