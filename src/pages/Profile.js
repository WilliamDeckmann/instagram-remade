/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import UserInfo from "../templates/UserInfo";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import Saved from "../components/saved";
import Tagged from "../components/tagged";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Profile = () => {

  const Styles = css`
    display: flex;
    justify-content: center;

    .Profile__main {
        max-width: 935px;
        width: 100%;
        margin: 30px 20px 0;
    };

    .Test-container {
      width: 100%;
      height: 500px;
      border: 1px solid red;
      text-align: center;
    };
  `;

  return (
    <div className="Profile" css={Styles}>
      <main className="Profile__main">
        <UserInfo />
        {/* v1 */}
        <Gallery />
        {/* v2 */}
        {/* <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route exact path="/saved" element={<p>Bookmarks go here</p>} />
          <Route exact path="/tagged" element={<p>Tagged go here</p>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes> */}
        {/* v3 */}
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route exact path="/saved" element={<Saved />} />
          <Route exact path="/tagged" element={<Tagged />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default Profile;