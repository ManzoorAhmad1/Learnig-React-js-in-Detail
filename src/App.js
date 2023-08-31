import './App.css';
import { Fragment } from 'react';
import ParentProps from './Component/Props/Parents_Props';
import PortalData from './Component/Portal/PortalData';
import Model from './Component/Portal/Portal';
import { useState } from 'react';

function App() {
  const [showPortal, setShowPortal] = useState(false)
  const portalHandler = () => {
    setShowPortal(true)
  }
  return (
    <Fragment>
      <ParentProps />
      <button onClick={portalHandler}>Portal</button>
      {showPortal && <Model> <PortalData /> </Model>}
    </Fragment>
  );
}

export default App;
