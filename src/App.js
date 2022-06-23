import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./comsponents/AppContext";
import Form from "./comsponents/Form";
import Listing from "./comsponents/Listing";
import NavBar from "./comsponents/NavBar";

function App() {
  const [rowdata, setRowData] = useState({});
  const [loading, setLoading] = useState(false);
  const appData = {
    rowdata,
    setRowData,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={appData}>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<Listing />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
