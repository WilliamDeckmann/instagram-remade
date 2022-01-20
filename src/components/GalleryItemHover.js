/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";
import ThinText from "../components/ThinText";

// Assets
import HeartActiveWhite from "../assets/heartactivewhite.svg";
import ChatbubbleWhite from "../assets/chatbubblewhite.svg";

const GalleryItemHover = () => {

    // Style
    const styles = css`
        height: 100%;
        background: rgb(0 0 0 / 66%);
        display: grid;
        place-items: center;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        opacity: 0;

        :hover {
            opacity: 1;
        };

        .Gallery-item-hover__left, .Gallery-item-hover__right {
            color: white;
            display: flex;
            place-items: center;
            gap: 10px;
        };

        .Gallery-item-hover__left {
            justify-self: end;
        };

        .Gallery-item-hover__right {
            justify-self: start;
        };

        img, .Gallery-item-hover {
            width: 100%;
            height: 100%;
        };

        // Imports
        .Social-icon {
            height: 25px;
        };
    `;

    return (
        <div className="Gallery-item-hover" css={styles}>
            <section className="Gallery-item-hover__left">
                <SocialIcon img={HeartActiveWhite} alt="heart" />
                <ThinText text="0" />
            </section>
            <section className="Gallery-item-hover__right">
                <SocialIcon img={ChatbubbleWhite} alt="chat-bubble" />
                <ThinText text="0" />
            </section>
        </div>
    );
}

export default GalleryItemHover;