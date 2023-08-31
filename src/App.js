import './App.css';
import ParentProps from './Component/Props/Parents_Props';
import PortalData from './Component/Portal/PortalData';
import Model from './Component/Portal/Portal';
import { useState } from 'react';
import StateComponent from './Component/React_Hooks/UseStateComponent';
import UseEffectComponent from "./Component/React_Hooks/UseEffectComponent";
import UseContextApi from './Component/React_Hooks/UseContextApi/UseContextApi';
import ChildComponent from "./Component/React_Hooks/UseContextApi/ChildComponent"
function App() {
  const [showPortal, setShowPortal] = useState(false)
  const portalHandler = () => {
    setShowPortal(true)
  }
  return (
    <UseContextApi>
      <ParentProps />
      <StateComponent />
      <button onClick={portalHandler}>Portal</button>
      {showPortal && <Model> <PortalData /> </Model>}
      <UseEffectComponent />
      <ChildComponent />
    </UseContextApi>

  );
}

export default App;
