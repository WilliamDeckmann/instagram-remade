/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

// Templates
import NavbarMain from '../templates/NavbarMain';

// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";

import Saved from "../routes/saved";
import Tagged from "../routes/tagged";
import Posts from "../routes/posts";
import Invoice from "../routes/invoice";

function App() {

  // This is only af test theme, it will be updated later...
  const main = {
    backgroundColor: "lightblue",
  };

  // Style (resets)
  const styles = css`
    padding: 0;
    margin: 0;

    * {
      box-sizing: border-box;
    };

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
    };

    p {
      margin: 0;
    };

    a {
      text-decoration: none;
      color: black
    };

    address {
      font-style: normal;
    };

    button {
      padding: 0;
      border: none;
      background: white;
    };

    button:hover {
      cursor: pointer;
    };

    img, video {
      display: block;
    };

    figure, input {
      margin: 0;
    };

    input, textarea {
      padding: 0;
      border: none;
      outline: none;
    };

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    };
  `;

  return (
    <ThemeProvider theme={styles}>
      <div className="App" css={styles}>
      <NavbarMain />
      <main className="Main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<Profile />} />
          <Route path="saved" element={<Saved />} />
          <Route path="tagged" element={<Tagged />} />
          <Route path="posts" element={<Posts />}>
            <Route
              index
              element={
                <main>
                  <div>Select an post</div>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      </div>
     </ThemeProvider>
  );
}

export default App;