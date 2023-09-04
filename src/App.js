import './App.css';
import ParentProps from './Component/Props/Parents_Props';
import PortalData from './Component/Portal/PortalData';
import Model from './Component/Portal/Portal';
import { Fragment, useState } from 'react';
import StateComponent from './Component/React_Hooks/UseStateComponent';
import UseRefComponent from './Component/React_Hooks/UseRefComponent';
import UseReducerComponent from './Component/React_Hooks/UseContextApi/UseReducerComponent';
import ReactMemo from './Component/React_Hooks/React_Memo';
// import UseEffectComponent from "./Component/React_Hooks/UseEffectComponent";
// import UseContextApi from './Component/React_Hooks/UseContextApi/UseContextApi';
// import ChildComponent from "./Component/React_Hooks/UseContextApi/ChildComponent"
import UseCallBackComponent from "./Component/React_Hooks/UseCallBackComponent"
function App() {
  const [showPortal, setShowPortal] = useState(false)
  const portalHandler = () => {
    setShowPortal(true)
  }
  return (

    <Fragment>
      <UseCallBackComponent />
      <UseReducerComponent />
      <ParentProps />
      <StateComponent />
      <button onClick={portalHandler}>Portal</button>
      {showPortal && <Model> <PortalData /> </Model>}
      <UseRefComponent />
      <ReactMemo />
      {/* useContext Child componet where ContextApi use /////////// */}
      {/* <UseContextApi>
        <UseEffectComponent />
        <ChildComponent />
      </UseContextApi> */}
    </Fragment>
  );
}

export default App;
