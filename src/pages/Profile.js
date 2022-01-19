/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Route, Routes } from "react-router-dom";

// Templates
import UserInfo from "../templates/UserInfo";
import ProfileMenu from "../templates/ProfileMenu";
import ProfileGallery from "../templates/ProfileGallery";
import BookmarkGallery from "../templates/BookmarkGallery";

// Components
import ThinText from "../components/ThinText";
import Footer from "../components/Footer";

const Profile = () => {

  // Styles
  const styles = css`
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
    <div className="Profile" css={styles}>
      <main className="Profile__main">
        <UserInfo />
        <ProfileMenu />
        <Routes>
          <Route exact path="/" element={<ProfileGallery />} />
          <Route exact path="/saved" element={<BookmarkGallery />} />
          <Route exact path="/tagged" element={<ThinText text="..." />} />
          <Route path="*" element={<ThinText text="Nothing found..." />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default Profile;