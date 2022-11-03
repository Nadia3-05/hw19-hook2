import './style/App.css';
import Timer from "./Timer";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(2);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        setWorkMinutes,
      }}>
        {showSettings ? <SettingsContext /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;