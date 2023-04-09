import React from 'react';
import './App.css';
import ToggleBlock from "../containers/ToggleBlock";
import ReceivedBlock from "../containers/ReceivedBlock";
import ResetBlock from "../containers/ResetBlock";

function App() {
  return (
    <div className="App">
      <ToggleBlock/>
        <ReceivedBlock/>
        <ResetBlock/>
    </div>
  );
}

export default App;
