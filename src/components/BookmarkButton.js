/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "./SocialIcon";

const BookmarkButton = (props) => {
    
    // Style
    const styles = css`
        padding: 8px;
    `;

    return (
        <div className="Share-button" css={styles}>
            <button className="Share-button__button">
                <SocialIcon img={props.img} alt="bookmark" />
            </button>
        </div>
    );
}
 
export default BookmarkButton;