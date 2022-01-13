/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import CommentInput from "../components/CommentInput";
import PostDetails from "../components/PostDetails";
import PostImage from "../components/PostImage";
import UserSection from "../components/UserSection";

// Assets
import Image from "../assets/image-test.jpg";

const Card = (props) => {
    const {id} = props;
    console.log(props);

    const styles = css`
        max-width: 610px;
        display: flex;
        flex-direction: column;
        border: 1px solid lightgrey;

        .Card__link {
            text-decoration: none;
            color: black;
        };
    `;

    return (
        <div className="Card" css={styles}>
            <header className="Card__header">
                <UserSection />
            </header>
            <main className="Card__main">
                <PostImage img={Image} alt="image" />
            </main>
            <footer className="Card__footer">
                <PostDetails />
                <CommentInput />
            </footer>
        </div>
    );
}
 
export default Card;