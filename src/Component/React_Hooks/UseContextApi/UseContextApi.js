import React, { createContext, useState } from "react";

export const GlobalApiContext = createContext();

const UseContextApi = (props) => {
    const [counter] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter + 1)
    //     }, 1000);
    // }, [counter])
    return (
        <GlobalApiContext.Provider value={{ apiCounter: counter }}>
            {props.children}
        </GlobalApiContext.Provider>
    );
};

export default UseContextApi;
