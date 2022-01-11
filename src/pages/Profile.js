/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
const Profile = () => {

    const styles = css`
        padding: 20px;
        color: red;

        .user {
          color: blue;
        }
    `;

    return (
        <div css={styles}>
            "Profile"
            <div className="user">
              "user"
            </div>
        </div>
    );
}

export default Profile;