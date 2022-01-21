/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import CommentInput from "../components/CommentInput";
import PostDetails from "../components/PostDetails";
import PostImage from "../components/PostImage";
import UserSection from "../components/UserSection";

// Assets
import Image from "../assets/image-test.jpg";

const Card = (props) => {

    console.log(props);

    // Style
    const styles = css`
        max-width: 614px;
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid lightgrey;

        .Card__link {
            text-decoration: none;
            color: black;
        };


        /* Imports */
        .Post-image {
            width: 100%;
        };
    `;

    return (
        <div className="Card" css={styles}>
            <header className="Card__header">
                <UserSection {...props} />
            </header>
            
            <main className="Card__main">
                <PostImage img={Image} alt="image" />
            </main>

            <footer className="Card__footer">
                <PostDetails {...props} />
                <CommentInput />
            </footer>
        </div>
    );
}
 
export default Card;