/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import SocialIcon from "../components/SocialIcon";

import ThinText from "../components/ThinText";
import DetailsText from "../components/DetailsText";
import BookmarkCollectionButton from "../components/BookmarkCollectionButton";

// Assets
import Bookmark from "../assets/settingsbookmark.svg";

const BookmarkPlaceholder = () => {

    const styles = css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .Bookmark-placeholder__header {
            width: 100%;
            margin-top: 32px 0 16px 0;

            display: flex;
            justify-content: space-between;

            // Imports
            .Details-text {
                font-size: 12px;
            };
        };

        .Bookmark-placeholder__main {
            max-width: 350px;
            margin: 60px 44px;
        };

        .Bookmark-placeholder__main, .Bookmark-placeholder__figure, .Bookmark-placeholder__title, .Bookmark-placeholder__article {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
        };

        .Bookmark-placeholder__figure {
            width: 62px;
            height: 62px;
            border: 2px solid black; 
            border-radius: 50%;

            // Imports
            .Social-icon {
                height: 28px
            };
        };

        .Bookmark-placeholder__title {

            // Imports
            .Thin-text {
                font-size: 28px;
            };
        };
    `;

    return (
        <div className="Bookmark-placeholder" css ={styles}>
            <header className="Bookmark-placeholder__header">
                <DetailsText text="Det er kun dig, der kan se det, du har gemt" />
                <BookmarkCollectionButton />
            </header>
            <main className="Bookmark-placeholder__main">
                <figure className="Bookmark-placeholder__figure">
                    <SocialIcon img={Bookmark} alt="bookmark" />
                </figure>
                <h2 className="Bookmark-placeholder__title">
                    <ThinText text="Gem" />
                </h2>
                <article className="Bookmark-placeholder__article">
                    <ThinText text="Gem billeder og videoer, du gerne vil se igen. Ingen underrettes, og det er kun dig, som kan se det, du har gemt." />
                </article>
            </main>
        </div>
    );
}
 
export default BookmarkPlaceholder;