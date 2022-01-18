/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";

// Assets
// ...

const FollowButton = () => {

    // Style
    const styles = css`
        button {
            height: 30px;
            padding: 0 24px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 4px;
        };
    `;

    return (
        <div className="Follow-button"  css={styles}>
            <button className="Follow-button__button">
                <SocialIcon img="" alt="user" />
                <SocialIcon img="" alt="check-mark" />
                {/* <SocialIcon img="" alt="cross" /> */}
            </button>
        </div>
    );
}
 
export default FollowButton;