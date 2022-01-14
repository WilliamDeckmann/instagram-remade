/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import UserInfo from "../templates/UserInfo";
import Gallery from "../components/Gallery";
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
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default Profile;