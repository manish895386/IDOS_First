import React, { useState } from "react";
import AppRouter from "./Navigation/AppRouter";

export const ChangeColorContext = React.createContext();
function App() {
  const [changeBorder, setChangeBorder] = useState(false);
  const changeColor = function changeCol(val) {
    setChangeBorder(val);
  };
  return (
    <div className={changeBorder ? "App changeBorder" : "App"}>
      <ChangeColorContext.Provider value={changeColor}>
        <AppRouter setChangeBorder={setChangeBorder} />
      </ChangeColorContext.Provider>
    </div>
  );
}

export default App;
