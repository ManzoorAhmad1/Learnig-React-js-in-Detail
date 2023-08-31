import { useContext } from "react";
import { GlobalApiContext } from "./UseContextApi";
const ChildComponent = (props) => {
    const { apiCounter } = useContext(GlobalApiContext);
    return (
        <h1  >
            counter: {apiCounter}
        </h1>
    )
}
export default ChildComponent;