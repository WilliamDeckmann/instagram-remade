/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Route, Routes } from "react-router-dom";

// Templates
import UserInfo from "../templates/UserInfo";
import ProfileMenu from "../templates/ProfileMenu";
import GalleryContainer from "../templates/GalleryContainer";

// Components
import Footer from "../components/Footer";

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
        <ProfileMenu />
        <Routes>
          <Route exact path="/" element={<GalleryContainer />} />
          <Route exact path="/saved" element={<p>Bookmarks go here</p>} />
          <Route exact path="/tagged" element={<p>Tagged go here</p>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default Profile;