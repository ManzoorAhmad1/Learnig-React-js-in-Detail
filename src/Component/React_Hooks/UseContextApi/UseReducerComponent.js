import { useReducer } from "react";

const UseReducerComponent = (props) => {
    const reducer = (state, action) => {
        if (action.type === "increment") {
            return { count: state.count + 1 }
        }
    }
    const initialState = { count: 0 }
    const [updatedValue, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{updatedValue.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    )
}
export default UseReducerComponent;


// import React, { useReducer } from "react";

// const initialState = {
//   items: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {
//         items: [...state.items, action.payload],
//       };
//     case "REMOVE_ITEM":
//       return {
//         items: state.items.filter((item) => item !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// const UseReducerListComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addItem = (item) => {
//     dispatch({ type: "ADD_ITEM", payload: item });
//   };

//   const removeItem = (item) => {
//     dispatch({ type: "REMOVE_ITEM", payload: item });
//   };

//   return (
//     <div>
//       <h1>Shopping List</h1>
//       <ul>
//         {state.items.map((item) => (
//           <li key={item}>
//             {item}{" "}
//             <button onClick={() => removeItem(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter item"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addItem(e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default UseReducerListComponent;
