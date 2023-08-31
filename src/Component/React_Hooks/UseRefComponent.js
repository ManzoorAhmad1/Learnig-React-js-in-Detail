
import { useEffect, useRef } from "react";

const UseRefComponent = (props) => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
        console.log("its worked")
    }, [count]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <>
            <h1>{count.current}</h1>
            <form>
                <input type="text" ref={nameRef} />
                <input type="password" ref={passwordRef} />
                <button onClick={submitFormHandler}>submit</button>
            </form>
        </>

    )
}
export default UseRefComponent;