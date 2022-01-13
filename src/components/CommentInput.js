/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import SocialIcon from "./SocialIcon";
import ButtonText from "./ButtonText";

// Assets
import Smiley from "../assets/smiley.svg";

const CommentInput = () => {

    const styles = css`
        display: flex;
        padding: 6px 16px;
        border-top: 1px solid lightgrey;

        .Comment-input__form {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 8px;
        };

        .Comment-input__input {
            flex: 1;
        };

        /* Imports */
        .smiley {
            padding: 8px 16px 8px 0;
        };

        .post-button {
            opacity: .3;
        };

        .post-button:hover {
            opacity: 1;
        };
    `;

    return (
        <div className="Comment-input" css={styles}>
            <div className="smiley">
                <SocialIcon img={Smiley} alt="smiley" />
            </div>
            <form className="Comment-input__form">
                <input className="Comment-input__input" placeholder="Tilføj en kommentar ..." />
                <div className="post-button">
                    <ButtonText text="Slå op" />
                </div>
            </form>
        </div>
    );
}
 
export default CommentInput;