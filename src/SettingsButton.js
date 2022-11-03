import ReactSlider from 'react-slider';
import './style/slider.css'
import SettingsContext from "./SettingsContext";
import {useContext} from "react";


function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return(
    <div style={{textAlign:'left'}}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={60}
      />
    </div>
  );
}

export default Settings;