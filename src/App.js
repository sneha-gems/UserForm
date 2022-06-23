import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./comsponents/AppContext";
import Form from "./comsponents/Form";
import Listing from "./comsponents/Listing";

function App() {
  var [rowdata, setRowData] = useState({});
  const appData = {
    rowdata,
    setRowData,
  };

  return (
    <AppContext.Provider value={appData}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<Listing />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
