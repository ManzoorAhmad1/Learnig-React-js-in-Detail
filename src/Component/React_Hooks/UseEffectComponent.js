import { useEffect, useState } from "react";

const UseEffectComponent = (props) => {
    const [count, setCount] = useState(0)
    // Remember that useEffect is a powerful tool for handling side effects, data fetching, and other asynchronous operations in functional components. Understanding its dependency array and timing helps in managing component behavior effectively.\\


    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1)
            console.log("its worked in useEffect hook")
        }, 1000);
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            <h1>counter: {count}</h1>
        </div>
    )
}
export default UseEffectComponent;