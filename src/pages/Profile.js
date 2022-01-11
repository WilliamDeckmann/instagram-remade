/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
const Profile = () => {

  const styles = css`
      padding: 20px;
      color: red;

      .testname {
        color: blue;
      }
  `;
    return (
        <div css={styles}>
            "Profile"
            <div className="testname">
              "image"
            </div>
        </div>

    );
}

export default Profile;