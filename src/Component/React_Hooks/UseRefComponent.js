
import { useRef } from "react";

const UseRefComponent = (props) => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <form>
            <input type="text" ref={nameRef} />
            <input type="password" ref={passwordRef} />
            <button onClick={submitFormHandler}>submit</button>
        </form>
    )
}
export default UseRefComponent;