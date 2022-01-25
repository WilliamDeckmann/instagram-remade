/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";

// Templates
import ProfileCard from "../templates/ProfileCard";

// Components
import SocialIcon from "../components/SocialIcon";
import ThinText from "../components/ThinText";

// Assets
import HeartActiveWhite from "../assets/heartactivewhite.svg";
import ChatbubbleWhite from "../assets/chatbubblewhite.svg";

const GalleryItemHover = (props) => {

    // Bookmark state
    const [ clickState, setClickState ] = useState(false);

    if(clickState) {
        console.log(props);
    };

    // Style
    const styles = css`
        width: 100%;
        height: 100%;

        .Gallery-item-hover__main {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            background: rgb(0 0 0 / 66%);
            opacity: 0;
        };

        .Gallery-item-hover__main:hover {
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

        .Gallery-item-hover__card {
            position: fixed;
            top: 58px;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 50px 100px;
            background-color: rgba(0,0,0,.65);
        };

        .Gallery-item-hover__exit-button {
            position: absolute;
            top: 20px;
            right: 20px;
        };

        // Imports
        .Social-icon {
            height: 25px;
        };
    `;

    return (
        <div className="Gallery-item-hover" css={styles}>
            <main className="Gallery-item-hover__main"
            onClick={() => setClickState(!clickState)}>
                <section className="Gallery-item-hover__left">
                    <SocialIcon img={HeartActiveWhite} alt="heart" />
                    <ThinText text="0" />
                </section>
                <section className="Gallery-item-hover__right">
                    <SocialIcon img={ChatbubbleWhite} alt="chat-bubble" />
                    <ThinText text="0" />
                </section>
            </main>
            {clickState && 
            <div className="Gallery-item-hover__card">
                <button className="Gallery-item-hover__exit-button"
                onClick={() => setClickState(!clickState)}>
                    X
                </button>
                <ProfileCard {...props} />
            </div>}
        </div>
    );
}

export default GalleryItemHover;