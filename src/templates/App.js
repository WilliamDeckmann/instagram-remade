import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

function App() {
  
  // This is only af test theme, it will be updated later...
  const main = {
    backgroundColor: "lightblue",
  };

  return (
    <ThemeProvider theme={main}>
      <div className="App">
      "Navbar"
      <main className="Main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<Profile />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      </div>
    </ThemeProvider>
  );
}

export default App;