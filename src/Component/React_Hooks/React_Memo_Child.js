import React, { memo } from "react";
const ReactMemoChild = ({ count }) => {
    console.log("countHandler")
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default memo(ReactMemoChild);