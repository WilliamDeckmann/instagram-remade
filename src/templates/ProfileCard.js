/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import CommentInput from "../components/CommentInput";
import PostDetails from "../components/PostDetails";
import PostImage from "../components/PostImage";
import UserSection from "../components/UserSection";

const ProfileCard = (props) => {

    // Style
    const styles = css`
        width: 100%;
        height: 100%;
        display: flex;
        border: 1px solid lightgrey;
        background-color: white;

        .Card__link {
            text-decoration: none;
            color: black;
        };

        .Card__main {
            width: 100%;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        };


        /* Imports */
        .Post-image {
            width: calc(100vh - 58px - 50px - 50px);
        };

        .Post-details {
            text-align: left;
        };
    `;

    return (
        <div className="Card" css={styles}>
            <aside className="Card__header">
                <PostImage img={props.media_url} alt="image" />
            </aside>
            <main className="Card__main">
                <header className="Card__header">
                    <UserSection {...props} />
                    <div className="Comment-section">

                    </div>
                </header>
                <footer className="Card__footer">
                    <PostDetails {...props} />
                    <CommentInput {...props} />
                </footer>
            </main>
        </div>
    );
}
 
export default ProfileCard;