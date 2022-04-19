// import { useState } from "react";
import { Datepicker } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import './App.css'

function App() {
  // const [birthday, setBirthday] = useState(null);
  //   const onBirthdayChange = (ev) => {
  //       setBirthday(ev.value);
  //   }

  return (
    <div className="App">
      <h1>mobiscroll datapicker test</h1>
      <Datepicker 
        controls={['calendar', 'time']}
        selectMultiple={false}
        min="2022-04-18"
        max="2050-01-01"
        theme="ios"
        themeVariant="dark"
        // label="Travel date"
        touchUi={true}
        inputComponent="input"
        inputProps={{ 
          placeholder: 'Travel date...' 
        }} 
        // display="inline"
      />
    </div>
  )
}

export default App
