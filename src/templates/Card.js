/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import CommentInput from "../components/CommentInput";
import PostDetails from "../components/PostDetails";
import UserSection from "../components/UserSection";

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
            <Link to="/" className="Card__link">
                <header className="Card__header">
                    <UserSection />
                </header>
                <main className="Card__main">
                    <img src="" alt="image" className="Card__img"/>
                </main>
                <footer className="Card__footer">
                    <PostDetails />
                    <CommentInput />
                </footer>
            </Link>
        </div>
    );
}
 
export default Card;